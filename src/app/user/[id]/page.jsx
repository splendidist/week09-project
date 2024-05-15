import { db } from "@/lib/db";
import Dialog from "@/app/components/Dialog";

export default async function Profile({ params }) {
  const posts = await db.query(
    `SELECT * FROM friendposts WHERE profile_id = '${params.id}'`
  );

  const profiles = await db.query(
    `SELECT * FROM profiles WHERE id = '${params.id}'`
  );

  const [post] = posts.rows;
  const [profile] = profiles.rows;

  return (
    <div>
      <h2>
        {profile.id}
        {profile.username}username&apos;s Profile
      </h2>
      <h3>{profile.username}username</h3>
      <h3>{profile.location}location</h3>
      <h3>{profile.era}era</h3>
      <h3>{profile.bio}bio</h3>
      <Dialog />
      <h4>My Posts</h4>
      <div className="post-container">
        <p>{post.content}</p>
      </div>
    </div>
  );
}
