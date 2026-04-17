// app/api/submit/route.js

import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();

  const { name, email, company, phone, message, budget, calendlyLink } = body;

  const response = await fetch(
    `${process.env.NOCODB_URL}/api/v1/db/data/noco/${process.env.NOCODB_BASE_ID}/${process.env.NOCODB_TABLE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "xc-token": process.env.NOCODB_API_TOKEN,
      },
      body: JSON.stringify({
        name: name,
        email: email,
        company: company,
        phone: phone,
        message: message,
        budget: budget,
        calendlyLink: calendlyLink,
      }),
    },
  );

  const data = await response.json();

  return NextResponse.json({ success: true, data });
}
