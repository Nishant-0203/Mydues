"use client";
import { useAuth } from "@clerk/nextjs";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

export function ConvexClientProvider({ children }) {
  return <ConvexProvider client={convex}
  useAuth={useAuth}
  >{children}</ConvexProvider>;
}