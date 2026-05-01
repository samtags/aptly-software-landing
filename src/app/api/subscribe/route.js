// app/api/subscribe/route.js

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { email } = await request.json();

  console.log("Subscribe email:", email); // ← idagdag

  const resendRes = await resend.contacts.create({
    email,
    firstName: email.split("@")[0],
    audienceId: process.env.RESEND_AUDIENCE_ID,
  });

  console.log("Resend subscribe response:", resendRes); // ← idagdag

  return NextResponse.json({ success: true });
}
