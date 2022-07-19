export interface SendEmailData {
  subject: string;
  body: string;
}

export interface MailAdapter {
  sendMail: (data: SendEmailData) => Promise<void>; 
}