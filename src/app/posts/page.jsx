import { db } from "@/lib/db";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import Link from "next/link";

//Meta Data
export const metadata = {
  title: "Make The Friends | Home",
  description: "View all posts on the Make The Friends App",
};

export default async function Posts() {
  const { userId } = auth();

  //SELECT posts and profiles with JOIN
  const posts = await db.query(`SELECT 
  friendposts.id, 
  friendposts.profile_id, 
  friendposts.content,
  profiles.profile_pic,
  profiles.username 
  FROM friendposts 
  INNER JOIN profiles ON friendposts.profile_id = profiles.id
  ORDER BY friendposts.id DESC`);

  //SELECT profile by user
  const result = await db.query(
    `SELECT * FROM profiles WHERE clerk_id = '${userId}'`
  );

  //Add post function
  async function handleAddPost(formData) {
    "use server";

    const content = formData.get("content");
    const result = await db.query(
      `SELECT * FROM profiles WHERE clerk_id = '${userId}'`
    );
    const profileId = result.rows[0].id;

    await db.query(
      `INSERT INTO friendposts (profile_id, content) VALUES (${profileId},'${content}')`
    );
    revalidatePath("/");
  }

  return (
    <div>
      <h2 className="p-3 text-white  text-center sm:text-3xl md:text-4xl lg:text-5xl">
        Make The Friends
      </h2>
      <SignedIn>
        {result.rows.map((profile) => (
          <div
            className="flex justify-around md:mx-5 lg:mx-40"
            key={profile.id}
          >
            <Link
              className="flex items-center text-center uppercase px-3 rounded-full bg-red-100 cursor-pointer hover:bg-rose-200 hover:scale-110 active:scale-100 p-1 m-1"
              href={`/user/${profile.id}`}
              key={profile.id}
            >
              My Profile
            </Link>
            <Link
              className="flex items-center uppercase px-3 p-1 m-1 rounded-full bg-red-100 cursor-pointer hover:bg-rose-200 hover:scale-110 active:scale-100"
              href="/about"
            >
              About
            </Link>

            <SignOutButton className="flex items-center text-center uppercase px-3 p-1 m-1 rounded-full bg-red-100 cursor-pointer hover:bg-rose-200 hover:scale-110 active:scale-100" />
          </div>
        ))}

        <form className="flex flex-col items-center" action={handleAddPost}>
          <label
            htmlFor="content"
            className="m-3 text-center text-white sm:text-xl md:text-2xl"
          >
            Make a new post...
          </label>
          <textarea
            className=" p-1 border-8 rounded border-red-200 h-44 m-2 w-4/5 md:w-3/4 lg:w-1/2"
            name="content"
            placeholder="✨ What's up?"
            required
          />
          <button className="self-center uppercase px-4 py-1 rounded-full bg-red-100 cursor-pointer hover:bg-rose-200 hover:scale-110 active:scale-100 mt-2 mb-6">
            Post
          </button>
        </form>
      </SignedIn>

      <SignedOut>
        <div className="flex justify-around">
          {" "}
          <Link
            className="uppercase px-3 py-1 rounded-full bg-red-100 cursor-pointer hover:bg-rose-200 hover:scale-110 active:scale-100"
            href="/about"
          >
            About
          </Link>{" "}
          <SignUpButton className="uppercase px-3 rounded-full bg-red-100 cursor-pointer hover:bg-rose-200 hover:scale-110 active:scale-100" />
          <SignInButton className="uppercase px-3 rounded-full bg-red-100 cursor-pointer hover:bg-rose-200 hover:scale-110 active:scale-100" />
        </div>

        <p className="text-center text-white pt-2">
          You need to sign in to make a post!
        </p>
      </SignedOut>

      <div className="posts flex flex-col items-center">
        {posts.rows.map((post) => {
          return (
            <div
              key={post.id}
              className="p-2 m-2 bg-white border-8 rounded border-red-200 w-4/5  md:w-3/4 lg:w-1/2"
            >
              <div className="flex items-center">
                <Link
                  className="p-3"
                  href={`/user/${post.profile_id}`}
                  key={post.id}
                >
                  <Image
                    src={post.profile_pic}
                    alt="profile picture"
                    height={50}
                    width={50}
                    className="rounded-full"
                  />
                </Link>
                <Link
                  className="p-2 underline"
                  href={`/user/${post.profile_id}`}
                  key={post.id}
                >
                  {post.username}:
                </Link>
              </div>
              <p className="p-3">{post.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
