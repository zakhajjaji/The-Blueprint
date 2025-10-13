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

    <Card id="contact" className="mx-auto shadow-lg backdrop-blur-md bg-white/80 border border-[rgba(var(--accent-violet),0.25)]">
  <CardHeader>
    <CardTitle className="text-xl text-center text-primary mt-5 mb-5">Let’s Build Something Intelligent</CardTitle>
    <CardDescription className="text-lg text-center">Open to collaborations, product work, and advisory. Drop a message 👇</CardDescription>
  </CardHeader>
  <CardContent>
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
     <div className="flex justify-center pt-4">
    <Button type="submit" className="relative overflow-hidden">
      <span className="relative z-10">Send Message</span>
      <span className="absolute inset-0 opacity-0 hover:opacity-100 transition" style={{ background: "linear-gradient(90deg, rgba(var(--accent-violet),0.15), rgba(var(--highlight-lilac),0.3))" }} />
    </Button>
    </div>
      </form>
    </Form>
</CardContent> 
</Card>
  );
};

export default Contact;
