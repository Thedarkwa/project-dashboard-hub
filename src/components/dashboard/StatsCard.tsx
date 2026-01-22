import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  change: number;
  icon: LucideIcon;
  iconBgClass?: string;
}

export function StatsCard({ title, value, change, icon: Icon, iconBgClass = "bg-accent/20" }: StatsCardProps) {
  const isPositive = change >= 0;

  return (
    <Card className="p-5 bg-card border-border">
      <div className="flex items-start justify-between">
        <div className={cn("p-2.5 rounded-lg", iconBgClass)}>
          <Icon className="w-5 h-5 text-primary" />
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm text-muted-foreground">{title}</p>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-2xl font-bold text-foreground">{value}</span>
          <span
            className={cn(
              "text-xs font-medium",
              isPositive ? "text-stat-increase" : "text-stat-decrease"
            )}
          >
            {isPositive ? "↗" : "↘"} {Math.abs(change)}%
          </span>
        </div>
      </div>
    </Card>
  );
}
