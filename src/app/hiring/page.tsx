"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

function Hiring() {
  const router = useRouter();

  const handleApplyClick = () => {
    router.push("/apply");
  };

  return (
    <div className="p-10 bg-black text-gray-100 min-h-screen flex flex-col justify-center items-center space-y-8">
      <Link href={"/"} className=" absolute top-3 left-4 text-white text-3xl">
        <IoIosArrowBack />
      </Link>
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-3xl">
        <h1 className="text-4xl font-extrabold mb-4 text-center">
          Become a Key Player — Join Us as a Lead Generator!
        </h1>

        <h2 className="text-2xl font-semibold mb-2 text-red-500 text-center">
          Urgent Hiring{" "}
        </h2>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-center">
          About Us
        </h2>
        <p className="mb-4 leading-relaxed text-center">
          We are a web development agency specializing in cutting-edge
          technologies like Next.js, React, and backend development. Our mission
          is to deliver high-quality web solutions for clients across
          industries. We are passionate about building modern full-stack and
          real-time applications using WebSocket.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-center">
          Role Overview
        </h2>
        <p className="mb-4 leading-relaxed text-center">
          As a Lead Generator, your primary role is to identify and connect with
          potential clients who need web development services. Your work is
          crucial in helping our agency grow and reach new opportunities.
        </p>

        <h3 className="text-xl font-semibold mt-6">Responsibilities:</h3>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            Identify and approach potential clients through various channels.
          </li>
          <li>Maintain and manage an organized database of leads.</li>
          <li>Collaborate with the team to ensure lead quality.</li>
          <li>Provide regular updates on lead generation efforts.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">Payment Model:</h3>
        <p className="mb-4 leading-relaxed text-center">
          We operate on a commission-based model. After we receive full payment
          from the client, you will receive 20% of the project&apos;s total revenue.
          This ensures transparency and fairness. No financial investment is
          required from your side — your role is to bring in leads through your
          own resources or network.
        </p>

        <h3 className="text-xl font-semibold mt-6">Requirements:</h3>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Strong communication and networking skills.</li>
          <li>Basic knowledge of lead generation strategies.</li>
          <li>Self-driven and motivated to achieve targets.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">What We Offer:</h3>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            Hands-on experience working with modern technologies (MERN, Next.js,
            WebSocket).
          </li>
          <li>Collaborative team environment with growth opportunities.</li>
          <li>Flexible working hours.</li>
          <li>
            Location Preference: Jaipur preferred, but remote opportunities
            within India are welcome.
          </li>
        </ul>

        <div className="flex justify-center mt-6">
          <button
            onClick={handleApplyClick}
            className="bg-blue-500 cursor-pointer text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-400"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hiring
