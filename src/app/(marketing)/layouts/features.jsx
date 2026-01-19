"use client";
import React from "react";
import { Bot, Cog, PencilLine,} from "lucide-react";
import MiniDash from "./minidash";
import Workspace  from "./workspace";
import { DotBackgroundDemo } from "@/components/shared/dottedbg";

const Features = () => {
  return (
    <div className="h-[180vh] flex items-center justify-between">
      <div className="w-15  h-full"></div>

      <div className="flex flex-col grid-cols-2  h-full w-screen">
        {/* Top Section */}
        <div className="w-full h-1/5 flex flex-col  text-center gap-4 items-center justify-center">
          <p className="gradient-text text-sm font-normal">Features</p>
          <h1 className="text-4xl">A modular Business Platform</h1>
          <p>
            Build, customize, and run any type of business from one intelligent
            workspace <br />
            powered by AI and designed to adapt to how you work.
          </p>
        </div>

        {/* features one and two */}
        <div className=" h-2/4 grid grid-cols-2">
          {/* left */}

          <div className=" relative flex h-full flex-col">
            {/* Header Section */}
            <div className="flex flex-col gap-2 p-8">
              {/* Title with Icon */}
              <div className="flex items-center gap-2">
                <div className="rounded-md flex items-center justify-center p-2 ">
                  <Cog className="size-4" />
                </div>
                <h3 className="text-xl">Unified Business Workspace</h3>
              </div>
              {/* Description */}
              <p>
                Run your website, clients, files, payments, emails, and brand
                from a single connected workspace.
              </p>
            </div>

            {/* Bottom Section with Shadow */}
            <Workspace />
          </div>
          {/* right */}
          <div className=" p-8!">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="rounded-md flex items-center justify-center p-2!">
                  <PencilLine className="size-4" />
                </div>
                <h3 className="text-xl">Customizable Data & Pages</h3>
              </div>
              <p>
                Create tables, pages, and dashboards that match how your company
                works. <br /> Define your own fields, relationships, and
                workflows
              </p>
            </div>
            {/* minidash */}
            <MiniDash />
          </div>
        </div>

        {/* bottom */}
        <div className="h-2/4  w-full">
        <DotBackgroundDemo/>
        </div>
      </div>

      <div className="w-15  h-full"></div>
    </div>
  );
};

export default Features;
