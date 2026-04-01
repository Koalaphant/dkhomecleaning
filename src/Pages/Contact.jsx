import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmationEmail, setConfirmationEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  function updateFormInfo(e) {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    }
    if (name === "email") {
      setEmail(value);
    }

    if (name === "confirmationEmail") {
      setConfirmationEmail(value);
    }

    if (name === "phoneNumber") {
      setPhoneNumber(value);
    }
    if (name === "message") {
      setMessage(value);
    }
  }

  function validate() {
    const errorObj = {};

    if (!name) {
      errorObj.name = "Name is required";
    } else if (name.length < 3) {
      errorObj.name = "Name must be at least 3 charachters";
    }
    if (!email) {
      errorObj.email = "Email is required";
    } else if (!email.includes("@")) {
      errorObj.email = "Email must include @";
    }
    if (!confirmationEmail || email !== confirmationEmail) {
      errorObj.confirmationEmail = "Email doesn't match";
    }

    if (!message || message.trim().split(" ").length < 3) {
      errorObj.message = "Message needs more than 3 words.";
    }

    const phoneRegex = /^07\d{9}$/;
    if (!phoneRegex.test(phoneNumber)) {
      errorObj.phoneNumber = "Phone number must start with 07 and be 11 digits";
    }

    return errorObj;
  }

  async function submitForm() {
    setErrors({});
    setSuccess(false);

    const errors = validate();

    if (Object.keys(errors).length > 0) {
      setErrors(errors);

      return;
    }

    try {
      const response = await fetch(
        "https://api-dkhomecleaning.duckpixel.com/form-submission",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            confirmationEmail,
            message,
            phoneNumber,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        console.log(data.errors);
        setErrors(data.errors || {});
        return;
      }

      setEmail("");
      setConfirmationEmail("");
      setPhoneNumber("");
      setMessage("");

      setSuccess(true);
    } catch {
      setErrors({ general: "Network error. Please try again." });
    }
  }

  return (
    <main>
      <section className="relative overflow-hidden bg-[#0f4d5a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_45%)]"></div>
        <div className="mx-4 md:mx-8">
          <div className="mx-auto max-w-4xl py-14 sm:py-16 md:py-20 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
              Get In Touch
            </p>
            <h1 className="mt-4 font-merriweather text-3xl sm:text-4xl md:text-5xl">
              We&apos;d love to hear from you
            </h1>
            <p className="mt-4 max-w-2xl font-lato text-base leading-relaxed text-white/85 sm:text-lg">
              Tell us about your home and preferred schedule, and we&apos;ll get
              back to you with a tailored quote.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-4 mt-10 md:mx-8 mb-14">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <form className="rounded-3xl border border-[#d9e4e7] bg-white p-8 shadow-[0_30px_80px_-55px_rgba(15,77,90,0.6)] md:p-10">
            <div className="grid gap-6">
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[#105361]">
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  value={name}
                  placeholder="Your name"
                  onChange={updateFormInfo}
                  className={`mt-2 w-full rounded-xl border ${
                    errors.name ? "border-red-600" : "border-[#d4e6ea]"
                  } bg-[#f7fbfc] px-4 py-3 text-sm text-[#0f4d5a] outline-none transition focus:border-[#105361]`}
                />
                {errors.name && (
                  <p className="text-red-600 mt-2">{errors.name}</p>
                )}
                {errors.warning && (
                  <p className="text-red-600 mt-2">{errors.warning}</p>
                )}
              </div>
              <div className="grid gap-6">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[#105361]">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={updateFormInfo}
                    placeholder="you@email.com"
                    className={`mt-2 w-full rounded-xl border ${
                      errors.email ? "border-red-600" : "border-[#d4e6ea]"
                    } bg-[#f7fbfc] px-4 py-3 text-sm text-[#0f4d5a] outline-none transition focus:border-[#105361]`}
                  />
                  {errors.email && (
                    <p className="text-red-600 mt-2">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[#105361]">
                    Confirm Email Address
                  </label>
                  <input
                    name="confirmationEmail"
                    type="email"
                    value={confirmationEmail}
                    onChange={updateFormInfo}
                    placeholder="Confirm your email"
                    className={`mt-2 w-full rounded-xl border ${
                      errors.confirmationEmail
                        ? "border-red-600"
                        : "border-[#d4e6ea]"
                    } bg-[#f7fbfc] px-4 py-3 text-sm text-[#0f4d5a] outline-none transition focus:border-[#105361]`}
                  />
                  {errors.confirmationEmail && (
                    <p className="text-red-600 mt-2">
                      {errors.confirmationEmail}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[#105361]">
                    Phone Number
                  </label>
                  <input
                    name="phoneNumber"
                    type="tel"
                    value={phoneNumber}
                    onChange={updateFormInfo}
                    placeholder="Your phone"
                    className={`mt-2 w-full rounded-xl border ${
                      errors.phoneNumber ? "border-red-600" : "border-[#d4e6ea]"
                    } bg-[#f7fbfc] px-4 py-3 text-sm text-[#0f4d5a] outline-none transition focus:border-[#105361]`}
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-600 mt-2">{errors.phoneNumber}</p>
                  )}
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[#105361]">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={message}
                  onChange={updateFormInfo}
                  placeholder="Tell us about your home and preferred schedule..."
                  className={`mt-2 w-full resize-none rounded-xl border ${
                    errors.message ? "border-red-600" : "border-[#d4e6ea]"
                  } bg-[#f7fbfc] px-4 py-3 text-sm text-[#0f4d5a] outline-none transition focus:border-[#105361]`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-600 mt-2">{errors.message}</p>
                )}
                {success && (
                  <p className="text-green-400">
                    Your message has been sent successfully.
                  </p>
                )}
              </div>
              <button
                onClick={submitForm}
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-[#105361] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="space-y-6 rounded-3xl border border-[#e7dfd6] bg-[#fffaf5] p-8 shadow-[0_30px_80px_-55px_rgba(15,77,90,0.6)] md:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#105361]">
                Contact Details
              </p>
              <h2 className="mt-3 font-merriweather text-2xl text-[#105361]">
                We&apos;re ready to help
              </h2>
              <p className="mt-4 font-lato text-base leading-relaxed text-slate-700">
                Reach out and we&apos;ll respond as soon as possible. We aim to
                return all enquiries within 24 hours.
              </p>
            </div>
            <div className="rounded-2xl border border-[#d4e6ea] bg-white p-4">
              <p className="text-sm font-semibold text-[#105361]">Email</p>
              <p className="mt-2 text-sm text-slate-700">
                dave@dkhomecleaning.com
              </p>
            </div>
            <div className="rounded-2xl border border-[#d4e6ea] bg-white p-4">
              <p className="text-sm font-semibold text-[#105361]">Phone</p>
              <p className="mt-2 text-sm text-slate-700">07852973257</p>
            </div>
            <div className="rounded-2xl border border-[#d4e6ea] bg-white p-4">
              <p className="text-sm font-semibold text-[#105361]">Location</p>
              <p className="mt-2 text-sm text-slate-700">Warrington</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#d4e6ea] bg-white">
              <div className="px-4 pt-4">
                <p className="text-sm font-semibold text-[#105361]">
                  Service Area Map
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  Covering Warrington and surrounding areas.
                </p>
              </div>
              <div className="mt-4 aspect-[4/3] w-full">
                <iframe
                  title="Map of Warrington"
                  src="https://www.google.com/maps?q=Warrington%2C%20UK&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
