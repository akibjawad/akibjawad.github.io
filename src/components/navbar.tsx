"use client";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(true);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-background border border-border rounded-lg shadow-lg hover:bg-accent transition-colors"
      >
        {isMobileNavOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {/* Mobile Sidebar */}
      <div className={cn(
        "md:hidden fixed left-0 top-0 z-40 h-full w-64 bg-background border-r border-border shadow-lg transition-transform duration-300 ease-in-out overflow-y-auto",
        isMobileNavOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full py-6 px-4">
          <div className="mb-6">
            <h2 className="text-xl font-bold">Navigation</h2>
          </div>
          <nav className="flex-1 space-y-2">
            {DATA.navbar.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileNavOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <item.icon className="size-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>
          <nav className="border-t border-border pt-4 space-y-2 mt-4">
            {Object.entries(DATA.contact.social)
              .filter(([_, social]) => social.navbar)
              .map(([name, social]) => (
                <Link
                  key={name}
                  href={social.url}
                  onClick={() => setIsMobileNavOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <social.icon className="size-5" />
                  <span className="font-medium">{name}</span>
                </Link>
              ))}
            <div className="px-4 py-3">
              <ModeToggle />
            </div>
          </nav>
        </div>
      </div>

      {/* Desktop Horizontal Navbar */}
      <div className="hidden md:block pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
        <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
        <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-6 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] gap-6">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.href}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className="h-20 w-40 flex flex-col items-center justify-center gap-2 px-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <item.icon className="size-6" />
                    <span className="text-xs font-medium text-center leading-relaxed whitespace-normal break-words">{item.label}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          {Object.entries(DATA.contact.social)
            .filter(([_, social]) => social.navbar)
            .map(([name, social]) => (
              <DockIcon key={name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={social.url}
                      className="h-20 w-16 flex items-center justify-center rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <social.icon className="size-6" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{name}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
          <Separator orientation="vertical" className="h-full py-2" />
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <ModeToggle />
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </div>
    </>
  );
}