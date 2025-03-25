"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { BsTwitterX } from "react-icons/bs";

type ContactFormData = {
  fullname: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    const loadingToast = toast.loading("Sending your message...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to send message."
      );
    } finally {
      toast.dismiss(loadingToast);
    }
  };

  const onError = () => {
    if (errors.fullname) {
      toast.error(errors.fullname.message);
      return;
    }
    if (errors.email) {
      toast.error(errors.email.message);
      return;
    }
    if (errors.message) {
      toast.error(errors.message.message);
      return;
    }
  };

  return (
    <div id="contact" className="text-white py-6 px-4 sm:px-6 lg:px-8 mt-10 ">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-200 mb-8 relative before:absolute before:w-16 before:h-[2px] before:bg-gray-500 before:left-1/2 before:-translate-x-1/2 before:-bottom-2">
          Get in Touch
        </h1>

        <div className="bg-black text-white text-xl font-sans text-center">
          <div className="flex items-center gap-3 justify-center">
            Wanna connect with me? Drop me a message on
            <Link
              href="https://x.com/alkama_07"
              target="_blank"
              rel="noopener noreferrer"
              className="pb-1 border-b-2 border-transparent hover:border-blue-400 transition-all"
            >
              <BsTwitterX size={32} className="hover:underline" />
            </Link>
          </div>
          <p>See you there ✨</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="mt-10 max-w-lg mx-auto"
        >
          <div className="mb-3 flex flex-col">
            <Label htmlFor="fullname" className="text-base text-gray-200 mb-2">
              Full Name
            </Label>
            <Input
              type="text"
              id="fullname"
              {...register("fullname", { required: "Full Name is required" })}
              className="w-full px-4 py-3 bg-transparent text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your full name"
              disabled={isSubmitting}
            />
          </div>

          <div className="mb-3 flex flex-col">
            <Label htmlFor="email" className="text-base text-gray-200 mb-2">
              Email Address
            </Label>
            <Input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-3 bg-transparent text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your email"
              disabled={isSubmitting}
            />
          </div>

          <div className="mb-3 flex flex-col">
            <Label htmlFor="message" className="text-base text-gray-200 mb-2">
              Your Message
            </Label>
            <Textarea
              id="message"
              {...register("message", { required: "Message is required" })}
              className="w-full h-36 px-4 py-3 bg-transparent text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Your message here..."
              disabled={isSubmitting}
            />
          </div>

          <Button
            variant="outline"
            className="text-black w-full bg-gray-300 cursor-pointer"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
