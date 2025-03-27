"use client"

import React from 'react';
import Head from 'next/head';
import { z } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "../../components/ui/form"; // Update the path to the correct location of the 'form' module
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import Header from '../../components/navigation/header';
import { Toast, ToastProvider, ToastTitle, ToastDescription } from "../../components/ui/use-toast"; // Ensure the correct path to the use-toast module


// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type ContactFormInputs = z.infer<typeof contactSchema>;

const ContactPage: React.FC = () => {
const toast = ({ title, description }: { title: string; description: string }) => {


    return (
        <Toast>
          <ToastTitle>{title}</ToastTitle>
          <ToastDescription>{description}</ToastDescription>

      </Toast>
    );
  };

  const form = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    try {
      // Implement actual form submission logic
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Your message has been successfully submitted."

        });
        form.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch {

      toast({
          title: "Error",
          description: "Could not send message. Please try again."

      });
    }
  };

  return (
    <>
      <Head>
        <title>Contact CITAM Kitale - Reach Out to Us</title>
        <meta 
          name="description" 
          content="Contact CITAM Kitale Church. Get in touch with us for inquiries, prayer requests, or community support." 
        />
        <meta 
          name="keywords" 
          content="CITAM Kitale, church contact, Christian community, Kenya church" 
        />
        <link 
          rel="canonical" 
          href="https://www.citamkitale.org/contact" 
        />
        <meta property="og:title" content="Contact CITAM Kitale" />
        <meta 
          property="og:description" 
          content="Connect with CITAM Kitale Church. We're here to listen and support you." 
        />
        <meta property="og:type" content="website" />
      </Head>

      <Header />
      
      <ToastProvider>
        <main className="pt-16 min-h-screen bg-white text-black">

        <section className="container mx-auto px-4 py-12 max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-red-800 mb-4">Contact Us</h1>
            <p className="text-gray-700 max-w-xl mx-auto">
              We would love to hear from you! Please fill out the form below or reach us through our contact information.
            </p>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold text-red-900 mb-4">Contact Information</h2>
            <div className="space-y-2 text-gray-800">
              <p>
                <strong>Address:</strong> Kitale Town, Trans Nzoia County, Kenya
              </p>
              <p>
                <strong>Phone:</strong> +254 712 345 678
              </p>
              <p>
                <strong>Email:</strong> info@citamkitale.org
              </p>
            </div>
          </div>
          
          <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onSubmit)} 
              className="space-y-6 bg-white p-8 rounded-xl border border-red-100"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-red-900">Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your Name" 
                        {...field}
                        className="border-red-300 focus:border-red-500 focus:ring-red-500"
                      />
                    </FormControl>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-red-900">Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="your.email@example.com" 
                        {...field}
                        className="border-red-300 focus:border-red-500 focus:ring-red-500"
                      />
                    </FormControl>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-red-900">Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Write your message here..." 
                        {...field}
                        className="border-red-300 focus:border-red-500 focus:ring-red-500"
                        rows={4}
                      />
                    </FormControl>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full bg-red-800 hover:bg-red-900 text-white transition-colors"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Form>
        </section>
        </main>
      </ToastProvider>

    </>
  );
};

export default ContactPage;
