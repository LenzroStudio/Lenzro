"use client";

import * as React from "react";
import Link from "next/link";
import {
  BotMessageSquare,
  ChartNoAxesCombined,
  Earth,
  FilePlusCorner,
  HandCoins,
  LayoutDashboard,
  Mails,
  Sparkles,
  Users,
} from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { DottedGlowBackgroundDemo } from "./DottedGlowBackgroundDemo";

const solutions = [
  {
    title: "Dashboard",
    href: "/app/dashboard",
    icon: <LayoutDashboard className="w-5 h-5" />,
    description: "Manage your business.",
  },
  {
    title: "Website",
    href: "/app/website",
    icon: <Earth className="w-5 h-5" />,
    description: "Your site, pages, landing pages",
  },
  {
    title: "Brand",
    href: "/app/brand",
    icon: <Sparkles className="w-5 h-5" />,
    description: "Logos, colors, fonts, templates",
  },
  {
    title: "Clients",
    href: "/app/clients",
    icon: <Users className="w-5 h-5" />,
    description: "Leads, customers, contacts",
  },
  {
    title: "Payments",
    href: "/app/payments",
    icon: <HandCoins className="w-5 h-5" />,
    description: "Invoices, subscriptions, sales",
  },
  {
    title: "Files",
    href: "/app/files",
    icon: <FilePlusCorner className="w-5 h-5" />,
    description: "Designs, contracts, assets",
  },
  {
    title: "Email",
    href: "/app/email",
    icon: <Mails className="w-5 h-5" />,
    description: "Notifications, updates",
  },
  {
    title: "Analytics",
    href: "/app/analytics",
    icon: <ChartNoAxesCombined className="w-5 h-5" />,
    description: "Visitors, conversions, revenue",
  },
  {
    title: "AI Agent",
    href: "/app/agent",
    icon: <BotMessageSquare className="w-5 h-5" />,
    description: "Assist your workflows with AI.",
  },
];


export function NavigationMenuLinks() {
  const isMobile = useIsMobile();

  return (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList className="flex-wrap">
        {/* Home dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <DottedGlowBackgroundDemo />
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Lenzro is the operating system for modern businesses & creators.
              </ListItem>
              <ListItem href="/docs/guide" title="How to use it">
                Login then start running your business, as simple as that.
              </ListItem>
              <ListItem href="/register" title="Get Started">
                Create your account and start running your business today.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Docs link */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="px-3 py-1 text-sm text-black dark:text-white hover:text-green-500 transition-colors"
          >
            <Link href="/docs">Docs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Solutions dropdown */}
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-4 w-[200px] lg:w-[800px] lg:grid-cols-3 p-3">
              {solutions.map((item, index) => (
                <li key={index}>
                  <div>
                    <Link
                      href={item.href}
                      className="flex items-start gap-3 rounded-md p-3 transition-colors hover:bg-accent"
                    >
                      <div className="rounded-xl border p-2 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-black dark:text-white">
                          {item.title}
                        </span>
                        {item.description && (
                          <span className="text-xs text-gray-600 dark:text-gray-300 mt-1 leading-snug">
                            {item.description}
                          </span>
                        )}
                      </div>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Pricing link */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="px-3 py-1 text-sm text-black dark:text-white hover:text-green-500 transition-colors"
          >
            <Link href="/pricing">Pricing</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm font-medium">{title}</div>
          <p className="text-gray-600 line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
