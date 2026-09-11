"use client";

import { useState } from "react";
import { AlertCircle, Check } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const response = await fetch("/api/newsletter", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Subscription failed.");
      setStatus("success");
      setEmail("");
    } catch (submissionError) {
      setStatus("error");
      setError(submissionError instanceof Error ? submissionError.message : "Subscription failed.");
    }
  }

  return (
    <section className="bg-primary/10 py-16" aria-labelledby="newsletter-title">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="newsletter-title" className="mb-4 text-3xl font-bold md:text-4xl">Stay Connected</h2>
          <p className="mb-8 text-lg text-muted-foreground">Receive occasional updates about sermons, events, and church news.</p>
          <form onSubmit={handleSubmit} className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row">
            <Input type="email" placeholder="Your email address" value={email} onChange={(event) => setEmail(event.target.value)} required disabled={status === "loading" || status === "success"} aria-invalid={status === "error"} aria-describedby={status === "error" ? "newsletter-error" : "newsletter-status"} className="flex-grow" />
            <Button type="submit" disabled={status === "loading" || status === "success"} className="whitespace-nowrap">
              {status === "loading" ? "Subscribing…" : status === "success" ? <span className="flex items-center"><Check className="mr-2 h-4 w-4" />Subscribed</span> : "Subscribe"}
            </Button>
          </form>
          {status === "error" && <p id="newsletter-error" role="alert" className="mt-3 flex items-center justify-center text-sm text-destructive"><AlertCircle className="mr-1 h-4 w-4" />{error}</p>}
          {status === "success" && <p id="newsletter-status" role="status" className="mt-3 text-sm text-muted-foreground">Thank you. We have recorded your interest.</p>}
          <p className="mt-4 text-sm text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  );
}
