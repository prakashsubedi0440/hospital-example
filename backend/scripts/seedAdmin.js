/**
 * Run this script once to create the admin account:
 *   node scripts/seedAdmin.js
 *
 * Change the email/password below before running.
 */

import "dotenv/config";
import mongoose from "mongoose";
import Admin from "../models/Admin.js";

const EMAIL = "admin@eyehospital.com";
const PASSWORD = "Admin@1234"; // Change this before running

await mongoose.connect(process.env.MONGO_URI);

const existing = await Admin.findOne({ email: EMAIL });
if (existing) {
  console.log("Admin already exists:", EMAIL);
} else {
  await Admin.create({ email: EMAIL, password: PASSWORD });
  console.log("Admin account created:", EMAIL);
}

await mongoose.disconnect();
