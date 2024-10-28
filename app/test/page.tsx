import { requiredRole } from "@/lib/auth";
import React from "react";

const page = async () => {
  await requiredRole("ADMIN");
  return <div>I am test page</div>;
};

export default page;
