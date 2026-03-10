import { prisma } from "@/lib";
import bcrypt from "bcrypt";

export async function login(email: string, password: string) {
  try {
    const data = await prisma.users.findUnique({
      where: { email },
    });

    if (!data) {
      throw new Error("User not found");
    }

    const isValid = await bcrypt.compare(password, data.password);
    if (!isValid) {
      throw new Error("Invalid password");
    }

    return {
      id: data.user_id,
      name: data.name,
      username: data.username,
      email: data.email,
    };
  } catch (error) {
    console.error("Error during login:", error);
    throw new Error("Login failed");
  }
}
