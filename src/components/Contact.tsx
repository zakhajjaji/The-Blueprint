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

const Contact = () => {
  const form = useForm();
  const onSubmit = (data: any) => {
    console.log("Thank you for getting in touch!", data);
  };
  return (

    <Card id="contact" className="max-w-5xl mx-auto shadow-lg">
  <CardHeader>
    <CardTitle>Contact Me</CardTitle>
    <CardDescription>Got a question or opportunity? Drop me a message 👇</CardDescription>
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
      </form>
    </Form>
</CardContent>
  <CardFooter className="justify-center">
    <Button type="submit">Send Message</Button>
  </CardFooter>
</Card>
  );
};

export default Contact;
