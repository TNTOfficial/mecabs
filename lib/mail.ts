import nodemailer from "nodemailer";
// import path from "path";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const domain = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

const getBaseEmailTemplate = (content: string) => `
<html>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <h1 style="color: #4a4a4a;">Welcome to Me cabs!</h1>
    ${content}
  </body>
</html>
`;

// const getDefaultAttachment = () => [
//   {
//     filename: "logo.png",
//     path: path.join( "./public/logo.png"),
//     cid: "logo",
//   },
// ];

const sendEmail = async (to: string, subject: string, htmlContent: string) => {
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to,
    subject,
    html: getBaseEmailTemplate(htmlContent),
    // attachments: getDefaultAttachment(),
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const htmlContent = `
  <p>Thank you for signing up. Please confirm your email address to get started.</p>
  <p>
   ${token}
  </p>
  <p>If you're having trouble clicking the button, copy and paste this URL into your web browser:</p>
`;
  await sendEmail(email, "Confirm your email", htmlContent);
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;
  const htmlContent = `
    <p>Reset your password</p>
    <p>
      <a href="${resetLink}" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
        Reset Password
      </a>
    </p>
    <p>If you're having trouble clicking the button, copy and paste this URL into your web browser:</p>
    <p>${resetLink}</p>
  `;
  await sendEmail(email, "Reset your password", htmlContent);
};
