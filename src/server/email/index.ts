import { env } from "@/env.mjs";
import { type ReactNode } from "react";
import { Resend } from "resend";

export const resend = new Resend(env.RESEND_KEY);

interface SendProps {
  react: ReactNode;
  from: string;
  subject: string;
}

export class Email {
  static send(props: SendProps) {
    return resend.emails.send({
      ...props,
      to: [env.EMAIL],
      html: "",
    });
  }
}
