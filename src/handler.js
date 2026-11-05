import "dotenv/config";
import { sendEmail } from "./services/brevo.js";
import { generateUpiLink } from "./utils/upi.js";
import { config } from "../config/env.config.js";
import { reminderEmailTemplate } from "./templates/reminderEmail.js";

const recipients = config.recipients;

export const handler = async () => {
  console.log("Starting monthly payment reminders");

  const activeRecipients = recipients.filter(
    (recipient) => recipient.active !== false
  );


  const results = await Promise.allSettled(
    activeRecipients.map(async (recipient) => {
      const paymentLink = generateUpiLink(recipient.amount);
      const subject = "Monthly Spotify Payment Reminder";

      const htmlContent = reminderEmailTemplate({
        name: recipient.name,
        amount: recipient.amount,
        paymentLink,
      });

      return sendEmail({
        to: {
          name: recipient.name,
          email: recipient.email,
        },
        subject,
        htmlContent,
      });
    })
  );

  const successful = results.filter(
    (result) => result.status === "fulfilled"
  ).length;

  const failed = results.filter(
    (result) => result.status === "rejected"
  );

  console.log("Reminder execution completed", {
    total: activeRecipients.length,
    successful,
    failed: failed.length,
  });

  failed.forEach((result) => {
    console.error("Failed to send reminder:", result.reason);
  });

  if (failed.length > 0) {
    throw new Error(`${failed.length} reminder emails failed`);
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "All reminders sent successfully",
      total: activeRecipients.length,
    }),
  };
};