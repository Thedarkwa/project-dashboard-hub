import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Patient } from "@/hooks/usePatients";

interface PatientOverviewProps {
  patients: Patient[];
}

export function PatientOverview({ patients }: PatientOverviewProps) {
  // Group patients by age category
  const ageCategories = {
    Child: patients.filter(p => p.age && p.age < 13).length,
    Teen: patients.filter(p => p.age && p.age >= 13 && p.age < 20).length,
    Adult: patients.filter(p => p.age && p.age >= 20 && p.age < 60).length,
    Older: patients.filter(p => p.age && p.age >= 60).length,
  };

  const data = [
    { name: "Teen", value: ageCategories.Teen || 1, color: "hsl(var(--chart-teal))" },
    { name: "Older", value: ageCategories.Older || 1, color: "hsl(var(--chart-teal-light))" },
    { name: "Adult", value: ageCategories.Adult || 1, color: "hsl(var(--chart-green))" },
    { name: "Child", value: ageCategories.Child || 1, color: "hsl(var(--chart-orange))" },
  ];

  const total = patients.length || 4;

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
