// // app/api/save-user/route.js
// import { NextResponse } from "next/server";
// import connectMongoDB from "@/lib/mongodb";
// import User from "@/models/User"; // your mongoose model

// export async function POST(req) {
//   try {
//     const { email, fullName } = await req.json();
//     await connectMongoDB();

//     // Check if user already exists
//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return NextResponse.json({ message: "User already exists." }, { status: 200 });
//     }

//     // Save new user
//     await User.create({ email, fullName });

//     return NextResponse.json({ message: "User saved successfully." }, { status: 201 });

//   } catch (error) {
//     console.error("Save User Error:", error);
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import User from "@/models/User"; // Your Mongoose model

export async function POST(req) {
  try {
    const { userId } = auth(); // Get Clerk user ID from auth context

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { email, fullName } = await req.json();

    await connectMongoDB();

    // Check if user already exists
    const existingUser = await User.findOne({ clerkId: userId });

    if (existingUser) {
      return NextResponse.json({ message: "User already exists." }, { status: 200 });
    }

    // Save new user
    await User.create({
      clerkId: userId,
      email,
      fullName,
    });

    return NextResponse.json({ message: "User saved successfully." }, { status: 201 });

  } catch (error) {
    console.error("Save User Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
