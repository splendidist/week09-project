import Image from "next/image";
import Link from "next/link";

//Meta Data
export const metadata = {
  title: "Make The Friends",
  description:
    "Welcome to the Make The Friends App. Make a profile and make posts online.",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
        src="/logo-mobile.png"
        alt="make the friends logo"
        width="300"
        height="300"
      />
      <Link
        className="uppercase px-3 py-1 mt-5 rounded-full bg-red-100 cursor-pointer hover:bg-rose-200 hover:scale-110 active:scale-100"
        href="/posts"
      >
        Enter
      </Link>
    </div>
  );
}
