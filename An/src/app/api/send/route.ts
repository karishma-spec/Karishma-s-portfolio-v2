import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { render, pretty } from "@react-email/render";
import validator from "validator";

import { EmailTemplate } from "@/components/template/Email";

export async function POST(request: Request) {
  const body = await request.json();
  const { senderName, senderEmail, reasonToContact, senderMsg } = body;

  if (
    !senderName ||
    !senderEmail ||
    !reasonToContact ||
    !senderMsg ||
    typeof senderName !== "string" ||
    typeof senderEmail !== "string" ||
    typeof reasonToContact !== "string" ||
    typeof senderMsg !== "string"
  ) {
    return NextResponse.json({ error: "Invalid input data" }, { status: 400 });
  }

  if (!validator.isEmail(senderEmail)) {
    return NextResponse.json(
      { error: "Email format is not valid" },
      { status: 400 }
    );
  }

  // Prepare the fancy HTML email that goes back to the user
  const htmlContent = await pretty(
    await render(
      EmailTemplate({
        userName: senderName,
        contactReason: reasonToContact,
        userMessage: senderMsg,
      })
    )
  );

  // Email 1: The auto-reply sent to the user
  const messageToUser = {
    from: `"Karishma Bishnoi" <${process.env.email_from}>`,
    to: `${senderName} <${senderEmail}>`,
    subject: "Your message has landed! 🚀 I'll get back to you shortly.",
    html: htmlContent,
    headers: {
      "X-Entity-Ref-ID": "newmail",
    },
  };

  // Email 2: The actual notification sent to YOU
  const messageToYou = {
    from: `"Portfolio Form" <${process.env.email_from}>`,
    to: process.env.email_from,
    subject: `New Portfolio Message from ${senderName}`,
    text: `You have a new message from your portfolio!\n\nName: ${senderName}\nEmail: ${senderEmail}\nReason: ${reasonToContact}\nMessage:\n${senderMsg}`,
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.email_from,
      pass: process.env.email_password,
    },
  });

  try {
    // Send both emails!
    await transporter.sendMail(messageToUser);
    await transporter.sendMail(messageToYou);
    
    return NextResponse.json(
      {
        message: `Email has been sent successfully`,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error(`Error sending email:`, err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
