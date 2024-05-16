import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export default function EditForm() {
  const { userId } = auth();

  async function handleEditProfile(formData) {
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
      <h2 className="p-3 text-white text-xl text-center">Edit your Profile</h2>
      <form
        className="bg-red-200 rounded-md p-2 flex flex-col items-end"
        action={handleEditProfile}
      >
        <fieldset className="mb-2">
          <label className="p-3" htmlFor="username">
            User
          </label>
          <input
            className="p-1"
            name="username"
            placeholder="Username"
            required
          />
        </fieldset>
        <fieldset className="mb-2">
          <label className="p-3" htmlFor="location">
            Location
          </label>
          <input
            className="p-1"
            name="location"
            placeholder="Location"
            required
          />
        </fieldset>
        <fieldset className="mb-2">
          <label className="p-3" htmlFor="era">
            Fave Era
          </label>
          <input
            className="p-1"
            name="era"
            placeholder="Favourite Era"
            required
          />
        </fieldset>
        <fieldset className="mb-2">
          <label className="p-3" htmlFor="bio">
            Bio
          </label>
          <input className="p-1" name="bio" placeholder="Bio" required />
        </fieldset>
        <button
          className="self-center uppercase px-3 py-1 m-2 rounded-full bg-red-100 cursor-pointer hover:bg-white hover:scale-110 active:scale-100"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
}
