import Link from "next/link";

//Meta Data
export const metadata = {
  title: "Make The Friends | Not Found",
  description: "This page is not found, return home",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h4 className="p-3 text-white text-xl text-center">
        Oops! That page doesn&apos;t exist!
      </h4>
      {/* Links to 'home page' aka all posts */}
      <Link
        className="uppercase px-3 py-1 mb-3 rounded-full bg-red-100 cursor-pointer hover:bg-rose-200 hover:scale-110 active:scale-100"
        href="/posts"
      >
        Return Home
      </Link>
    </div>
  );
}
