export const reminderEmailTemplate = ({ name, amount, paymentLink }) => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
  
        <body style="margin: 0; padding: 0; background-color: #f4f5f7; font-family: Arial, sans-serif;">
  
          <table width="100%" cellpadding="0" cellspacing="0" style="padding: 30px 12px;">
            <tr>
              <td align="center">
  
                <table width="100%" cellpadding="0" cellspacing="0"
                  style="max-width: 520px; background: #ffffff; border-radius: 12px; overflow: hidden;">
  
                  <!-- Header -->
                  <tr>
                    <td align="center" style="background: #172554; padding: 28px 20px;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 24px;">
                        Spotify Family
                      </h1>
                      <p style="margin: 8px 0 0; color: #bfdbfe; font-size: 12px; letter-spacing: 1px;">
                        PAYMENT REMINDER
                      </p>
                    </td>
                  </tr>
  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 32px 28px; color: #374151;">
  
                      <h2 style="margin: 0 0 20px; color: #111827; font-size: 22px;">
                        Your payment is due!
                      </h2>
  
                      <p style="font-size: 15px; line-height: 1.6;">
                        Hi ${name},
                      </p>
  
                      <p style="font-size: 15px; line-height: 1.6;">
                        Just a friendly reminder that your monthly Spotify Family payment is due.
                      </p>
  
                      <!-- Amount -->
                      <table width="100%" cellpadding="0" cellspacing="0"
                        style="background: #f3f4f6; border-radius: 8px; margin: 24px 0;">
                        <tr>
                          <td align="center" style="padding: 20px;">
                            <p style="margin: 0 0 8px; color: #6b7280; font-size: 12px;">
                              AMOUNT DUE
                            </p>
                            <h2 style="margin: 0; color: #111827; font-size: 30px;">
                              ₹${amount}
                            </h2>
                          </td>
                        </tr>
                      </table>
  
                      <!-- Payment Button -->
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center" style="padding: 12px 0 24px;">
                            <a href="${paymentLink}"
                              style="display: inline-block; background: #15803d; color: #ffffff;
                              text-decoration: none; padding: 14px 32px; border-radius: 8px;
                              font-size: 15px; font-weight: bold;">
                              Pay via UPI
                            </a>
                          </td>
                        </tr>
                      </table>
  
                      <p style="font-size: 14px; line-height: 1.6;">
                        Thank you!
                      </p>
  
                    </td>
                  </tr>
  
                  <!-- Footer -->
                  <tr>
                    <td align="center" style="background: #f9fafb; padding: 22px;">
                      <p style="margin: 0; color: #6b7280; font-size: 12px;">
                        This is an automated payment reminder.
                      </p>
                      <p style="margin: 8px 0 0; color: #9ca3af; font-size: 11px;">
                        If you've already paid, please ignore this reminder.
                      </p>
                    </td>
                  </tr>
  
                </table>
  
              </td>
            </tr>
          </table>
  
        </body>
      </html>
    `;
  };