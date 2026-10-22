"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Icons } from "@/components/common/icons";
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
import { Textarea } from "@/components/ui/textarea";
import { useModalStore } from "@/hooks/use-modal-store";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must contain at least 3 characters.",
  }),
  email: z.string().email("Please enter a valid email."),
  countryCode: z.string().min(1, "Please select a country code."),
  contactNumber: z.string().min(7, "Please enter a valid contact number."),
  purpose: z.string().min(1, "Please select a purpose for your contact."),
  message: z.string().min(10, {
    message: "Please write something more descriptive.",
  }),
  termsAccepted: z.boolean().refine((accepted) => accepted, {
    message: "Please accept the terms and conditions to continue.",
  }),
});

export function ContactForm() {
  const storeModal = useModalStore();

  // const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      countryCode: "+1",
      contactNumber: "",
      purpose: "",
      message: "",
      termsAccepted: false,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.status === 200) {
        form.reset();
        storeModal.onOpen({
          title: "Thankyou!",
          description:
            "Your message has been received! I appreciate your contact and will get back to you shortly.",
          icon: Icons.successAnimated,
        });
      } else {
        const result = await response.json().catch(() => null);
        storeModal.onOpen({
          title: "Message not sent",
          description: result?.error || "Please try again in a moment.",
        });
      }
    } catch (err) {
      console.error("Contact form error:", err);
      storeModal.onOpen({
        title: "Message not sent",
        description: "Please check your connection and try again.",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-5"
      >
        <FormField
          control={form.control}
          name="countryCode"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Contact number</FormLabel>
              <div className="flex gap-2">
                <FormControl>
                  <select
                    aria-label="Country calling code"
                    className="h-10 w-[42%] rounded-md border border-input bg-background px-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-[46%]"
                    {...field}
                  >
                    <option value="+1">US/CA (+1)</option>
                    <option value="+44">UK (+44)</option>
                    <option value="+61">Australia (+61)</option>
                    <option value="+64">New Zealand (+64)</option>
                    <option value="+91">India (+91)</option>
                    <option value="+92">Pakistan (+92)</option>
                    <option value="+971">UAE (+971)</option>
                    <option value="+966">Saudi Arabia (+966)</option>
                    <option value="+49">Germany (+49)</option>
                    <option value="+33">France (+33)</option>
                    <option value="+81">Japan (+81)</option>
                    <option value="+86">China (+86)</option>
                    <option value="+880">Bangladesh (+880)</option>
                    <option value="+94">Sri Lanka (+94)</option>
                  </select>
                </FormControl>
                <Input type="tel" inputMode="tel" placeholder="Phone number" className="min-w-0 flex-1" {...form.register("contactNumber")} />
              </div>
              <FormMessage>{form.formState.errors.countryCode?.message || form.formState.errors.contactNumber?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="purpose"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Purpose of contact</FormLabel>
              <FormControl>
                <select
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  {...field}
                >
                  <option value="">Select a purpose</option>
                  <option value="Project inquiry">Project inquiry</option>
                  <option value="WordPress development">WordPress development</option>
                  <option value="WooCommerce development">WooCommerce development</option>
                  <option value="Consultation">Consultation</option>
                  <option value="Other">Other</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="termsAccepted"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <div className="flex items-start gap-3">
                <FormControl>
                  <input
                    type="checkbox"
                    checked={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    name={field.name}
                    ref={field.ref}
                    className="mt-1 h-4 w-4 shrink-0 accent-primary"
                  />
                </FormControl>
                <FormLabel className="cursor-pointer font-normal leading-6">
                  I accept the terms and conditions.
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="pt-1">
          <Button type="submit" className="w-full sm:w-auto sm:min-w-40">Send message</Button>
        </div>
      </form>
    </Form>
  );
}
