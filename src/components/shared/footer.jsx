import {
  CopyrightIcon,
  Instagram,
  Linkedin,
  Slack,
  Sparkles,
  TwitterIcon,
  Youtube,
} from "lucide-react";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
const productLinks = [
  "What's New",
  "AI Workspace",
  "Custom Boards",
  "Widgets & Elements",
  "Automation Rules",
  "Templates Marketplace",
  "Integrations",
  "Pricing",
];


const powerUpsLinks = [
  "AI Commands",
  "Smart Widgets",
  "Workflow Automations",
  "Data Connectors",
  "Permissions & Roles",
  "Version History",
  "Security & Compliance",
  "API Access",
];

const communityLinks = [
  "Our Team",
  "Invite Members",
  "Roles & Permissions",
  "Activity Logs",
  "Shared Boards",
  "Team Templates",
  "Collaboration Guide",
];


const companyLinks = [
  { name: "Careers", badge: "Hiring!" },
  { name: "Contact Sales" },
  { name: "Support" },
  { name: "FAQ" },
  { name: "Privacy Policy" },
  { name: "Terms & Conditions" },
  { name: "Licensing Agreement" },
  { name: "Cookie Settings" },
];

const socialIcons = [
  { icon: <Youtube className="w-4 h-4" />, url: "#" },
  { icon: <Instagram className="w-4 h-4" />, url: "#" },
  { icon: <TwitterIcon className="w-4 h-4" />, url: "#" },
  { icon: <Slack className="w-4 h-4" />, url: "#" },
];

const avatars = [
  { imageUrl: "https://avatars.githubusercontent.com/u/16860528" },
  { imageUrl: "https://avatars.githubusercontent.com/u/20110627" },
  { imageUrl: "https://avatars.githubusercontent.com/u/106103625" },
  { imageUrl: "https://avatars.githubusercontent.com/u/59228569" },
  { imageUrl: "https://avatars.githubusercontent.com/u/59442788" },
  { imageUrl: "https://avatars.githubusercontent.com/u/89768406" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-zinc-950  !pb-8 !px-[5%]">
      <div className="max-w-7xl mx-auto">
        <hr className="!my-10" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 !mb-10">
          <div>
            <h3 className="!mb-3">Product</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-400 hover:underline text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="!mb-3">Power ups</h3>
            <ul className="space-y-2">
              {powerUpsLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-400 hover:underline text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="!mb-3">Community</h3>
            <ul className="space-y-2">
              {communityLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-gray-700 dark:text-gray-400 hover:underline text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="!mb-3">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href="#"
                    className="text-gray-700 dark:text-gray-400 hover:underline text-sm flex items-center gap-2"
                  >
                    {link.name}
                    {link.badge && (
                      <span className="bg-pink-100 text-pink-600 text-xs !px-2 !py-0.5 rounded ml-1">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <Link href="/" className="flex items-center justify-start">
            <div className="!p-3 rounded-full bg-black dark:bg-transparent">
              <img
                src="https://1j8rp7fkdq62hja2.public.blob.vercel-storage.com/Plugin%20icon%20-%202%20%281%29.png"
                className="z-50 m-auto size-8 rounded-xl"
              />
            </div>
            <h1 className="text-sm md:text-lg flex  relative">
              Lenzro
                <CopyrightIcon className="w-2 h-2 absolute top-0 left-[100%]" />
            </h1>
          </Link>
          <span className="text-gray-400 text-sm">
            © 2026 Lenzro. All rights reserved.
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between !mt-8 gap-6">
          <div className="flex items-center gap-1">
            {avatars.map((avatar, idx) => (
              <img
                key={idx}
                src={avatar.imageUrl}
                alt={`Avatar ${idx + 1}`}
                className="w-8 h-8 rounded-full border border-gray-200 dark:border-zinc-800"
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-sm">Join our community</span>
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
