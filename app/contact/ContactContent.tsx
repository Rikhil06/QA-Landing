"use client";

import { useState } from "react";
import PageLayout from "@/components/PageLayout";

export default function ContactContent() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setStatus(res.ok ? "success" : "error");
  }

  return (
    <PageLayout>
      <div className="pt-28 pb-24 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-5">
              Get in{" "}
              <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                touch
              </span>
            </h1>
            <p className="text-lg text-white/45 max-w-md mx-auto">
              Questions, feedback, partnership enquiries — we&apos;re happy to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-10">

            {/* Contact details sidebar */}
            <div className="md:col-span-2 space-y-6">

              <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 space-y-5">
                <h2 className="text-sm font-semibold text-white/60 uppercase tracking-widest">Contact details</h2>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-white/35 mb-0.5">Email</div>
                    <a href="mailto:hello@annoture.com" className="text-sm text-white/80 hover:text-white transition-colors">
                      hello@annoture.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-white/35 mb-0.5">Response time</div>
                    <span className="text-sm text-white/80">Within 1–2 business days</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-white/35 mb-0.5">LinkedIn</div>
                    <a
                      href="https://www.linkedin.com/company/annoture/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      linkedin.com/company/annoture
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 space-y-3">
                <h2 className="text-sm font-semibold text-white/60 uppercase tracking-widest">Looking for something else?</h2>
                <div className="space-y-2.5 text-sm">
                  <p className="text-white/40">
                    For data or privacy requests, email{" "}
                    <a href="mailto:privacy@annoture.com" className="text-white/70 hover:text-white transition-colors underline underline-offset-2">
                      privacy@annoture.com
                    </a>
                    .
                  </p>
                  <p className="text-white/40">
                    For billing issues, visit your{" "}
                    <a href="https://app.annoture.com/usage-billing" className="text-white/70 hover:text-white transition-colors underline underline-offset-2">
                      billing settings
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-8">
                {status === "success" ? (
                  <div className="text-center py-14">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center mx-auto mb-5">
                      <svg className="w-7 h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Message sent</h3>
                    <p className="text-white/45 text-sm">Thanks for reaching out — we&apos;ll get back to you within 1–2 business days.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-medium text-white/50 mb-1.5">
                          Name <span className="text-violet-400">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-violet-500/50 focus:bg-white/7 transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-medium text-white/50 mb-1.5">
                          Email <span className="text-violet-400">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-violet-500/50 focus:bg-white/7 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs font-medium text-white/50 mb-1.5">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Company or team name"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-violet-500/50 focus:bg-white/7 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-medium text-white/50 mb-1.5">
                        Message <span className="text-violet-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={form.message}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-violet-500/50 focus:bg-white/7 transition-all resize-none"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-sm text-red-400">Something went wrong — please try again or email us directly.</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full py-3 rounded-xl bg-white text-[#0F0F0F] font-semibold text-sm hover:bg-white/90 transition-all duration-200 hover:shadow-xl hover:shadow-white/15 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? "Sending…" : "Send message →"}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </PageLayout>
  );
}
