// lib/actions/user.js

import User from '../models/user.models';
import { connect } from '../mongodb';

export const createOrUpdateUser = async (
  id,
  first_name,
  last_name,
  image_url,
  email_addresses,
  username
) => {
  try {
    await connect();

    const email = email_addresses?.[0]?.email || '';

    if (!email) {
      throw new Error('Missing email address in Clerk data');
    }

    console.log(`Saving user - Clerk ID: ${id}, Email: ${email}`);

    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          avatar: image_url,
          email: email,
          username: username,
        },
      },
      { new: true, upsert: true }
    );

    return user;
  } catch (error) {
    console.error('Error in createOrUpdateUser:', error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    await connect();

    console.log(`Deleting user with Clerk ID: ${id}`);
    await User.findOneAndDelete({ clerkId: id });
  } catch (error) {
    console.error('Error in deleteUser:', error);
    throw error;
  }
};

