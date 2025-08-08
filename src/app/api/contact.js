import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, phone, service, budget, message } = req.body;

  // Use environment variables for credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // set in Vercel dashboard
      pass: process.env.EMAIL_PASS, // set in Vercel dashboard
    },
  });

  await transporter.sendMail({
    from: `"QodeCore Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER, // set in Vercel dashboard
    subject: 'New Contact Form Submission',
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Budget:</strong> ${budget}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  });

  res.status(200).json({ success: true });
}