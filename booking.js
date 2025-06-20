// booking.js (Node backend)
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail', // or 'Outlook', 'SendGrid', etc.
  auth: {
    user: 'yourapp@gmail.com',
    pass: 'your-app-password'
  }
});

function sendTicketEmail(userEmail, ticketData) {
  const mailOptions = {
    from: 'Boomski Flights <yourapp@gmail.com>',
    to: userEmail,
    subject: '🎫 Your Boomski Flight Ticket',
    html: `
      <h2>Hey ${ticketData.name},</h2>
      <p>Your flight from <b>${ticketData.from}</b> to <b>${ticketData.to}</b> on <b>${ticketData.date}</b> is confirmed!</p>
      <p>Ticket Number: <b>${ticketData.code}</b></p>
      <p>Thank you for choosing Boomski ✈</p>
    `
  };

  return transporter.sendMail(mailOptions);
}
