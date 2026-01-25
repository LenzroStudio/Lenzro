"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Kbd } from "@/components/ui/kbd";
import { Input } from "@/components/ui/input";
import { CommandDialog } from "../ui/command";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { FileText } from "lucide-react";
import { useSearchStore } from "@/app/store/searchStore";

// Example documentation structure
const docs = [
  {
    title: "Introduction",
    route: "/docs/introduction",
    children: [
      { title: "What is Lenzro", route: "/docs/what-is-lenzro" },
      { title: "Why Lenzro", route: "/docs/why-lenzro" },
      { title: "Core Concepts", route: "/docs/core-concepts" },
      {
        title: "How Lenzro is Different",
        route: "/docs/how-lenzro-is-different",
      },
      {
        title: "Our Lenzro Team",
        route: "/docs/our-lenzro-team",
      },
    ],
  },
  {
    title: "Getting Started",
    route: "/docs/getting-started",
    children: [
      { title: "Create Your Workspace", route: "/docs/create-workspace" },
      { title: "The Blackboard", route: "/docs/blackboard" },
      { title: "Pages & Structure", route: "/docs/pages-structure" },
      { title: "Widgets", route: "/docs/widgets" },
      { title: "Edge Panel", route: "/docs/edge-panel" },
      { title: "Your AI Assistant", route: "/docs/ai-assistant" },
    ],
  },
  {
    title: "Core Concepts",
    route: "/docs/core-concepts-section",
    children: [
      { title: "The Blackboard Canvas", route: "/docs/blackboard-canvas" },
      { title: "Widgets", route: "/docs/core-widgets" },
      { title: "Pages & Schemas", route: "/docs/pages-schemas" },
      { title: "Views (Table, Board, Gallery)", route: "/docs/views" },
      { title: "Spatial Productivity", route: "/docs/spatial-productivity" },
      { title: "Persistence & State", route: "/docs/persistence-state" },
    ],
  },
  {
    title: "The AI Layer",
    route: "/docs/ai-layer",
    children: [
      { title: "AI Workspace Director", route: "/docs/ai-workspace-director" },
      { title: "How the AI Thinks", route: "/docs/how-ai-thinks" },
      { title: "AI Actions", route: "/docs/ai-actions" },
      { title: "Auto Layout", route: "/docs/auto-layout" },
      { title: "Smart Priorities", route: "/docs/smart-priorities" },
      { title: "Semantic Search", route: "/docs/semantic-search" },
    ],
  },
  {
    title: "Business Modules",
    route: "/docs/business-modules",
    children: [
      { title: "Clients", route: "/docs/clients" },
      { title: "Orders & Payments", route: "/docs/orders-payments" },
      { title: "Files", route: "/docs/files" },
      { title: "Email", route: "/docs/email" },
      { title: "Analytics", route: "/docs/analytics" },
      { title: "Website Management", route: "/docs/website-management" },
    ],
  },
  {
    title: "Customization",
    route: "/docs/customization",
    children: [
      {
        title: "Creating Your Own Dashboard",
        route: "/docs/creating-dashboard",
      },
      { title: "Custom Schemas", route: "/docs/custom-schemas" },
      { title: "Custom Views", route: "/docs/custom-views" },
      { title: "Permissions & Roles", route: "/docs/permissions-roles" },
    ],
  },
  {
    title: "Architecture",
    route: "/docs/architecture",
    children: [
      { title: "System Overview", route: "/docs/system-overview" },
      { title: "Data Model", route: "/docs/data-model" },
      { title: "Widget System", route: "/docs/widget-system" },
      { title: "State Management", route: "/docs/state-management" },
      { title: "AI Architecture (RAG)", route: "/docs/ai-architecture" },
    ],
  },
  {
    title: "Security & Privacy",
    route: "/docs/security-privacy",
    children: [
      { title: "Data Ownership", route: "/docs/data-ownership" },
      { title: "AI Boundaries", route: "/docs/ai-boundaries" },
      { title: "Permissions", route: "/docs/security-permissions" },
    ],
  },
  {
    title: "Roadmap",
    route: "/docs/roadmap",
    children: [
      { title: "What’s Live", route: "/docs/whats-live" },
      { title: "What’s Coming", route: "/docs/whats-coming" },
    ],
  },
];
// Utility to flatten nested docs
function flattenDocs(docs) {
  return docs.flatMap(
    (section) =>
      section.children?.map((child) => ({
        section: section.title,
        title: child.title,
        route: child.route,
      })) || [],
  );
}

// Example usage in your component
const flatDocs = flattenDocs(docs);

