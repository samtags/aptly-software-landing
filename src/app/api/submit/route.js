import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const body = await request.json();
  const { name, email, company, phone, message, budget, calendlyLink } = body;

  // 1. Save sa NocoDB
  await fetch(
    `${process.env.NOCODB_URL}/api/v1/db/data/noco/${process.env.NOCODB_BASE_ID}/${process.env.NOCODB_TABLE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "xc-token": process.env.NOCODB_API_TOKEN,
      },
      body: JSON.stringify({
        name,
        email,
        company,
        phone,
        message,
        budget,
        calendlyLink,
      }),
    },
  );

  await resend.contacts.create({
    email,
    firstName: name,
    audienceId: process.env.RESEND_AUDIENCE_ID,
  });

  console.log("Resend response:", resendRes);

  return NextResponse.json({ success: true });
}
