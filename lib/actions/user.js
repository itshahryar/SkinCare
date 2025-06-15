"use server";

import User from "@/models/user";
import { connect } from "@/lib/mongodb";

export async function createUser(user) {
  try {
    await connect();

    // Optional: check if user already exists by Clerk ID
    const existingUser = await User.findOne({ clerkId: user.clerkId });
    if (existingUser) {
      return existingUser;
    }

    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

