import { notFoundError } from "@/lib/util/error";
import { prisma } from "../..";

export function getAllUsers() {
  const users = prisma.users.findMany();
  if(!users) {
    throw notFoundError("No users found");
  }
  return users;
}
