import Link from "next/link";

export default function NotFound() {
  return (
    <html>
      <body>
        <h2>Oops! That page doesn&apos;t exist!</h2>
        {/* Links to 'home page' aka all posts */}
        <Link href="/posts">Return Home</Link>
      </body>
    </html>
  );
}
