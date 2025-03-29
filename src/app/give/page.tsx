"use client";

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
  FormMessage,
} from '../../components/ui/form';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { Toast } from '../../components/ui/use-toast';
import { Heart } from 'lucide-react';
import Header from '../../components/navigation/header';

// Donation Form Validation Schema
const donationSchema = z.object({
  amount: z.number().min(10, { message: 'Donation amount must be at least KES 10' }),
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().regex(/^07\d{8}$/, {
    message: 'Please enter a valid Kenyan phone number starting with 07',
  }),
  donationType: z.enum(['general', 'missions', 'building-fund', 'youth-ministry'], {
    required_error: 'Please select a donation type',
  }),
});

type DonationFormInputs = z.infer<typeof donationSchema>;

const GivePage: React.FC = () => {
  const form = useForm<DonationFormInputs>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      amount: undefined,
      name: '',
      email: '',
      phone: '',
      donationType: 'general',
    },
  });

  const onSubmit: SubmitHandler<DonationFormInputs> = async (data) => {
    try {
      const response = await fetch('/api/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        Toast({
          title: 'Payment Initiated',
          content: result.message || 'Payment request sent to your phone. Please complete the payment.',
          variant: 'default',
        });
        form.reset();
      } else {
        throw new Error(result.error || 'Donation submission failed');
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Could not process donation. Please try again.';
      Toast({
        title: 'Error',
        content: errorMessage,
        variant: 'destructive',
      });
    }
  };

  return (
    <>
      <Head>
        <title>Give to CITAM Kitale - Support Our Mission</title>
        <meta
          name="description"
          content="Support CITAM Kitale's mission through your generous donations via M-Pesa. Contribute to our community outreach, missions, and ministry programs."
        />
        <meta
          name="keywords"
          content="CITAM Kitale, church donation, give, support ministry, Christian giving, M-Pesa donation"
        />
        <link rel="canonical" href="https://www.citamkitale.org/give" />
        <meta property="og:title" content="Support CITAM Kitale" />
        <meta
          property="og:description"
          content="Your generosity helps us spread hope and love in our community."
        />
        <meta property="og:type" content="website" />
      </Head>

      <Header />

      <main className="pt-16 min-h-screen bg-white text-black">
        <section className="container mx-auto px-4 py-12 max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-red-800 mb-4">Give</h1>
            <p className="text-gray-700 max-w-xl mx-auto">
              Your generosity enables us to continue our mission of spreading the gospel and serving our community.
            </p>
          </div>

          <Card className="border-red-100 shadow-md">
            <CardHeader cardTitle={undefined} description={undefined}>
              <CardTitle className="text-red-900 flex items-center">
                <Heart className="mr-2 text-red-700" />
                Online Donation
              </CardTitle>
              <CardDescription>
                Securely support our ministry through M-Pesa.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-red-900">Donation Amount (KES)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter amount"
                            {...field}
                            onChange={(e) => field.onChange(Number(e.target.value))}
                            className="border-red-300 focus:border-red-500 focus:ring-red-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="donationType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-red-900">Donation Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-red-300 focus:border-red-500">
                              <SelectValue placeholder="Select donation type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="general">
                              <div className="flex items-center">
                                <Heart className="mr-2 w-4 h-4 text-red-700" />
                                General Giving
                              </div>
                            </SelectItem>
                            <SelectItem value="missions">
                              <div className="flex items-center">
                                <Heart className="mr-2 w-4 h-4 text-red-700" />
                                Missions
                              </div>
                            </SelectItem>
                            <SelectItem value="building-fund">
                              <div className="flex items-center">
                                <Heart className="mr-2 w-4 h-4 text-red-700" />
                                Building Fund
                              </div>
                            </SelectItem>
                            <SelectItem value="youth-ministry">
                              <div className="flex items-center">
                                <Heart className="mr-2 w-4 h-4 text-red-700" />
                                Youth Ministry
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-red-900">Your Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your name"
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
                        <FormLabel className="text-red-900">Your Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your email"
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
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-red-900">Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="07XXXXXXXX"
                            {...field}
                            className="border-red-300 focus:border-red-500 focus:ring-red-500"
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
                    {form.formState.isSubmitting ? 'Processing...' : 'Donate via M-Pesa'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="mt-8 bg-red-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-red-900 mb-4">Other Ways to Give</h2>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>In-person:</strong> During our Sunday services
              </li>
              <li>
                <strong>Bank Transfer:</strong> Account Name: CITAM Kitale, Bank: XYZ, Account Number: 123456789
              </li>
              <li>
                <strong>M-Pesa Paybill:</strong> Paybill Number: 123456, Account: Your Name
              </li>
              <li>
                <strong>Cheques:</strong> Payable to CITAM Kitale
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default GivePage;