import { Card } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { day: "Sat", clinic: 15, online: 20 },
  { day: "Sun", clinic: 25, online: 30 },
  { day: "Mon", clinic: 35, online: 45 },
  { day: "Tue", clinic: 12, online: 40 },
  { day: "Wed", clinic: 28, online: 35 },
  { day: "Thu", clinic: 22, online: 28 },
  { day: "Fri", clinic: 30, online: 38 },
];

export function AppointmentBarChart() {
  return (
    <Card className="p-5 bg-card border-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Daily Appointment Stats</h3>
        <button className="p-1.5 rounded-md hover:bg-muted transition-colors">
          <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Legend
              iconType="circle"
              wrapperStyle={{ paddingTop: "20px" }}
            />
            <Bar dataKey="clinic" name="Clinic" fill="hsl(var(--chart-teal))" radius={[4, 4, 0, 0]} />
            <Bar dataKey="online" name="Online" fill="hsl(var(--chart-teal-light))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
