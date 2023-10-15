const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount

    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'karen21@ethereal.email',
            pass: '6vS9hzxUgbvD9SHJaF'
        }
    });

    let info = await transporter.sendMail({
        from: '"Vinod Thapa" <thapa@gmail.com>',
        to:"iamthapatechnical@gmail.com",
        subject:"Hello Thapa",
        text: "Hello YT Thapa",
        html: "<b>Hello YT Thapa</b>",
    });

    console.log("Message sent: %s", info.messageId);

    res.send(info);
}

module.exports = sendMail;