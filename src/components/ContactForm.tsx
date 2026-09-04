"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const text = encodeURIComponent(
      `Hi Skillora! I would like to get in touch.\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || "-"}\nMessage: ${data.message}`
    );
    window.open(`${site.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
    form.reset();
    setMessage("");
    setStatus("WhatsApp is opening with your message.");
  }

  return (
    <section id="contact" className="w-full py-6 lg:py-12 px-4 bg-muted scroll-mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4">Contact Us</h3>
          <p className="text-muted-foreground max-w-md">
            Have questions about our courses? Call us on {site.phone} or send a message. We typically respond within 2 hours.
          </p>
        </div>
        <form onSubmit={onSubmit} className="bg-background rounded-2xl shadow-sm p-4 sm:p-6 md:p-8 flex flex-col gap-4 min-w-0">
          <h3 className="text-2xl font-bold text-foreground mb-1">Get in Touch</h3>
          <p className="text-sm text-muted-foreground mb-2">You can reach us anytime</p>
          <input className="field" name="name" placeholder="Name" required />
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input className="field pl-9" type="email" name="email" placeholder="Your email" required />
          </div>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input className="field pl-9" type="tel" name="phone" placeholder="Phone number" required />
          </div>
          <div>
            <textarea
              className="field min-h-[80px] h-auto py-2 resize-none"
              name="message"
              rows={5}
              maxLength={120}
              placeholder="How can we help?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <div className="flex justify-end">
              <span className="text-xs text-muted-foreground">{message.length}/120</span>
            </div>
          </div>
          <button className="btn-primary h-11 px-8 font-semibold w-full">Send on WhatsApp</button>
          {status && <p className="text-sm text-center">{status}</p>}
          <p className="text-xs text-muted-foreground text-center mb-0">
            By contacting us, you agree to our{" "}
            <Link href="/terms" className="font-medium text-primary">Terms of service</Link> and{" "}
            <Link href="/privacy-policy" className="font-medium text-primary">Privacy Policy</Link>
          </p>
        </form>
      </div>
    </section>
  );
}
