// Get the full source code, including the theme and Tailwind config:
// https://github.com/resend/react-email/tree/canary/apps/demo/emails

import { boxedTailwindConfig } from "@workspace/email/templates/theme";
import { Fonts } from "@workspace/email/templates/theme-fonts";
import { env } from "@workspace/env/server";
import * as React from "react";
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "react-email";

void React;

const baseUrl = env.WEB_URL;

export interface PasswordResetEmailProps {
  companyName: string;
  url: string;
}

export const PasswordResetEmail = ({
  companyName,
  url,
}: PasswordResetEmailProps) => (
  <Tailwind config={boxedTailwindConfig}>
    <Html>
      <Head>
        <Fonts />
      </Head>

      <Body className="bg-bg-2 m-0 text-center font-sans">
        <Preview>Reset your password</Preview>
        <Container className="mobile:mt-0 mx-auto mt-8 w-full max-w-160">
          <Section>
            <Section className="bg-bg mobile:px-2 px-6 py-4">
              <Section className="mb-3 px-6">
                <Row>
                  <Column className="w-1/2 py-1.75 align-middle">
                    <Row>
                      <Column className="w-8 align-middle">
                        <Img
                          src={`${baseUrl}/email/logo-black.png`}
                          alt=""
                          width={23}
                          className="block"
                        />
                      </Column>
                    </Row>
                  </Column>
                  <Column align="right" className="w-1/2 py-1.75 align-middle">
                    <Text className="font-13 m-0 text-right font-sans">
                      <span className="text-fg-3">{companyName}</span>
                    </Text>
                  </Column>
                </Row>
              </Section>

              <Section className="bg-bg-2 mobile:px-6 mobile:py-12 rounded-[8px] px-10 py-16 text-center">
                <Section className="mb-3">
                  <Img
                    src={`${baseUrl}/email/logo-black.png`}
                    alt="Logo"
                    width={48}
                    className="mx-auto mb-5 block"
                  />
                  <Heading as="h1" className="font-28 text-fg m-0 font-sans">
                    Reset your password
                  </Heading>
                </Section>

                <Text className="font-16 text-fg-2 mx-auto mt-0 mb-8 max-w-95 text-center font-sans">
                  Someone has requested a link to change your password, and you
                  can do this through the link below.
                </Text>

                <Section className="mb-6 text-center">
                  <Button
                    href={url}
                    className="bg-fg font-16 text-fg-inverted inline-block rounded-lg px-7 py-4 text-center font-sans leading-6"
                  >
                    Change password
                  </Button>
                </Section>

                <Text className="font-13 text-fg-3 mx-auto mt-0 mb-8 max-w-100 text-center font-sans">
                  If the button does not work, copy and paste this link into
                  your browser:
                  <br />
                  <Link href={url} className="text-fg-2 break-all underline">
                    {url}
                  </Link>
                </Text>

                <Text className="font-13 text-fg-3 mx-auto mt-8 mb-0 max-w-100 text-center font-sans">
                  If you didn&apos;t request this, please ignore this email.
                  Your password won&apos;t change until you access the link
                  above and create a new one.
                </Text>
              </Section>

              {/* Footer */}
              <Section className="bg-bg">
                <Row>
                  <Column className="px-6 py-10 text-center">
                    <Text className="font-13 text-fg-3 mx-auto mt-0 mb-8 max-w-70 text-center font-sans">
                      Barebones is the catchy slogan that perfectly encapsulates
                      the vision of our company.
                    </Text>

                    <Section className="mb-8">
                      <Link
                        href="https://example.com/"
                        className="inline-block px-2 align-middle"
                      >
                        <Img
                          src={`${baseUrl}/email/social-x-black.png`}
                          alt="X"
                          width={18}
                          className="block"
                        />
                      </Link>
                      <Link
                        href="https://example.com/"
                        className="inline-block px-2 align-middle"
                      >
                        <Img
                          src={`${baseUrl}/email/social-in-black.png`}
                          alt="LinkedIn"
                          width={18}
                          className="block"
                        />
                      </Link>
                      <Link
                        href="https://example.com/"
                        className="inline-block px-2 align-middle"
                      >
                        <Img
                          src={`${baseUrl}/email/social-yt-black.png`}
                          alt="YouTube"
                          width={18}
                          className="block"
                        />
                      </Link>
                      <Link
                        href="https://example.com/"
                        className="inline-block px-2 align-middle"
                      >
                        <Img
                          src={`${baseUrl}/email/social-gh-black.png`}
                          alt="GitHub"
                          width={18}
                          className="block"
                        />
                      </Link>
                    </Section>

                    <Text className="font-11 text-fg-3 mt-4 mb-5 text-center font-sans">
                      123 Market Street, Floor 1
                      <br />
                      Tech City, CA, 94102
                    </Text>
                    <Text className="font-11 text-fg-3 m-0 text-center font-sans">
                      <Link href="https://example.com/" className="text-fg-3">
                        Unsubscribe
                      </Link>{" "}
                      from {companyName} marketing emails.
                    </Text>
                  </Column>
                </Row>
              </Section>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  </Tailwind>
);

PasswordResetEmail.PreviewProps = {
  companyName: "Barebones",
  url: "https://example.com/",
} satisfies PasswordResetEmailProps;

export default PasswordResetEmail;
