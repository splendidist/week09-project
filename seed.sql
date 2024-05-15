CREATE TABLE profiles (
    id SERIAL PRIMARY KEY,
    clerk_id TEXT,
    username TEXT,
    user_location TEXT,
    era TEXT,
    bio TEXT
);

CREATE TABLE friendposts (
    id SERIAL PRIMARY KEY,
    profile_id INT REFERENCES profiles(id),
    content TEXT
)