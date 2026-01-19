import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowUpDown,
  LayoutDashboard,
  ListFilter,
  Plus,
  Settings2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import NotionTableDemo from "@/components/shared/datatable";


const MiniDash = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="relative mx-auto mt-15 h-[40vh]  w-[100%] rounded-xl flex flex-col gap-4  p-4">
        {/* topbar */}
        <div className="flex items-center justify-between">
          <Badge className={"bg-transparent text-white border border-white"}>
            <LayoutDashboard className="size-4" />
            Dashboard
          </Badge>
          <div className="flex items-center gap-2">
            {/* Filter Dropdown */}
            <DropdownMenu>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={"w-5 h-5 cursor-pointer "}
                    >
                      <ListFilter className="size-4" />
                    </Button>
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent>Filter</TooltipContent>
              </Tooltip>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuLabel>Filter Options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Status: Active</DropdownMenuItem>
                <DropdownMenuItem>Status: Archived</DropdownMenuItem>
                <DropdownMenuItem>Status: Draft</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={"w-5 h-5 cursor-pointer "}
                    >
                      <ArrowUpDown className="size-4" />
                    </Button>
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent>Sort</TooltipContent>
              </Tooltip>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuLabel>Sort By</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Date Created</DropdownMenuItem>
                <DropdownMenuItem>Last Updated</DropdownMenuItem>
                <DropdownMenuItem>Name A–Z</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Settings Dropdown */}
            <DropdownMenu>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={"w-5 h-5 cursor-pointer "}
                    >
                      <Settings2 className="size-4" />
                    </Button>
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent>Settings</TooltipContent>
              </Tooltip>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuLabel>Preferences</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Theme</DropdownMenuItem>
                <DropdownMenuItem>Notifications</DropdownMenuItem>
                <DropdownMenuItem>Language</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={"w-5 h-5 cursor-pointer "}
                >
                  <Plus className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className={"text-xs"}>New Page</TooltipContent>
            </Tooltip>
          </div>
        </div>
        <div className="flex gap-4">
          {/* workflow , tables , fields  */}
          <div className="flex flex-col gap-3">
            <h1>Orders List</h1>
            <NotionTableDemo/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniDash;
