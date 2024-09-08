// /api/createUser

import { NextRequest, NextResponse } from 'next/server';
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db"; // Make sure the path is correct

export async function POST(req: NextRequest) {
  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const newUser = await db.user.create({
      data: {
        name: "sairaj",
        email: "sairajmane@gmail.com",
        avatarUrl: "#",
        role: "AGENCY_OWNER",
      },
    });

    return NextResponse.json(newUser, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
