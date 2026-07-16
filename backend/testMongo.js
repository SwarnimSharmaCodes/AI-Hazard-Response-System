import "dotenv/config";
import mongoose from "mongoose";

console.log("Node Version:", process.version);
console.log("Mongoose Version:", mongoose.version);
console.log("URI Loaded:", process.env.MONGO_URI ? "YES" : "NO");

try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected Successfully");

    process.exit(0);

} catch (err) {

    console.error("❌ Connection Failed");
    console.error(err);

    process.exit(1);
}