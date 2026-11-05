
import { config } from "../../config/env.config";

export const sendEmail = async ({
  to,
  subject,
  htmlContent,
}) => {
  const { apiKey, senderEmail, senderName } = config.brevo;

  if (!apiKey || !senderEmail || !senderName) {
    throw new Error("Missing Brevo configuration");
  }

  const response = await fetch(
    "https://api.brevo.com/v3/smtp/email",
    {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: senderName,
          email: senderEmail,
        },
        to: [
          {
            name: to.name,
            email: to.email,
          },
        ],
        subject,
        htmlContent,
      }),
    }
  );

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(
      `Brevo API error (${response.status}): ${
        JSON.stringify(responseData)
      }`
    );
  }

  return responseData;
};
