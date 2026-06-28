import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import Admin from "./models/Admin.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

await mongoose.connect(process.env.MONGO_URI);

const username = "cmmmdu2980";
const password = "Cm@2980";

const hashed = await bcrypt.hash(password, 10);

await Admin.deleteMany({});
await Admin.create({ username, password: hashed });

console.log("Admin seeded: username =", username);
await mongoose.disconnect();
