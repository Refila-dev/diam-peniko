import { badRequestError, notFoundError } from "@/lib/util/error";
import { prisma } from "../..";
import { CreateUser } from "@/lib/validation/users/user.schema";
import bcrypt from "bcrypt";

export function getAllUsers() {
  const users = prisma.users.findMany();
  if(!users) {
    throw notFoundError("No users found");
  }
  return users;
}

export const saveUser = async(data:CreateUser)=>{
  try {
    const {name, username, birth_date, place_of_birth, profession, email, password} = data;

    const nowDate = new Date(Date.now());

    const formattedDate = new Date(birth_date+'T00:00:00Z');

    const criptedPassword = await bcrypt.hash(password, 10);

    if(!criptedPassword) {
      throw badRequestError("Failed to hash password");
    }

    const existingUser = await prisma.users.findUnique({
      where: { email }
    });

    if(existingUser) {
      throw badRequestError("Email already exists");
    }

    if(existingUser) {
      throw badRequestError("Username already exists");
    }

    if(!name || !username || !birth_date || !place_of_birth || !profession || !email || !password) {
      throw badRequestError("All fields are required");
    }

    const newUser = await prisma.users.create({
      data: {
        name,
        username,
        birth_date: formattedDate,
        place_of_birth,
        profession,
        email,
        password: criptedPassword,
        created_at: nowDate
      }
    });
    return newUser;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error("Failed to save user: " + message);
  }
}