import { NextResponse } from "next/server";

export async function POST(request) {
  const { eventUri } = await request.json();

  const response = await fetch(eventUri, {
    headers: {
      Authorization: `Bearer ${process.env.CALENDLY_API_TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  const meetLink = data?.resource?.location?.join_url || null;

  return NextResponse.json({ meetLink });
}
