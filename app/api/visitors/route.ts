import { getAllVisitors } from '@/lib/services/visitors/visitor';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const visitors = await getAllVisitors();

    if (!visitors || visitors.length === 0) {
      return new Response(JSON.stringify({ message: 'No visitors found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(visitors), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching visitors:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
