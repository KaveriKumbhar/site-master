"use server"
import { auth } from "@clerk/nextjs/server";

const getUserId = async () => {
  let { userId } = auth();
  return userId;
};

export default getUserId;
