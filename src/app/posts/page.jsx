import { db } from "@/lib/db";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function Posts() {
  const { userId } = auth();

  const posts = await db.query(`SELECT 
  friendposts.id, 
  friendposts.content, 
  profiles.username 
  FROM friendposts 
  INNER JOIN profiles ON friendposts.profile_id = profiles.id`);

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
  }

  return (
    <div>
      <h2>Posts</h2>

      <SignedIn>
        <h3>New Post</h3>
        <form action={handleAddPost}>
          <textarea name="content" placeholder="✨ What's up?" />
          <button>Post</button>
        </form>
      </SignedIn>

      <SignedOut>
        <p>You need to sign in to make a post!</p>
        <SignInButton />
      </SignedOut>

      <div className="posts">
        {posts.rows.map((post) => {
          return (
            <div key={post.id}>
              <h4>{post.username}username:</h4>
              <p>{post.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
