const nodemailer = require('nodemailer')

let transporter =  nodemailer.createTransport({
    host : 'smtp.gmail.com',
    port : 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'tekulapellil2003@gmail.com', // generated ethereal user
        pass: 'Sridurga@132003' // generated ethereal password
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: 'tekulapellil2003@gmail.com', // sender address
    to: 'keerthivardhantekulapelli@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
});




