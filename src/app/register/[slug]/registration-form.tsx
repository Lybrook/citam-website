"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";

export default function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="mt-10 space-y-5 rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
      <label className="block text-sm font-medium">Full name<Input className="mt-2" required minLength={2} name="name" /></label>
      <label className="block text-sm font-medium">Email address<Input className="mt-2" required type="email" name="email" /></label>
      <label className="block text-sm font-medium">Phone number<Input className="mt-2" required name="phone" pattern="(?:07|01)\\d{8}" placeholder="07XXXXXXXX" /></label>
      {submitted && <p role="status" className="rounded-xl bg-primary/10 p-4 text-sm text-foreground">Your interest has been recorded locally. The church team will confirm your place.</p>}
      <Button type="submit" className="w-full">{submitted ? "Registration received" : "Register interest"}</Button>
    </form>
  );
}
