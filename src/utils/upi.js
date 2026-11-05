import { config } from "../../env/config.js";

export const generateUpiLink = (amount, note = "Spotify Family Payment") => {
  const params = new URLSearchParams({
    pa: config.upiId,
    am: amount.toFixed(2),
    cu: "INR",
    tn: note,
  });

  return `upi://pay?${params.toString()}`;
};