// src/components/sections/JoinForm.jsx
import React, { useState } from "react";
import Container from "../ui/Container";
import Card from "../ui/Card";
import { Button } from "../ui/Button";

function Input({ placeholder, type = "text", name, required = false }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className="w-full px-5 py-3 rounded-full bg-white/10 text-white placeholder-white/60
                 ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-[var(--gi-teal-500)]"
    />
  );
}

function Textarea({ placeholder, rows = 6, name, required = false }) {
  return (
    <textarea
      rows={rows}
      name={name}
      placeholder={placeholder}
      required={required}
      className="w-full px-5 py-3 rounded-3xl bg-white/10 text-white placeholder-white/60
                 ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-[var(--gi-teal-500)] resize-y"
    />
  );
}

export default function JoinForm() {
  const [status, setStatus] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "10431258-a795-4466-b052-d26137dadcfe"); // Replace with your real Web3Forms key

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="join" className="py-16 sm:py-24">
      <Container className="max-w-4xl">
        <div className="rounded-[28px] p-[2px] bg-gradient-to-b from-[var(--gi-teal-300)] to-[var(--gi-teal-700)] shadow-card">
          <Card className="rounded-[26px] bg-black/35 px-6 sm:px-10 py-10 sm:py-12">
            <div className="text-center space-y-1">
              <h3 className="text-2xl sm:text-3xl font-extrabold">JOIN GetInfo.ae</h3>
              <div className="text-white/80">Let’s Quickstart Your GetInfo Experience</div>
            </div>

            <form onSubmit={onSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
              <Input name="firstName" placeholder="First Name" required />
              <Input name="lastName" placeholder="Last Name" required />
              <Input name="email" type="email" placeholder="Email" required />
              <Input name="phone" placeholder="Phone Number" />
              <div className="md:col-span-2">
                <Input name="subject" placeholder="Subject" />
              </div>
              <div className="md:col-span-2">
                <Textarea name="message" placeholder="Tell Us Something..." required />
              </div>

              <div className="md:col-span-2 flex justify-center pt-2">
                <Button size="lg" className="w-full md:w-auto gi-btn shine">
                  {status === "sending" ? "Sending..." : "SEND EMAIL"}
                </Button>
              </div>

              {/* ✅ Enhanced Feedback Messages */}
              {status === "success" && (
                <div className="text-center mt-6 animate-fadeIn">
                  <p className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/10 text-green-300 border border-green-400/30 backdrop-blur-sm">
                    <span className="text-xl">✅</span>
                    <span>Your message has been sent successfully! The GetInfo team will reach out soon.</span>
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="text-center mt-6 animate-fadeIn">
                  <p className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-500/10 text-red-300 border border-red-400/30 backdrop-blur-sm">
                    <span className="text-xl">⚠️</span>
                    <span>Oops! Something went wrong. Please try again later.</span>
                  </p>
                </div>
              )}
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
}

// ✨ Optional fade-in animation (add in your global CSS or Tailwind config)
