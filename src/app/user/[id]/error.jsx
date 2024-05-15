"use client";
import Link from "next/link";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Oh no! That user doesn&apos;t exist!</h2>
        <p>Error: {error.message}</p>
        {/* Links to 'home page' aka all posts */}
        <Link href="/posts">Return Home</Link>
      </body>
    </html>
  );
}
