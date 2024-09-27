"use server";

import dbConnect from "@/lib/dbConnect";

export async function testDatabaseConnection() {
  let isConnected = false;
  try {
    await dbConnect();
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    ); // because this is a server action, the console.log will be outputted to your terminal not in the browser
    return !isConnected;
  } catch (e) {
    console.error(e);
    return isConnected;
  }
}