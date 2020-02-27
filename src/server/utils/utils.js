import nodemailer from 'nodemailer';
let utils = {};

var apiKey = '384ea8551a1951f684d7d30b174f4cc7-us19'; //mailchimp

const transporter = nodemailer.createTransport({
    service: 'mailchimp',
    auth: {
        user: 'lata.tiwari2101@gmail.com',
        pass: 'Task@0987654321'
    },
});

const sendingMail = ( params ) => {
        let options = {
            from : 'lata.tiwari2101@gmail.com',
            to : params.to,
            subject : "Form Mail",
            html: params.html,
        };

        transporter.sendMail(options);
};

export default utils = {
    sendingMail,
};