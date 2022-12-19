import nodemailer from 'nodemailer';
import  'dotenv/config';

export const Message = async (req, res) => {
    console.log(req.body)
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: process.env.CONTACT_USER,
            pass: process.env.CONTACT_PASS,
        }
    });
    const mailOptions = {
        from: req.body.email,
        to: 'israel.dickinson74@ethereal.email',
        subject: `You have a new message from ${req.body.email}`,
        text: `
        Contact Details
        Fullname : ${req.body.name} ${req.body.surname}
        
        Message : ${req.body.textarea}
    `
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error')
        } else {
            console.log(`Email sent : ${info.response}`);
            console.log(`dd : ${info}`);
            res.send('success')
        }
    })

}
