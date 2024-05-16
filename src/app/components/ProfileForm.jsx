import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export default function ProfileForm() {
  const { userId } = auth();

  async function handleUpdateProfile(formData) {
    "use server";

    const username = formData.get("username");
    const location = formData.get("location");
    const era = formData.get("era");
    const bio = formData.get("bio");

    await db.query(
      `UPDATE profiles SET username='${username}', user_location='${location}', era='${era}', bio='${bio}' WHERE clerk_id='${userId}'`
    );
    revalidatePath("/");
  }

  return (
    <div>
      <h2>Create your Profile</h2>
      <form action={handleUpdateProfile}>
        <fieldset>
          <label htmlFor="username">Username</label>
          <input name="username" placeholder="username" required />
        </fieldset>
        <fieldset>
          <label htmlFor="location">Location</label>
          <input name="location" placeholder="Location" required />
        </fieldset>
        <fieldset>
          <label htmlFor="era">Favourite Era</label>
          <input name="era" placeholder="Favourite Era" required />
        </fieldset>
        <fieldset>
          <label htmlFor="bio">Bio</label>
          <input name="bio" placeholder="Bio" required />
        </fieldset>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
