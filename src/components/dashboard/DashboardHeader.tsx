import { Search, Bell, ChevronDown, Calendar } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-background">
      {/* Welcome Section */}
      <div>
        <p className="text-sm text-muted-foreground">Welcome back</p>
        <h1 className="text-2xl font-semibold text-foreground">
          Dr. Andrew <span className="ml-1">👋</span>
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search"
            className="pl-10 w-64 bg-card border-border"
          />
        </div>

        {/* Month Selector */}
        <Button variant="outline" className="gap-2">
          <Calendar className="w-4 h-4" />
          Month
          <ChevronDown className="w-4 h-4" />
        </Button>

        {/* Notifications */}
        <button className="relative p-2 rounded-full hover:bg-muted transition-colors">
          <Bell className="w-5 h-5 text-foreground" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
        </button>

        {/* Profile */}
        <Avatar className="w-10 h-10 border-2 border-accent">
          <AvatarImage src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face" />
          <AvatarFallback>DA</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
