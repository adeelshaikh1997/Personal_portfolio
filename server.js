const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const PORT = 3001; // You can change this port if needed

app.use(cors());
app.use(express.json());

// POST endpoint to handle contact form submissions
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Configure your email transport (use an app password for Gmail or your provider's SMTP)
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'adeelshaikhmw3@gmail.com', // <-- Replace with your email
      pass: 'djffqwopxlsxakee'   // <-- Replace with your app password
    }
  });

  // Verify the transporter configuration
  transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP Error:', error);
  } else {
    console.log('SMTP Server is ready to send emails');
  }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'adeelshaikhmw3@gmail.com', // <-- Replace with your email
      subject: `Portfolio Contact from ${name}`,
      text: message,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p>${message}</p>`
    });
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.log(error); // <-- This prints the real error to your terminal!
    res.status(500).json({ message: 'Failed to send message.', error });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 