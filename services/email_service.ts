import sgMail from '@sendgrid/mail';
import { getEmailTemplate } from '../functions/get_email_template';

export interface EmailDto {
    to: string,
    from: string,
    subject: string,
    text: string,
    html: string,
}

export default class EmailService {
    public async sendContactEmail(name: string, email: string, message: string, subject: string): Promise<void> {
        await this.sendEmail({
            to: 'jonathaanemanuel21@gmail.com',
            subject: subject,
            text: subject,
            html: getEmailTemplate(name, email, message),
        })
    }

    private async sendEmail(emailDto: Omit<EmailDto, 'from'>): Promise<void> {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? '')
        await sgMail.send({ from: process.env.EMAIL_SENDER ?? '', ...emailDto })
    }
}