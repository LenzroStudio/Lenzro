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
  Square,
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
    <div className="mt-10 px-4">
      {/* Main content */}
      <div className="w-full max-w-7xl flex flex-col gap-10">
        {/* header */}
        <h1
          className="flex flex-col items-center md:flex-row md:items-end text-center w-full justify-center
            gap-2"
        >
          <AnimatedGradientText
            speed={2}
            colorFrom="#4ade80"
            colorTo="#06b6d4"
            className="text-2xl md:text-4xl font-semibold tracking-tight"
          >
            What&apos;s in Lenzro?
          </AnimatedGradientText>
          <span className="text-sm md:text-lg">
            Everything you need to launch your Business and products on the web.
          </span>
        </h1>
        {/* content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 -4 sm:p-6 lg:p-8 ">
          <Card className="bg-black text-white gap-0  shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="h-[30vh]"></div>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2 tracking-wider">
                <LayoutDashboard className="w-5 h-5" />
                <h1>Customizable Pages</h1>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs leading-relaxed text-zinc-500 font-light">
                Total spatial freedom. Arrange, resize, and filter your business
                data on an infinite canvas. Keep your modules organized exactly
                how you work, with components that snap into place
              </p>
            </CardContent>
          </Card>
          <Card className="bg-black text-white gap-0  shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="h-[30vh]"></div>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2 tracking-wider">
                <Component className="w-5 h-5" />
                <h1>Widgets and Elements</h1>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs leading-relaxed text-zinc-500 font-light">
                Powerful, reusable tools for your board. Fully editable and
                resizable widgets designed for elite functionality. Access our
                market for specialized templates built to scale your workflow.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-black text-white gap-0  shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="h-[30vh]"></div>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2 tracking-wider">
                <ChartNoAxesCombined className="w-5 h-5" />
                <h1>Analytics and Direction</h1>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs leading-relaxed text-zinc-500 font-light">
                Real-time intelligence and AI-driven growth. Monitor visitors,
                conversions, and revenue with live insights. Lenzro AI analyzes
                your metrics to provide clear direction for your next move.
              </p>
            </CardContent>
          </Card>
          {solutions.map((item, index) => {
            return (
              <Card
                key={index}
                className="bg-black text-white gap-0 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 tracking-wider">
                    <div className="border p-2 rounded-full">{item.icon}</div>
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs leading-relaxed text-zinc-500 font-light">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
