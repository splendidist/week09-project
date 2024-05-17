import EditForm from "@/app/components/EditForm";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

//Meta Data
export const metadata = {
  title: "Make The Friends | Profile",
  description: "View user's profiles on the Make The Friends App",
};

export default async function Profile({ params }) {
  const { userId } = auth();

  //SELECT posts and profile pic for user, and order by newest first
  const posts = await db.query(
    `SELECT friendposts.*, profiles.profile_pic, profiles.username FROM friendposts INNER JOIN profiles ON friendposts.profile_id = profiles.id WHERE profile_id = '${params.id}' ORDER BY friendposts.id DESC`
  );

  //SELECT profile info for user
  const profiles = await db.query(
    `SELECT * FROM profiles WHERE id = '${params.id}'`
  );

  //Set profile
  const [profile] = profiles.rows;

  //SELECT profiles info for clerk
  const result = await db.query(
    `SELECT * FROM profiles WHERE clerk_id = '${userId}'`
  );

  //Current user id
  const profileId = result.rows[0].id;

  //If current user id matches [id], show edit form component, else don't show component
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
      <div className="text-center container m-auto grid grid-cols-2">
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
            <div className="flex items-center">
              <Image
                src={post.profile_pic}
                alt="profile picture"
                height={50}
                width={50}
                className="m-2 rounded-full"
              />
              <h5 className="p-3 underline">{post.username}</h5>
            </div>

            <p className="p-3">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
