import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Alumni from "@/models/Alumni";
import bcrypt from "bcrypt";

interface AlumniData {
  name: string;
  email: string;
  contact: string;
  studentID: string;
}
export async function POST(request: Request): Promise<NextResponse> {
  try {
    // Connect to the database once
    await connectToDatabase();

    const { name, email, contact, studentID }: AlumniData = await request.json();

    console.log("Received data:", { name, email, contact, studentID }); // Log incoming data

    // Check if alumni already exists
    const alumniExistence = await Alumni.findOne({ email });
    if (alumniExistence) {
      return NextResponse.json({ error: "Alumni already existed" }, { status: 400 });
    }

    // Hash the email
    const hashedEmail = await bcrypt.hash(email, 12);
    const newAlumni = new Alumni({
      name,
      email: hashedEmail,
      contact,
      studentID,
    });

    // Save the new alumni to the database
    await newAlumni.save();
    return NextResponse.json({ message: "Alumni Registered", status: 201 });
  } catch (err: any) {
    console.error("Error:", err.message); // Log error for debugging
    return NextResponse.json({ error: err.message, status: 500 });
  }
}