require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Email credentials
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { name, phone, email, message } = req.body;

    // Set up email options
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'recipient-email@example.com',
        subject: 'New Form Submission',
        text: `Name: ${ name }\nPhone: ${ phone }\nEmail: ${ email }\nMessage: ${ message }`,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${ PORT }`);
});
