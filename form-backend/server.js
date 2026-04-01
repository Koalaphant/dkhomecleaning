/* eslint-env node */
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { EmailTemplate } from "./emailTemplate/Email-Template.js";
import { Resend } from "resend";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const corsOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(",").map((origin) => origin.trim())
  : ["http://localhost:5173", "http://localhost:5174"];
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors({ origin: corsOrigins }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.post("/form-submission", async (req, res) => {
  try {
    const {
      name,
      email,
      confirmationEmail,
      message,
      phoneNumber,
    } = req.body;

    const errors = {};

    if (!name) {
      errors.name = "Name is required";
    } else if (name.length < 3) {
      errors.name = "Name must be at least 3 characters";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!email.includes("@")) {
      errors.email = "Email must include @";
    }

    if (!confirmationEmail || email !== confirmationEmail) {
      errors.confirmationEmail = "Email doesn't match";
    }

    if (!message || message.trim().split(" ").length < 3) {
      errors.message = "Message needs more than 3 words.";
    }

    const phoneRegex = /^07\d{9}$/;
    if (!phoneRegex.test(phoneNumber)) {
      errors.phoneNumber = "Phone number must start with 07 and be 11 digits";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
    }

    const html = EmailTemplate({
      name,
      email,
      phoneNumber,
      message,
    });

    const { data, error } = await resend.emails.send({
      from: "DK Home Cleaning <andrew@duckpixel.com>",
      to: "andrew.wardjones@gmail.com",
      subject: "Message from DK Home Cleaning Site",
      html,
    });

    if (error) {
      console.error("Resend failed to send contact email", error);
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
