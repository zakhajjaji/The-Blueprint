"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useForm({
    defaultValues: {
    name: "",
    email: "",
    message: ""
    }
  });
  const onSubmit = async (data: any) => {

  try {
    const res = await fetch (`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(data),
    })
  const result = await res.json(); 

  if (res.ok) { 
    toast.success(result.message); // from backend controller 
  } else {
    toast.error(result.message || "Something went wrong!");
  } 
} catch (error) {
  toast.error("Server error"); 
}
  };

  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 text-center mb-8">
      <h2 className="mt-2 mb-6 text-3xl md:text-4xl font-semibold tracking-tight">Contact Me</h2>
        <p className="mt-2 text-sm md:text-base text-foreground/70">Open to collaborations, product work, and advisory. Drop a message.</p>
      </div>

      <Card className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border/70 bg-background/60 backdrop-blur relative">        <CardContent>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
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
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
      control={form.control}
      name="message"
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
          <div className="flex justify-center pt-2 pb-6">
            <Button type="submit" variant="default" className="hover:bg-primary/90">
              Send Message
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
