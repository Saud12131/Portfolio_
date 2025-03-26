"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { IoIosArrowBack } from "react-icons/io";
import { toast } from "sonner";

type ContactFormData = {
  name: string;
  email: string;
  mobile: string;
  portfolio?: string;
  resume: any;
  reason: string;
};

const Apply = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    const loadingToast = toast.loading("Submitting your application...");

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }
      toast.success("Application submit successfully!");
      reset();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to sumbit application"
      );
    } finally {
      toast.dismiss(loadingToast);
    }
  };

  const onError = () => {
    if (errors.name) {
      toast.error(errors.name.message);
      return;
    }
    if (errors.email) {
      toast.error(errors.email.message);
      return;
    }

    if (errors.mobile) {
      toast.error(errors.mobile.message);
      return;
    }
    if (errors.reason) {
      toast.error(errors.reason.message);
      return;
    }
  };

  return (
    <div className="bg-black flex items-center justify-center">
      <Link
        href={"/hiring"}
        className=" absolute top-3 left-4 text-white text-3xl"
      >
        <IoIosArrowBack />
      </Link>
      <div className="text-white py-6 px-4 sm:px-6 lg:px-8 pt-10 ">
        <div className="max-w-3xl mx-auto text-center ">
          <h1 className="text-3xl font-bold text-gray-200 mb-8 relative before:absolute before:w-16 before:h-[2px] before:bg-gray-500 before:left-1/2 before:-translate-x-1/2 before:-bottom-2">
            Join Our Team — Apply Now
          </h1>

          <div className="bg-black text-white text-xl font-sans text-center">
            <p>
              Showcase your skills and let us know why you&apos;re the right
              fit.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="mt-10 max-w-lg mx-auto"
          >
            <div className="mb-3 flex flex-col items-start">
              <Label
                htmlFor="fullname"
                className="text-base text-gray-200 mb-2"
              >
                Full Name
              </Label>
              <Input
                type="text"
                id="name"
                {...register("name", { required: "Full Name is required" })}
                className="w-full px-4 py-3 bg-transparent text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter your full name"
                disabled={isSubmitting}
              />
            </div>

            <div className="mb-3 flex flex-col items-start">
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

            <div className="mb-3 flex flex-col items-start">
              <Label htmlFor="mobile" className="text-base text-gray-200 mb-2">
                Mobile Number
              </Label>
              <Input
                type="tel"
                id="mobile"
                {...register("mobile", {
                  required: "Mobile number is required",
                })}
                className="w-full px-4 py-3 bg-transparent text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter your email"
                disabled={isSubmitting}
              />
            </div>
            <div className="mb-3 flex flex-col items-start">
              <Label
                htmlFor="portfolio"
                className="text-base text-gray-200 mb-2"
              >
                Portfolio (Optional)
              </Label>
              <Input
                type="url"
                id="portfolio"
                {...register("portfolio")}
                className="w-full px-4 py-3 bg-transparent text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Link to your portfolio (if any)"
                disabled={isSubmitting}
              />
            </div>

            <div className="mb-3 flex flex-col items-start">
              <Label htmlFor="resume" className="text-base text-gray-200 mb-2">
                Resume(Link)
              </Label>
              <Input
                type="url"
                id="resume"
                {...register("resume", { required: "Resume is required!" })}
                className="w-full px-4 py-3 bg-transparent text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Link to your resume"
                disabled={isSubmitting}
              />
            </div>

            <div className="mb-3 flex flex-col items-start">
              <Label htmlFor="reason" className="text-base text-gray-200 mb-2">
                Why Should We Choose You?
              </Label>
              <Textarea
                id="reason"
                {...register("reason", { required: "Reason is required" })}
                className="w-full h-36 px-4 py-3 bg-transparent text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Tell us why you are a good fit..."
                disabled={isSubmitting}
              />
            </div>
            <Button
              variant="outline"
              className="text-black w-full bg-gray-300 cursor-pointer"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submit..." : "Submit"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Apply;
