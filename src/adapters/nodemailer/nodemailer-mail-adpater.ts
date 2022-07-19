import { MailAdapter, SendEmailData } from "../mail-adpater";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "13dec91d998adf",
    pass: "ca0d264bf03bf4"
  }
});

export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({ subject, body }: SendEmailData){
    await transport.sendMail({
      from: 'Equipe Feedget <support@feedget.com>',
      to: 'Igor Braz <igorcbraz1@gmail.com>',
      subject,
      html: body,
    });
  }
}