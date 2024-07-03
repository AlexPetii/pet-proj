"use client";

import { useUser } from "@clerk/nextjs";

export default function Project() {
  const { isSignedIn, user } = useUser();
  if (!isSignedIn) {
    return null;
  }
  return <div>Hello, {user.username}</div>;
}
