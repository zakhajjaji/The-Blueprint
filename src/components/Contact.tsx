"use client";
import React from "react";
import { useForm } from "react-hook-form";

import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const form = useForm({
    defaultValues: {
    name: "",
    email: "",
    message: ""
    }
  });
  const onSubmit = async (data: { name: string; email: string; message: string }) => {

  try {
    setIsSubmitting(true);
    const res = await fetch (`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(data),
    })
  const result = await res.json(); 

  if (res.ok) { 
    toast.success(result.message); // from backend controller 
    form.reset();
  } else {
    toast.error(result.message || "Something went wrong!");
  } 
} catch (error: unknown) {
  if (error instanceof Error) {
    toast.error(error.message);
  } else {
    toast.error("Server error");
  }
} finally {
  setIsSubmitting(false);
}
  };

  return (
    <section id="contact" className="py-12 md:py-6 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 text-center mb-8">
      <h2 className="mt-2 mb-2 text-3xl md:text-4xl font-semibold tracking-tight">Contact Me</h2>
        <p className="mt-2 text-sm md:text-base text-foreground/70">Open to collaborations, product work, and advisory. Drop a message.</p>
      </div>

      <Card className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 overflow-hidden rounded-2xl bg-background/60 backdrop-blur shadow-sm bg-gradient-to-b from-primary/5 to-transparent relative">        <CardContent>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          rules={{ required: "Please enter your name" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name"{...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          rules={{
            required: "Please enter your email",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
      control={form.control}
      name="message"
      rules={{ required: "Please write a short message" }}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Message</FormLabel>
          <FormControl>
            <Textarea placeholder="Write your message here..." className="min-h-[120px]" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
          <div className="flex justify-center pt-2 pb-4">
            <Button type="submit" variant="default" className="hover:bg-primary/90" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </Form>
        </CardContent>
      </Card>
    </section>
  );
};

export default Contact;
