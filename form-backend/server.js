/* eslint-env node */
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { EmailTemplate } from "./emailTemplate/Email-Template.js";
import { Resend } from "resend";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const defaultCorsOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://dkhomecleaning.com",
  "https://www.dkhomecleaning.com",
];
const configuredCorsOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(",").map((origin) => origin.trim())
  : [];
const corsOrigins = new Set([
  ...defaultCorsOrigins,
  ...configuredCorsOrigins,
]);
const resend = new Resend(process.env.RESEND_API_KEY);

function isAllowedOrigin(origin) {
  if (!origin) {
    return true;
  }

  if (corsOrigins.has(origin)) {
    return true;
  }

  try {
    const url = new URL(origin);
    return (
      ["localhost", "127.0.0.1"].includes(url.hostname) &&
      ["http:", "https:"].includes(url.protocol)
    );
  } catch {
    return false;
  }
}

function normalizePhoneNumber(value = "") {
  const digits = String(value).replace(/\D/g, "");

  if (digits.startsWith("44") && digits.length === 12) {
    return `0${digits.slice(2)}`;
  }

  if (digits.startsWith("7") && digits.length === 10) {
    return `0${digits}`;
  }

  return digits;
}

app.use(
  cors({
    origin(origin, callback) {
      if (isAllowedOrigin(origin)) {
        callback(null, true);
        return;
      }

      console.warn(`Blocked CORS origin: ${origin}`);
      callback(null, false);
    },
  }),
);
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.post("/form-submission", async (req, res) => {
  try {
    const { name, email, confirmationEmail, message, phoneNumber } = req.body;
    const normalizedPhoneNumber = normalizePhoneNumber(phoneNumber);

    const errors = {};

    if (!name?.trim()) {
      errors.name = "Name is required";
    } else if (name.trim().length < 3) {
      errors.name = "Name must be at least 3 characters";
    }

    if (!email?.trim()) {
      errors.email = "Email is required";
    } else if (!email.includes("@")) {
      errors.email = "Email must include @";
    }

    if (
      !confirmationEmail?.trim() ||
      email.trim() !== confirmationEmail.trim()
    ) {
      errors.confirmationEmail = "Email doesn't match";
    }

    if (!message || message.trim().split(/\s+/).length < 3) {
      errors.message = "Message needs more than 3 words.";
    }

    const phoneRegex = /^0[1237]\d{9}$/;
    if (!phoneRegex.test(normalizedPhoneNumber)) {
      errors.phoneNumber = "Enter a valid UK phone number";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
    }

    const html = EmailTemplate({
      name: name.trim(),
      email: email.trim(),
      phoneNumber: normalizedPhoneNumber,
      message,
    });

    const { data, error } = await resend.emails.send({
      from: "DK Home Cleaning <andrew@duckpixel.com>",
      to: [
        "andrew.wardjones@gmail.com",
        "andrew.wardjones@icloud.com",
        "dave@dkhomecleaning.com",
        "karen@dkhomecleaning.com",
      ],
      subject: "Message from DK Home Cleaning Site",
      html,
    });

    if (error) {
      console.error("Resend failed to send contact email", error);
      return res.status(502).json({
        errors: {
          server: "Email failed to send",
        },
      });
    }

    console.log("Sent!");

    return res.status(200).json({
      success: {
        data,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      errors: {
        server: "Server error",
      },
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
