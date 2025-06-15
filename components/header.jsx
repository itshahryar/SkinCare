import React from "react";
import { Button } from "./ui/button";
import {
  Calendar,
  CreditCard,
  ShieldCheck,
  Stethoscope,
  User,
} from "lucide-react";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Link from "next/link";
import { Badge } from "./ui/badge";
import Image from "next/image";

export default function Header() {
  // You can replace this with real user logic later
  const user = null;

  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-10 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/logo-single.png"
            alt="Vitiligo Care Logo"
            width={200}
            height={60}
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          {/* Example Static Buttons */}
          <Link href="/admin">
            <Button
              variant="outline"
              className="hidden md:inline-flex items-center gap-2"
            >
              <ShieldCheck className="h-4 w-4" />
              Admin Dashboard
            </Button>
          </Link>

          <Link href="/doctor">
            <Button
              variant="outline"
              className="hidden md:inline-flex items-center gap-2"
            >
              <Stethoscope className="h-4 w-4" />
              Doctor Dashboard
            </Button>
          </Link>

          <Link href="/appointments">
            <Button
              variant="outline"
              className="hidden md:inline-flex items-center gap-2"
            >
              <Calendar className="h-4 w-4" />
              My Appointments
            </Button>
          </Link>

          <Link href="/onboarding">
            <Button
              variant="outline"
              className="hidden md:inline-flex items-center gap-2"
            >
              <User className="h-4 w-4" />
              Complete Profile
            </Button>
          </Link>

          {/* Sign In Button (Replace with real auth later) */}
          <div>
            <SignedOut>
              <SignInButton>
                <Button variant="secondary">Sign In</Button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
            </SignedIn>
          </div>

        </div>
      </nav>
    </header>
  );
}

