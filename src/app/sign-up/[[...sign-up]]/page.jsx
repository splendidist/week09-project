import { SignUp } from "@clerk/nextjs";

export const metadata = {
  title: "Make The Friends | Sign Up",
  description: "Sign up to the Make The Friends App",
};

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignUp path="/sign-up" />
    </div>
  );
}
