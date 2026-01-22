import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Teen", value: 40, color: "hsl(var(--chart-teal))" },
  { name: "Older", value: 12, color: "hsl(var(--chart-teal-light))" },
  { name: "Adult", value: 10, color: "hsl(var(--chart-green))" },
  { name: "Child", value: 8, color: "hsl(var(--chart-orange))" },
];

const total = data.reduce((sum, item) => sum + item.value, 0);

export function PatientOverview() {
  return (
    <Card className="p-5 bg-card border-border">
      <h3 className="text-lg font-semibold text-foreground mb-4">Patient Overview</h3>
      <div className="relative">
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={80}
                paddingAngle={3}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-3xl font-bold text-foreground">{total}</span>
            <p className="text-xs text-muted-foreground">Total</p>
          </div>
        </div>
      </div>
      {/* Legend */}
      <div className="grid grid-cols-2 gap-3 mt-4">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-muted-foreground">{item.name}</span>
            <span className="text-sm font-medium text-foreground ml-auto">{item.value}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
