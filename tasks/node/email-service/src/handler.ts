import type { FastifyReply, FastifyRequest } from "fastify";
import { createTransport, type Transporter } from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport/index.js";
import { config } from "@/config.js";
import type { SendEmailBody } from "@/schema.js";

const transporter: Transporter<
  SMTPTransport.SentMessageInfo,
  SMTPTransport.Options
> = createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: config.email.user,
    pass: config.email.password,
  },
});

export async function sendEmailHandler(
  request: FastifyRequest<{ Body: SendEmailBody }>, 
  reply: FastifyReply,
) {
  const { destination, subject, body } = request.body;

  try {
    const info = await transporter.sendMail({
      from: `"${config.email.fromName}" <${config.email.fromAddress}>`,
      to: destination,
      subject,
      text: body,
    });
    
    if (info.rejected.length > 0) {
      request.log.error({ rejected: info.rejected }, 'Email rejected by server');
      return reply.status(500).send({ error: "Email was rejected by the server" });
    }
    
    request.log.info({ messageId: info.messageId, destination }, 'Email sent successfully');
    return reply.status(200).send({ message: "Email sent successfully" });
    
  } catch (error) {
    request.log.error({ error, destination }, 'Failed to send email');
    return reply.status(500).send({ error: "Failed to send email" });
  }
}

export async function closeTransporter() {
  transporter.close();
}
