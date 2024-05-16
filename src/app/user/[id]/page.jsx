import EditForm from "@/app/components/EditForm";
import { db } from "@/lib/db";

export default async function Profile({ params }) {
  const posts = await db.query(
    `SELECT * FROM friendposts WHERE profile_id = '${params.id}'`
  );

  const profiles = await db.query(
    `SELECT * FROM profiles WHERE id = '${params.id}'`
  );

  const [profile] = profiles.rows;

  return (
    <div>
      <h2>{profile.username}&apos;s Profile</h2>
      <h3>{profile.username}</h3>
      <h3>{profile.user_location}</h3>
      <h3>{profile.era}</h3>
      <h3>{profile.bio}</h3>
      <EditForm />
      <h4>My Posts</h4>
      {posts.rows.map((post) => (
        <div key={post.id}>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
