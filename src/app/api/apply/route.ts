import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ApplyData = {
  name: string;
  email: string;
  mobile: string;
  portfolio?: string;
  resume: File | null;
  reason: string;
};

export async function POST(req: NextRequest) {
  try {
    const { name, email, mobile, portfolio, resume, reason }: ApplyData = await req.json();

    if (!name || !email || !mobile || !resume || !reason) {
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
      subject: `New Application from ${name}`,
      html: `
          <h2>New Lead Generator Application</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mobile:</strong> ${mobile}</p>
          <p><strong>Portfolio:</strong> ${portfolio || "Not provided"}</p>
                <p><strong>Reason:</strong> ${resume}</p>
          <p><strong>Reason:</strong> ${reason}</p>
        `,
    });

    return NextResponse.json(
      { success: true, message: "Application submitted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send application." },
      { status: 500 }
    );
  }
}
