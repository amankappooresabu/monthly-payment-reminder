export const config = {
    brevo: {
      apiKey: process.env.BREVO_API_KEY,
      senderEmail: process.env.BREVO_SENDER_EMAIL,
      senderName: process.env.BREVO_SENDER_NAME,
    },

    upiId: process.env.UPI_ID,
    recipients: JSON.parse(process.env.RECIPIENTS_CONFIG || "[]"),
  };