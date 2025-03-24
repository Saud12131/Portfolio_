import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  fullname: string;
  email: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const { fullname, email, message }: ContactFormData = await req.json();

    if (!fullname || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Message from ${fullname}`,
      text: message,
      html: `
        <p><strong>Name:</strong> ${fullname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to send email. Try again later." },
      { status: 500 }
    );
  }
}
