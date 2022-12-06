import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

type SendMailProps = {
  firstName?: string;
  lastName?: string;
  company?: string;
  phone?: string;
  from: string;
  to: string;
  subject?: string;
  message?: string;
};

const defaultSendMailProps = {
  to: process.env.CONTACT_RECIPIENT_EMAIL,
};

const isSendMailPropsType = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toBeDetermined: any
): toBeDetermined is SendMailProps => {
  if ((toBeDetermined as SendMailProps).from) {
    return true;
  }
  return false;
};

const safeJsonParse =
  // prettier-ignore
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <T>(guard: (o: any) => o is T) =>
    (text: string): ParseResult<T> => {
      let parsed;
      try {
        parsed = JSON.parse(text);
      } catch (e) {
        return { hasError: true };
      }
      return guard(parsed) ? { parsed, hasError: false } : { hasError: true };
    };

type ParseResult<T> =
  | { parsed: T; hasError: false; error?: undefined }
  | { parsed?: undefined; hasError: true; error?: unknown };

const sendMail = async (props: SendMailProps) => {
  const nodemailerOptions: SMTPTransport.Options = {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT ? +process.env.SMTP_PORT : undefined,
    secure: process.env.IS_SMTP_SECURE == 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  };

  const transport = nodemailer.createTransport(nodemailerOptions);

  const mailOption = {
    from:
      props.firstName || props.lastName || props.company || props.phone
        ? `
          "
          ${props.firstName && props.firstName}
          ${props.lastName && ` ${props.lastName}`}
          ${props.company && ` (${props.company})`}
          ${props.phone && ` (${props.phone})`}
          " 
          <${props.from}>
          `
        : props.from,
    to: props.to,
    subject: '[Contact - ysely.io] ' + (props.subject ? props.subject : ''),
    text: props.message ? props.message : '',
  };

  try {
    await transport.verify();
    const info = await transport.sendMail(mailOption);

    if (info.messageId) {
      return true;
    } else {
      console.error('There was an error while sending email:', info, props);
    }
  } catch (err) {
    console.error('Error while sending email:', err, props);
  }

  return false;
};

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body) {
    res.status(400).json({ status: 'Bad parameters' });
    return;
  }

  const jsonBodyAsString =
    typeof req.body === 'object'
      ? JSON.stringify(req.body)
      : typeof req.body === 'string'
      ? req.body
      : '{}';

  const result = safeJsonParse(isSendMailPropsType)(jsonBodyAsString);
  if (result.hasError) {
    res.status(400).json({ status: 'Bad parameters' });
    return;
  }

  if (await sendMail({ ...defaultSendMailProps, ...result.parsed })) {
    res.status(200).json({ status: 'Ok' });
  } else {
    res.status(502).json({ status: 'Unable to send email' });
  }
};

export default contact;
