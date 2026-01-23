import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import {
  BotMessageSquare,
  ChartNoAxesCombined,
  Component,
  Earth,
  FilePlusCorner,
  HandCoins,
  LayoutDashboard,
  Mails,
  Sparkles,
  Users,
} from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      title: "The Home Board",
      href: "/app/dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
      description:
        "Your central mission control. A high-level overview of your entire workspace, providing seamless navigation and spatial organization for all your business modules.",
    },
    {
      title: "Digital Storefront",
      href: "/app/website",
      icon: <Earth className="w-5 h-5" />,
      description:
        "Launch a professional presence instantly. We provide the domain and the engine to sell products, update inventory, and connect with global clients directly from your board.",
    },
    {
      title: "Brand Identity",
      href: "/app/brand",
      icon: <Sparkles className="w-5 h-5" />,
      description:
        "A dedicated space for your visual DNA. Manage logos, palettes, and typography. Access a curated market of templates to keep your business aesthetics elite.",
    },
    {
      title: "Client CRM",
      href: "/app/clients",
      icon: <Users className="w-5 h-5" />,
      description:
        "Master your relationships. Track leads, visualize customer journeys, schedule meetings, and analyze client feedback to refine your user experience.",
    },
    {
      title: "Revenue Engine",
      href: "/app/payments",
      icon: <HandCoins className="w-5 h-5" />,
      description:
        "Beyond just payments. Access sticky widgets for POS, revenue forecasting, expense tracking, and automated invoicing for both one-time and subscription models.",
    },
    {
      title: "Secure Vault",
      href: "/app/files",
      icon: <FilePlusCorner className="w-5 h-5" />,
      description:
        "The definitive reference point for your assets. Store contracts, design source files, and business logic in a secure, encrypted environment accessible only to you.",
    },
    {
      title: "Smart Comms",
      href: "/app/email",
      icon: <Mails className="w-5 h-5" />,
      description:
        "Professional mailing on your own domain. Integrated notifications keep you updated on order tracking and payment statuses without ever leaving the Blackboard.",
    },
    {
      title: "Lenzro AI Agent",
      href: "/app/agent",
      icon: <BotMessageSquare className="w-5 h-5" />,
      description:
        "The orchestrator of your business. Lenzro automates page updates, prioritizes your daily tasks, replies to clients, and generates deep-dive reports so you never lose momentum.",
    },
  ];
  return (
    <section className="w-full px-2 sm:px-4 md:px-8 py-10 flex flex-col items-center">
      <div className="w-full max-w-7xl flex flex-col gap-10">
        {/* header */}
        <header className="flex flex-col items-center text-center w-full gap-2">
          <AnimatedGradientText
            speed={2}
            colorFrom="#4ade80"
            colorTo="#06b6d4"
            className="text-2xl md:text-4xl font-semibold tracking-tight"
          >
            What&apos;s in Lenzro?
          </AnimatedGradientText>
          <span className="text-sm md:text-lg text-zinc-500 dark:text-zinc-400">
            Everything you need to launch your business and products on the web.
          </span>
        </header>
        {/* content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {/* Customizable Pages */}
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 flex flex-col justify-between items-start gap-2 transition-colors">
            <div></div>
            <div className="flex flex-col items-start gap-2 transition-colors">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900  mx-auto">
                  <LayoutDashboard className="w-6 h-6 text-zinc-700 dark:text-zinc-200" />
                </div>
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 text-center">
                  Customizable Pages
                </h2>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Total spatial freedom. Arrange, resize, and filter your business
                data on an infinite canvas. Keep your modules organized exactly
                how you work, with components that snap into place.
              </p>
            </div>
          </div>
          {/* Widgets and Elements */}
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 flex flex-col gap-4 transition-colors">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 mb-2 mx-auto">
              <Component className="w-6 h-6 text-zinc-700 dark:text-zinc-200" />
            </div>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 text-center">
              Widgets and Elements
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
              Powerful, reusable tools for your board. Fully editable and
              resizable widgets designed for elite functionality. Access our
              market for specialized templates built to scale your workflow.
            </p>
          </div>
          {/* Analytics and Direction */}
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 flex flex-col gap-4 transition-colors">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 mb-2 mx-auto">
              <ChartNoAxesCombined className="w-6 h-6 text-zinc-700 dark:text-zinc-200" />
            </div>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 text-center">
              Analytics and Direction
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
              Real-time intelligence and AI-driven growth. Monitor visitors,
              conversions, and revenue with live insights. Lenzro AI analyzes
              your metrics to provide clear direction for your next move.
            </p>
          </div>
          {/* Dynamic Solutions */}
          {solutions.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 flex flex-col items-start gap-2 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900  mx-auto">
                  {item.icon}
                </div>
                <h2 className="text-lg text-zinc-900 dark:text-zinc-100">
                  {item.title}
                </h2>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
