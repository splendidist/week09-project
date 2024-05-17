✨ https://week09-project-delta.vercel.app/posts ✨

🎯 Please mention the requirements you met and which goals you achieved for this assignment.

Planning

- I used figma to design the home page, and figjam to create a general plan, wireframes, and database schemes
  Figma Design - https://www.figma.com/board/AZSHd0tPto0wAvnHNEtfmK/Untitled?node-id=0%3A1&t=IwFxxA6z8aE8DMjP-1
  Figjam Plan - https://www.figma.com/board/AZSHd0tPto0wAvnHNEtfmK/Untitled?node-id=0%3A1&t=IwFxxA6z8aE8DMjP-1

User Stories

- As a user, I am able to sign up for an account and create a user profile
- As a user, I am able to log in and out of my account
- As a user, I am able to create posts on my profile timeline
- As a user, I am able to see all posts by all users on a global timeline
- As a user, I am able able to visit other user profiles

Requirements

- Use Clerk.com to set up user signup and login - The user can sign up, sign in, and sign out using Clerk
- Use the Clerk userId to associate posts with a user - Each post is associated with the user who created it
- Enable each user to create a profile associated with their userId, and a form to input their biography and location data, etc. with a URL similar to /user/[userId] - The use is prompted to create their profile with their details when they first log in
- Enable users to create posts associated with the userId, and display those posts on the user's profile page - users posts appear on their own profile page
- Show a 404 error if a user profile doesn't exist - I have an error.jsx in my user/[id] folder, which tells the user whether they need to sign in, or have visited a user page that doesnt exist
- Use at least 1 Radix UI Primitive or similar - In my app I have used an accordian Radix Primitive in my about page

Stretch Goals

- Enable users to visit other user profiles after seeing their posts on a global timeline - The user can click the username on the post to go to that user's profile
- A user's biography cannot be blank. If a user logs in but doesn't have a biography set, they should be asked to fill one in - The user has to fill out their whole profile info when they sign in for the first time

Extra Features

- Clerk profile picture url in database, appearing on user's posts on home page, and on own profile posts - configured in next.config.mjs
- The user is only able to see the update form on their own profile
- User must sign in to view user profiles
- ORDER BY friendposts.id DESC - posts are ordered by newest first, so when the user makes a post, it appears at the top of the feed rather than the bottom
- metadata for each page
- loading page for each page

Future Additions

- I would like the user to be able to follow other users, and have these stats appear on the user's profile page e.g 10 followers | 5 following. The user would also not be able to follow someone more than once
- I would like the user to be able to leave a like on a post, and see how many likes that post has. The user would also not be able to like a post more than once
- I would like to add animations to the app e.g when the user scrolls posts fade in etc.
- Alert dialogue when user clicks sign out

🎯 Were there any requirements or goals that you were not quite able to achieve?

🎯 If so, could you please tell us what was it that you found difficult about these tasks?

- wanting to use client components on the posts page

✨ What went really well and what could have gone better?

What Went Well

What Could Have Gone Better

✨ Detailing useful external sources that helped you complete the assignment (e.g Youtube tutorials).

External Sources

✨ Describing errors or bugs you encountered while completing your assignment.

Errors/Bugs

✨ Requesting feedback about a specific part of your submission.

Sources :
mirrorball gif - https://giphy.com/handmadebyleeza
