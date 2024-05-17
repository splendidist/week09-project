import EditForm from "@/app/components/EditForm";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Profile({ params }) {
  const { userId } = auth();
  console.log(userId);

  const posts = await db.query(
    `SELECT * FROM friendposts WHERE profile_id = '${params.id}'`
  );

  const profiles = await db.query(
    `SELECT * FROM profiles WHERE id = '${params.id}'`
  );

  const [profile] = profiles.rows;

  const result = await db.query(
    `SELECT * FROM profiles WHERE clerk_id = '${userId}'`
  );
  const profileId = result.rows[0].id;
  // console.log(profileId);
  // console.log(params.id);
  const currentUser = profileId == params.id ? true : false;
  return (
    <div className="flex flex-col items-center">
      <h2 className="capitalize p-3 text-white text-3xl">
        {profile.username}&apos;s Profile
      </h2>
      <Link
        className="uppercase px-3 py-1 mb-3 rounded-full bg-red-100 cursor-pointer hover:bg-rose-200 hover:scale-110 active:scale-100"
        href="/posts"
      >
        Return Home
      </Link>
      <div class="text-center container m-auto grid grid-cols-2">
        <h3 className="m-1 px-3 py-1 mb-3 rounded-full bg-red-100">
          {profile.username}
        </h3>
        <h3 className="m-1 px-3 py-1 mb-3 rounded-full bg-red-100">
          {profile.user_location}
        </h3>
        <h3 className="m-1 px-3 py-1 mb-3 rounded-full bg-red-100">
          {profile.era}
        </h3>
        <h3 className="m-1 px-3 py-1 mb-3 rounded-full bg-red-100">
          {profile.bio}
        </h3>
      </div>

      {currentUser && <EditForm />}
      <h4 className="p-3 text-white text-xl text-center">My Posts</h4>
      <div className="posts flex flex-col">
        {posts.rows.map((post) => (
          <div
            className="p-2 m-2 bg-white border-8 rounded border-red-200"
            key={post.id}
          >
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
