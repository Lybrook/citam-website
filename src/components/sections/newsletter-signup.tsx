"use client"

import { useState, useCallback } from "react"
import { Button } from "../ui/button"

import { Input } from "../ui/input"
import { Check, AlertCircle } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const validateEmail = useCallback((email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
  }, [])

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      // Add API call to subscribe to newsletter
      // For demonstration purposes, a timeout is used
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsLoading(false)
      setIsSubmitted(true)
      setEmail("")
    } catch {
      setIsLoading(false)
      setError("Failed to subscribe. Please try again.")
    } finally {
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }
  }, [email, validateEmail])

  return (
    <section className="bg-primary/10 py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Connected</h2>
          <p className="text-lg mb-8">
            Subscribe to our newsletter to receive updates on sermons, events, and church news.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <div className="relative w-full">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-invalid={error ? "true" : "false"}
                aria-describedby={error ? "email-error" : undefined}
                disabled={isLoading || isSubmitted}
                className="flex-grow"
              />
              {error && (
                <p id="email-error" className="text-red-500 text-sm mt-2 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" /> {error}
                </p>
              )}
            </div>
            <Button 
              type="submit" 
              aria-disabled={isLoading || isSubmitted}
              className="whitespace-nowrap"
            >
              {isLoading ? "Subscribing..." : isSubmitted ? (
                <span className="flex items-center">
                  <Check className="w-4 h-4 mr-2" />
                  Subscribed!
                </span>
              ) : "Subscribe"}
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
