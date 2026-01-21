"use client";

import * as React from "react";
import Link from "next/link";


import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { DottedGlowBackgroundDemo } from "./DottedGlowBackgroundDemo";



export function NavigationMenuLinks({ onLinkClick }) {
  const isMobile = useIsMobile();

  return (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList
        className="
          flex flex-col  px-2
          md:flex-row md:flex-nowrap md:items-center items-start md:gap-4
        "
      >
        {/* Home dropdown (hidden on mobile) */}
        <NavigationMenuItem className="hidden md:block z-20">
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <DottedGlowBackgroundDemo />
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction" onClick={onLinkClick}>
                Lenzro is the operating system for modern businesses & creators.
              </ListItem>
              <ListItem
                href="/docs/guide"
                title="How to use it"
                onClick={onLinkClick}
              >
                Login then start running your business, as simple as that.
              </ListItem>
              <ListItem
                href="/register"
                title="Get Started"
                onClick={onLinkClick}
              >
                Create your account and start running your business today.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Docs link */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="px-3 py-1 text-lg md:text-sm text-black dark:text-white hover:text-green-500 transition-colors"
          >
            <Link href="/docs" onClick={onLinkClick}>
              Docs
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Solutions link */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="px-3 py-1 text-lg md:text-sm text-black dark:text-white hover:text-green-500 transition-colors"
          >
            <Link href="/solutions" onClick={onLinkClick}>
              Solutions
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Pricing link */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="px-3 py-1 text-lg md:text-sm text-black dark:text-white hover:text-green-500 transition-colors"
          >
            <Link href="/pricing" onClick={onLinkClick}>
              Pricing
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({ title, children, href, onClick, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} onClick={onClick}>
          <div className="text-sm font-medium">{title}</div>
          <p className="text-gray-600 line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
