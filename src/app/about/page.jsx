import Link from "next/link";
import AccordianComp from "../components/Accordian";

export default function About() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="p-3 text-white text-3xl">About</h2>
      <Link
        className="uppercase px-3 py-1 mb-3 rounded-full bg-red-100 cursor-pointer hover:bg-rose-200 hover:scale-110 active:scale-100"
        href="/posts"
      >
        Return Home
      </Link>
      <AccordianComp />
    </div>
  );
}
