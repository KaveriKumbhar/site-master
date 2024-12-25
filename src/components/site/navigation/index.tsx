"use client";
import { ModeToggle } from "@/components/global/mode-toggle";
import { getAgencyId } from "@/lib/queries";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

type Props = {
  user?: null | User;
};

const Navigation = ({ user }: Props) => {
  const [activeLink, setActiveLink] = useState<number | null>(null);
  const [agencyID, setAgencyId] = useState<string | null>(null);

  const resolveId = async () => {
    let id = await getAgencyId();
    console.log(id);

    setAgencyId(id?.agencyId);
  };

  const handleMouseEnter = (index: number) => {
    setTimeout(() => {
      setActiveLink(index);
    }, 300);
  };

  const handleMouseLeave = () => {
    setActiveLink(null);
  };

  useEffect(() => {
    resolveId();
  }, []);

  return (
    <div className="p-4 flex items-center justify-between relative bg-white dark:bg-gray-900 shadow-md dark:shadow-none">
      {/* Logo and Branding */}
      <aside className="flex items-center gap-3">
        <Image
          src={"./assets/plura-logo.svg"}
          width={40}
          height={40}
          alt="plura-logo"
          className="hover:scale-110 transition-transform duration-300"
        />
        <span className="text-2xl font-bold text-primary dark:text-blue-500">
          WebOra.
        </span>
      </aside>

      {/* Navigation Links */}
      <nav className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ul className="flex items-center justify-center gap-8 text-lg font-medium">
          {["Pricing", "About", "Documentation", "Features"].map(
            (item, index) => (
              <li
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className={`text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-500 transition-colors duration-300 relative`}
              >
                <Link href={`#${item.toLowerCase()}`}>{item}</Link>
                {activeLink === index && (
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary dark:bg-blue-500 transition-all duration-300`}
                  ></span>
                )}
              </li>
            )
          )}
        </ul>
      </nav>

      {/* User and Action Buttons */}
      <aside className="flex gap-4 items-center">
        <SignedOut>
          <Link
            href={"/agency"}
            className="bg-primary dark:bg-blue-500 text-white dark:text-gray-900 py-2 px-6 rounded-full hover:bg-primary/80 dark:hover:bg-blue-600 transition-colors duration-300 shadow-lg"
          >
            Login
          </Link>
        </SignedOut>
        <SignedIn>
          {agencyID && (
            <Link
              href={`/agency/${agencyID}`}
              className="bg-primary dark:bg-blue-500 text-white dark:text-gray-900 py-2 px-6 rounded-full hover:bg-primary/80 dark:hover:bg-blue-600 transition-colors duration-300 shadow-lg"
            >
              Dashboard
            </Link>
          )}
          <UserButton />
        </SignedIn>
        <ModeToggle />
      </aside>
    </div>
  );
};

export default Navigation;
