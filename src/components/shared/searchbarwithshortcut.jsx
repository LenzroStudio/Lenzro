"use client";

import { useEffect } from "react";
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


const docs = [
  { title: "Introduction", route: "/docs/introduction" },
  { title: "Getting Started", route: "/docs/getting-started" },
  { title: "App Router", route: "/docs/app-router" },
  { title: "Architecture", route: "/docs/architecture" },
  { title: "Pages Router", route: "/docs/pages-router" },
  { title: "API Reference", route: "/docs/api-reference" },
  { title: "Accessibility", route: "/docs/accessibility" },
];

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

  const filteredDocs = docs.filter((doc) =>
    doc.title.toLowerCase().includes(query.toLowerCase()),
  );

  const results = (
    <div className="mt-4 px-2">
      {filteredDocs.length === 0 ? (
        <div className="p-2 text-sm text-gray-500">No results found.</div>
      ) : (
        filteredDocs.map((doc) => (
          <button
            key={doc.route}
            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-muted rounded text-sm"
            onClick={() => {
              reset();
              router.push(doc.route);
            }}
          >
            <FileText className="w-4 h-4 text-muted-foreground" />
            {doc.title}
          </button>
        ))
      )}
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
              <span className="rounded bg-muted px-2 py-1">App</span>
              <span className="rounded bg-muted px-2 py-1">Pages</span>
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

          {/* Results list */}
          <div className="mt-4 px-4 pb-4">
            {filteredDocs.length === 0 ? (
              <div className="p-2 text-sm text-gray-500">No results found.</div>
            ) : (
              filteredDocs.map((doc) => (
                <button
                  key={doc.route}
                  className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-muted rounded text-sm"
                  onClick={() => {
                    setDesktopOpen(false);
                    router.push(doc.route);
                  }}
                >
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  {doc.title}
                </button>
              ))
            )}
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
              {results}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
