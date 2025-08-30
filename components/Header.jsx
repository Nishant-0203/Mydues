"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { useStoreUser } from "@/hooks/use-store-user";
import { BarLoader } from "react-spinners";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Authenticated, Unauthenticated } from "convex/react";
import { Button } from "./ui/button";
import { LayoutDashboard, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const { isLoading } = useStoreUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const path = usePathname();

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Glass effect navbar with gradient border */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-gradient-to-r from-purple-200/50 via-blue-200/50 to-purple-200/50">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Mydues
            </span>
          </Link>

          {/* Desktop Navigation */}
          {path === "/" && (
            <div className="hidden md:flex items-center gap-8">
              <Link 
                href="#features"
                className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
              >
                Features
              </Link>
              <Link 
                href="#how-it-works"
                className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
              >
                How It Works
              </Link>
              <Link 
                href="#pricing"
                className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
              >
                Pricing
              </Link>
              <Link 
                href="#faq"
                className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
              >
                FAQ
              </Link>
            </div>
          )}

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Authenticated>
              <Link href="/dashboard">
                <Button 
                  variant="outline"
                  className="items-center gap-2 border-purple-200 hover:border-purple-400 hover:text-purple-600 transition-all"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
              <UserButton />
            </Authenticated>

            <Unauthenticated>
              <SignInButton>
                <Button variant="ghost" className="text-gray-600 hover:text-purple-600">
                  Sign In
                </Button>
              </SignInButton>
              
              <SignUpButton>
                <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-none rounded-2xl px-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
                  Get Started
                </Button>
              </SignUpButton>
            </Unauthenticated>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Authenticated>
              <Link href="/dashboard">
                <Button variant="ghost" className="w-10 h-10 p-0">
                  <LayoutDashboard className="h-4 w-4" />
                </Button>
              </Link>
              <UserButton />
            </Authenticated>

            <Unauthenticated>
              <Button
                variant="ghost"
                className="w-10 h-10 p-0"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </Unauthenticated>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && path === "/" && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200">
            <div className="container mx-auto px-4 py-4 space-y-3">
              <Link 
                href="#features"
                className="block py-2 text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="#how-it-works"
                className="block py-2 text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                href="#pricing"
                className="block py-2 text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="#faq"
                className="block py-2 text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              
              <Unauthenticated>
                <div className="pt-3 border-t border-gray-200 space-y-2">
                  <SignInButton>
                    <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-purple-600">
                      Sign In
                    </Button>
                  </SignInButton>
                  
                  <SignUpButton>
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-none rounded-2xl shadow-lg">
                      Get Started
                    </Button>
                  </SignUpButton>
                </div>
              </Unauthenticated>
            </div>
          </div>
        )}
      </div>

      {isLoading && <BarLoader width="100%" color="#8b5cf6" />}
    </header>
  );
};

export default Header;