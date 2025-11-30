import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  variant?: "default" | "primary" | "secondary";
}

export const StatsCard = ({ title, value, icon: Icon, trend, variant = "default" }: StatsCardProps) => {
  return (
    <Card className={cn(
      "transition-smooth hover:shadow-md",
      variant === "primary" && "border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10",
      variant === "secondary" && "border-secondary/20 bg-gradient-to-br from-secondary/5 to-secondary/10"
    )}>
      <CardContent className="p-3 sm:p-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className={cn(
            "rounded-lg p-2 flex-shrink-0",
            variant === "primary" && "bg-primary/10",
            variant === "secondary" && "bg-secondary/10",
            variant === "default" && "bg-muted"
          )}>
            <Icon className={cn(
              "h-4 w-4 sm:h-5 sm:w-5",
              variant === "primary" && "text-primary",
              variant === "secondary" && "text-secondary",
              variant === "default" && "text-foreground"
            )} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs text-muted-foreground truncate">{title}</p>
            <p className="text-sm sm:text-lg font-bold truncate">{value}</p>
            {trend && (
              <p className="text-[10px] text-muted-foreground truncate hidden sm:block">{trend}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
