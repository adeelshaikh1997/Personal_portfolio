const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'adeelshaikhmw3@gmail.com', // your Gmail address
    pass: 'djffqwopxlsxakee' // your new app password, no spaces
  }
});

transporter.sendMail({
  from: 'adeelshaikhmw3@gmail.com',
  to: 'adeelshaikhmw3@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email from Nodemailer'
}, (err, info) => {
  if (err) {
    return console.log('Error:', err);
  }
  console.log('Email sent:', info.response);
});