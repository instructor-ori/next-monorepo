import PasswordResetEmail from "@workspace/email/templates/password-reset";
import VerifyEmail from "@workspace/email/templates/verify-email";
import { env } from "@workspace/env/server";
import nodemailer, { type SendMailOptions } from "nodemailer";
import React from "react";
import { render, toPlainText } from "react-email";

const Templates = {
  VerifyEmail,
  PasswordResetEmail,
} as const;

const mailpitTransport = nodemailer.createTransport({
  host: env.MAILPIT_HOST,
  port: env.MAILPIT_PORT,
  secure: false,
});

export type TemplateKey = keyof typeof Templates;
export type TemplateProps<K extends TemplateKey> = React.ComponentProps<
  (typeof Templates)[K]
>;

export async function sendMail<K extends TemplateKey>({
  templateKey,
  props,
  options,
}: {
  templateKey: K;
  props: React.ComponentProps<(typeof Templates)[K]>;
  options: SendMailOptions;
}) {
  const element = React.createElement(
    Templates[templateKey] as React.ComponentType<TemplateProps<K>>,
    props as TemplateProps<K> & React.Attributes,
  );
  const html = await render(element);
  const text = toPlainText(html);

  await mailpitTransport.sendMail({
    from: "Acme Inc. <info@acme.com>",
    text,
    html,
    ...options,
  });
}
