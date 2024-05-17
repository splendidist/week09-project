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
    <div className="flex flex-col items-center justify-center h-full">
      <Image src="/laptop-bg.svg" alt="make the friends logo" fill />
      <Link
        className="absolute top-3/4 uppercase px-3 py-1 mt-5 rounded-full bg-red-100 cursor-pointer hover:bg-rose-200 hover:scale-110 active:scale-100"
        href="/posts"
      >
        Enter
      </Link>
    </div>
  );
}
