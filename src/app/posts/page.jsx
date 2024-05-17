import { db } from "@/lib/db";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import Link from "next/link";

export default async function Posts() {
  const { userId } = auth();

  const posts = await db.query(`SELECT 
  friendposts.id, 
  friendposts.profile_id, 
  friendposts.content, 
  profiles.username 
  FROM friendposts 
  INNER JOIN profiles ON friendposts.profile_id = profiles.id`);

  const result = await db.query(
    `SELECT * FROM profiles WHERE clerk_id = '${userId}'`
  );

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
      <h2 className="p-3 text-white text-3xl text-center">Make The Friends</h2>
      <SignedIn>
        {result.rows.map((profile) => (
          <div className="flex justify-around" key={profile.id}>
            <Link
              className="uppercase px-3 p-1 m-2 rounded-full bg-red-100 cursor-pointer hover:bg-rose-200 hover:scale-110 active:scale-100"
              href="/about"
            >
              About
            </Link>
            <Link
              className="uppercase px-3 rounded-full bg-red-100 cursor-pointer hover:bg-rose-200 hover:scale-110 active:scale-100 p-1 m-2"
              href={`/user/${profile.id}`}
              key={profile.id}
            >
              My Profile
            </Link>
          </div>
        ))}

        <form className="flex flex-col" action={handleAddPost}>
          <label htmlFor="content" className="m-2 text-white text-xl">
            Make a new post...
          </label>
          <textarea
            className="m-2 p-1 border-8 rounded border-red-200"
            name="content"
            placeholder="✨ What's up?"
            required
          />
          <button className="self-center uppercase px-3 rounded-full bg-red-100 cursor-pointer hover:bg-rose-200 hover:scale-110 active:scale-100 m-2">
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
          <SignInButton className="uppercase px-3 rounded-full bg-red-100 cursor-pointer hover:bg-rose-200 hover:scale-110 active:scale-100" />
        </div>

        <p className="text-center text-white pt-2">
          You need to sign in to make a post!
        </p>
      </SignedOut>

      <div className="posts flex flex-col">
        {posts.rows.map((post) => {
          return (
            <div
              key={post.id}
              className="p-2 m-2 bg-white border-8 rounded border-red-200"
            >
              <Link href={`/user/${post.profile_id}`} key={post.id}>
                {post.username}:
              </Link>
              <p>{post.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
