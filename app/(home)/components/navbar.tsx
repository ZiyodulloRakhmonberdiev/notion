"use client";

import React from "react";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/shared/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import Link from "next/link";
import { Loader } from "@/components/ui/loader";
import { useScrolled } from "@/hooks/use-scrolled";

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrolled();
  const { user } = useUser()
  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-6 justify-between",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="flex items-center gap-x-2">
        {isLoading && <Loader />}
        {user && !isLoading && (
          <>
            <Button variant={"ghost"} size={"sm"} asChild>
              <Link href={"/documents"}>Enter Notion</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        {!user && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button size={"sm"} variant={"ghost"}>
                Log In
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size={"sm"}>Get Notion Free</Button>
            </SignInButton>
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};