const sgMail = require('@sendgrid/mail')
const { getEmailTemplate } = require('../functions/get_email_template')

async function sendContactEmail({ name, email, message }) {
    await sendEmail({
        to: process.env.EMAIL_RECEIVER ?? '',
        subject: 'Contato vindo do portfólio',
        text: 'Contato vindo do portfólio',
        html: getEmailTemplate(name, email, message),
    })
}

async function sendEmail(emailDto) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? '')
    await sgMail.send({ from: process.env.EMAIL_SENDER ?? '', ...emailDto })
}

module.exports = { sendContactEmail }