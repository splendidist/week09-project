"use client";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export const metadata = {
  title: "Make The Friends |Error",
  description: "An error occurred, return home or sign in",
};

export default function Error({ error }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <SignedIn>
        <h4 className="p-3 text-white text-xl text-center">
          Oh no! That user doesn&apos;t exist!
        </h4>
        <h3 className="p-3 text-white text-xl text-center">
          Error: {error.message}
        </h3>
        {/* Links to 'home page' aka all posts */}
        <Link
          className="uppercase px-3 py-1 mb-3 rounded-full bg-red-100 cursor-pointer hover:bg-rose-200 hover:scale-110 active:scale-100"
          href="/posts"
        >
          Return Home
        </Link>
      </SignedIn>
      <SignedOut>
        <h4 className="p-3 text-white text-xl text-center">
          You need to sign in to see a user&apos;s profile!
        </h4>
        <h3 className="p-3 text-white text-xl text-center">
          Error: {error.message}
        </h3>
        <Link
          className="uppercase px-3 py-1 mb-3 rounded-full bg-red-100 cursor-pointer hover:bg-rose-200 hover:scale-110 active:scale-100"
          href="/sign-in"
        >
          Sign In
        </Link>
      </SignedOut>
    </div>
  );
}