export function SearchBarWithShortcut({ mobileTrigger = false }) {
  const {
    desktopOpen,
    mobileOpen,
    query,
    setDesktopOpen,
    setMobileOpen,
    setQuery,
    reset,
  } = useSearchStore();
  const router = useRouter();

  // Ctrl+K only for large screens
  useEffect(() => {
    const down = (e) => {
      if (window.innerWidth >= 1024) {
        if ((e.metaKey || e.ctrlKey) && e.key === "k") {
          e.preventDefault();
          setDesktopOpen(!desktopOpen);
        }
      }
      if (e.key === "Escape") {
        reset();
      }
    };
    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, [desktopOpen, setDesktopOpen, reset]);

  // Show only parent sections if query is empty
  const showParents = query.trim() === "";

  // For scrolling, show at least 7 items, rest scrollable
  const maxVisible = 7;

  // Parent section rendering
  const parentResults = (
    <div className="mt-4 px-2 max-h-72 overflow-y-auto">
      {docs.length === 0 ? (
        <div className="p-2 text-sm text-gray-500">No sections found.</div>
      ) : (
        docs.slice(0, maxVisible).map((section) => (
          <button
            key={section.title}
            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-muted rounded text-sm"
            // Optionally, you can expand/collapse or show children on click
          >
            <FileText className="w-4 h-4 text-muted-foreground" />
            <span className="font-medium">{section.title}</span>
          </button>
        ))
      )}
      {/* Show rest if more than maxVisible */}
      {docs.length > maxVisible &&
        docs.slice(maxVisible).map((section) => (
          <button
            key={section.title}
            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-muted rounded text-sm"
          >
            <FileText className="w-4 h-4 text-muted-foreground" />
            <span className="font-medium">{section.title}</span>
          </button>
        ))}
    </div>
  );

  // Child (filtered) rendering
  const filteredDocs = flatDocs.filter(
    (doc) =>
      doc.title.toLowerCase().includes(query.toLowerCase()) ||
      doc.section.toLowerCase().includes(query.toLowerCase()),
  );

  const childResults = (
    <div className="mt-4 px-2 max-h-72 overflow-y-auto">
      {filteredDocs.length === 0 ? (
        <div className="p-2 text-sm text-gray-500">No results found.</div>
      ) : (
        filteredDocs.slice(0, maxVisible).map((doc) => (
          <button
            key={doc.route}
            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-muted rounded text-sm"
            onClick={() => {
              reset();
              router.push(doc.route);
            }}
          >
            <FileText className="w-4 h-4 text-muted-foreground" />
            <span className="font-medium">{doc.title}</span>
            <span className="ml-auto text-xs text-muted-foreground">
              {doc.section}
            </span>
          </button>
        ))
      )}
      {/* Show rest if more than maxVisible */}
      {filteredDocs.length > maxVisible &&
        filteredDocs.slice(maxVisible).map((doc) => (
          <button
            key={doc.route}
            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-muted rounded text-sm"
            onClick={() => {
              reset();
              router.push(doc.route);
            }}
          >
            <FileText className="w-4 h-4 text-muted-foreground" />
            <span className="font-medium">{doc.title}</span>
            <span className="ml-auto text-xs text-muted-foreground">
              {doc.section}
            </span>
          </button>
        ))}
    </div>
  );

  return (
    <>
      {/* Desktop trigger */}
      {!mobileTrigger && (
        <button
          onClick={() => setDesktopOpen(true)}
          className="flex items-center justify-between w-[300px] px-4 py-2 text-sm text-muted-foreground border rounded-md bg-background"
        >
          <span>Search documentation...</span>
          <Kbd>⌘K</Kbd>
        </button>
      )}

      {/* Desktop CommandDialog */}
      <div className="hidden lg:block">
        <CommandDialog open={desktopOpen} onOpenChange={setDesktopOpen}>
          {/* Custom header with tags and Esc only */}
          <div className="flex items-center justify-between px-4 pt-4 pb-2 border-b">
            <div className="flex gap-2 text-xs font-medium text-muted-foreground">
              <span className="rounded bg-muted px-2 py-1">Search our Documentation</span>
            </div>
          </div>

          {/* Search input */}
          <div className="relative px-4 pt-4">
            <Input
              placeholder="What are you searching for?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full text-sm placeholder:text-sm placeholder:text-gray-400 pr-16"
            />
          </div>

          {/* Results list: show parents or children */}
          <div className="mt-4 px-4 pb-4">
            {showParents ? parentResults : childResults}
          </div>
        </CommandDialog>
      </div>

      {/* Mobile Drawer */}
      <div className="lg:hidden">
        <Drawer open={mobileOpen} onOpenChange={setMobileOpen}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Search Docs</DrawerTitle>
            </DrawerHeader>
            <div className="px-4">
              <Input
                placeholder="What are you searching for?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full text-sm placeholder:text-sm placeholder:text-gray-400"
              />
              {showParents ? parentResults : childResults}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
