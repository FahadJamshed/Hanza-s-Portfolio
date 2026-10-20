"use client";

import { ChevronDown } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface TabItem {
  value: string;
  label: string;
  content: React.ReactNode;
}

interface ResponsiveTabsProps {
  items: TabItem[];
  defaultValue?: string;
  className?: string;
}

export function ResponsiveTabs({
  items,
  defaultValue,
  className,
}: ResponsiveTabsProps) {
  const [activeTab, setActiveTab] = React.useState(
    defaultValue || items[0]?.value
  );
  const activeItem = items.find((item) => item.value === activeTab);

  return (
    <div className={cn("w-full", className)}>
      {/* Mobile: Dropdown */}
      <div className="md:hidden mb-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              {activeItem?.label || "Select option"}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full min-w-[200px]">
            {items.map((item) => (
              <DropdownMenuItem
                key={item.value}
                onClick={() => setActiveTab(item.value)}
                className={cn(
                  "cursor-pointer",
                  activeTab === item.value && "bg-accent"
                )}
              >
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Desktop: Tabs */}
      <div className="hidden md:block">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList
            className="experience-tabs grid w-full h-auto p-1.5 rounded-xl bg-muted/60 border border-border/60"
            style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}
          >
            {items.map((item) => (
              <TabsTrigger key={item.value} value={item.value} className="experience-tab-trigger rounded-lg py-2.5 text-sm font-medium text-muted-foreground data-[state=active]:text-foreground data-[state=active]:shadow-sm">
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {items.map((item) => (
            <TabsContent key={item.value} value={item.value} className="mt-8 focus-visible:outline-none">
              {item.content}
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Mobile: Content */}
      <div className="md:hidden">{activeItem?.content}</div>
    </div>
  );
}
