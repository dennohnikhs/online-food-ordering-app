"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { Search } from "lucide-react";

import Image from "next/image";

function Header() {
  const { isSignedIn } = useUser();
  return (
    <div className="flex justify-between items-center lg:p-6 p-3 shadow-sm sticky top-0 left-0 z-200 w-full bg-gray-400 z-50 ">
      <Image
        src="/logo.png"
        alt="logo"
        width={100}
        height={100}
        className="rounded-lg"
      />
      <div className=" hidden md:flex   border p-2 rounded-lg bg-gray-200    ">
        <input type="text" className="w-full bg-transparent  outline-none" />
        <Search />
      </div>

      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className="flex gap-5">
          <SignInButton mode="modal">
            <Button variant="outline">Login</Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button>Sign Up</Button>
          </SignUpButton>
        </div>
      )}
    </div>
  );
}

export default Header;
