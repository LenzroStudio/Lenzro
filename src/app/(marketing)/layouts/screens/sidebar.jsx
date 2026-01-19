import { Button } from "@/components/ui/button";
import { IconInnerShadowTop } from "@tabler/icons-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowRightLeft, ChevronDown, ChevronsLeft, PanelRight, PenLine } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const SidebarHeader = () => {
  return (
    <div>
      <div className="bg-accent-foreground dark:bg-accent text-accent dark:text-foreground w-full flex p-2 rounded-md justify-between items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2">
              <p className="flex items-center gap-2">
                <Avatar className={"size-6 text-xs"}>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback className={'text-accent-foreground dark:text-foreground dark:bg-gray-900'}>CN</AvatarFallback>
                </Avatar>
                <span className="text-sm">Cal Tech...</span>
              </p>
              <Button variant="ghost" className={"p-0 w-0 h-7 rounded"}>
                <ChevronDown />
              </Button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-76" align="start">
            <DropdownMenuLabel className={"flex items-center justify-between"}>
              My Business <ArrowRightLeft className="size-4" />
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Billing
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Keyboard shortcuts
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Email</DropdownMenuItem>
                    <DropdownMenuItem>Message</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>More...</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem>
                New Team
                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>GitHub</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuItem disabled>API</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* add a new page and close sidebar */}
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Tooltip>
                <TooltipTrigger asChild>
                  <PenLine className="size-4" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Open menu</p>
                </TooltipContent>
              </Tooltip>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-50" align="start">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  New page
                  <DropdownMenuShortcut>Ctrl P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  New table
                  <DropdownMenuShortcut>ctrl T</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Ask AI
                  <DropdownMenuShortcut>⌘L</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Your widgets
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Tooltip>
            <TooltipTrigger asChild>
              <ChevronsLeft className="size-4" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Close sidebar</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

const NavMain = () => {
  return <div></div>;
};

const NavSecondary = () => {
  return <div></div>;
};

const NavUser = () => {
  return <div></div>;
};

const Sidebar = () => {
  return (
    <div className="p-2">
      <SidebarHeader />
    </div>
  );
};

export default Sidebar;
