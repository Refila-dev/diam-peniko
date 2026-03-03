import { getAllUsers } from "@/lib/services/users/user";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const users = await getAllUsers();

    if (!users || users.length === 0) {
      return new Response(JSON.stringify({ message: 'No users found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(users), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
