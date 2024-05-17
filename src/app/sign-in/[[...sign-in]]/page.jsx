import { SignIn } from "@clerk/nextjs";

export const metadata = {
  title: "Make The Friends | Sign In",
  description: "Sign in to the Make The Friends App",
};

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignIn path="/sign-in" />
    </div>
  );
}
