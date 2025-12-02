import { connectDb } from "@/config/db";
import bcrypt from "bcryptjs";
import { userModel } from "@/models/user-model";
import { NextResponse } from "next/server";
export const POST = async (request) => {
  const { fname, lname, email, password } = await request.json();
  await connectDb();
  const hassedPassword = await bcrypt.hash(password, 5);
  const user = {
    name: `${fname} ${lname}`,
    email,
    password: hassedPassword,
  };
  try {
    await userModel.create(user);
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
