"use client";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
// import "./Dialog.css";

export default function DialogComponent() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <button className="dialog-button">Edit profile</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description>
            Make changes to your profile here. Click save when you&apos;re done.
          </Dialog.Description>

          <form>
            <fieldset>
              <label htmlFor="username">Username</label>
              <input name="username" placeholder="username" />
            </fieldset>
            <fieldset>
              <label htmlFor="location">Location</label>
              <input name="location" placeholder="Location" />
            </fieldset>
            <fieldset>
              <label htmlFor="era">Favourite Era</label>
              <input name="era" placeholder="Favourite Era" />
            </fieldset>
            <fieldset>
              <label htmlFor="bio">Bio</label>
              <input name="bio" placeholder="Bio" />
            </fieldset>
          </form>

          <Dialog.Close>
            <button>Save changes</button>
          </Dialog.Close>
          <Dialog.Close>
            <button aria-label="Close">x</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
