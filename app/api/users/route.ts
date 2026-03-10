import { getAllUsers, saveUser } from "@/lib/services/users/user";
import { CreateUser } from "@/lib/validation/users/user.schema";
import { FastifyReply, FastifyRequest } from "fastify";
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

export async function POST(req: Request) {
  try {
    const data: CreateUser = await req.json();

    const newUser = await saveUser(data);

    return new Response(JSON.stringify(newUser), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({
        message: error instanceof Error ? error.message : String(error)
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}
