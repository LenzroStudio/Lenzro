import { Badge } from '@/components/ui/badge';
import { Separator } from '@radix-ui/react-separator';
import { IconBell, IconCircleCheck, IconLoader, IconMail } from '@tabler/icons-react';
import { AppWindow, HandCoins, Users2 } from 'lucide-react';
import React from 'react'

const Workspace = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="relative mx-auto mt-20 h-full max-h-[240px] min-h-[160px] w-[85%] rounded-2xl border-t border-gray-300 bg-white p-4  dark:border-neutral-700 dark:bg-neutral-800">
        {/* Floating GPT 5 Badge */}
        <div
          className="shadow-aceternity absolute -top-10 -right-10 z-20 flex w-40 shrink-0 flex-col items-start rounded-lg bg-white text-xs dark:bg-neutral-900"
          style={{ opacity: 1 }}
        >
          {/* Badge Header */}
          <div className="flex w-full items-center justify-between p-2">
            <div className="flex items-center gap-2 font-medium">
              <img
                src="https://1j8rp7fkdq62hja2.public.blob.vercel-storage.com/Plugin%20icon%20-%202%20%281%29.png"
                alt=""
                className="w-5 rounded-full"
              />
              Lenzro AI
            </div>
            <p className="font-mono text-gray-500 text-xs">GPT 5</p>
          </div>
          <Separator />
          <div className="bg-divide h-px w-full"></div>
          {/* Connection Status */}
          <div className="m-2 rounded-sm border border-blue-500 bg-blue-50 px-2 py-0.5 text-blue-500 dark:bg-blue-50/10">
            Connected
          </div>
        </div>

        {/* Status Lights */}
        <div className="mb-4 flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>

        {/* Website Visitors */}
        <div className="mt-12 flex items-center gap-2">
          <AppWindow className="size-4" />
          <span className="text-charcoal-700 text-sm font-medium dark:text-neutral-200">
            Website
          </span>
          <span className="text-charcoal-700 rounded-lg border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-200">
            69,420 visitors
          </span>
        </div>

        <div className="bg-divide h-px w-full mt-2"></div>

        {/* Client Orders */}
        <div className="relative">
          <div
            className="mt-4 flex items-center justify-between gap-2"
            style={{
              clipPath: "inset(0px 0% 0px 0px)",
              filter: "blur(0px)",
            }}
          >
            <div className="flex items-center gap-2">
              <Users2 className="size-4" />
              <span className="text-charcoal-700 text-sm font-medium dark:text-neutral-200">
                Client orders
              </span>
            </div>
            <Badge className="bg-transparent text-white border-2 border-blue-500 flex items-center gap-1">
              <IconBell className="size-3" />
              Notification
            </Badge>
          </div>
        </div>

        {/* Payments */}
        <div className="relative">
          <div
            className="mt-4 flex items-center justify-between gap-2"
            style={{
              clipPath: "inset(0px 0% 0px 0px)",
              filter: "blur(0px)",
            }}
          >
            <div className="flex items-center gap-2">
              <HandCoins className="size-4" />
              <span className="text-charcoal-700 text-sm font-medium dark:text-neutral-200">
                Payments
              </span>
            </div>
            <Badge className="bg-transparent text-yellow-500 border-2 border-yellow-500 flex items-center gap-1 animate-pulse">
              <IconLoader className="size-3 animate-spin" />
              Pending
            </Badge>
          </div>
        </div>

        {/* Email */}
        <div className="relative">
          <div
            className="mt-4 flex items-center justify-between gap-2"
            style={{
              clipPath: "inset(0px 0% 0px 0px)",
              filter: "blur(0px)",
            }}
          >
            <div className="flex items-center gap-2">
              <IconMail className="size-4" />
              <span className="text-charcoal-700 text-sm font-medium dark:text-neutral-200">
                Email
              </span>
            </div>
            <Badge className="bg-transparent text-green-600 border-2 border-green-500 flex items-center gap-1">
              <IconCircleCheck className="size-3" />
              Received
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workspace