import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FileText, Printer, MoreVertical } from "lucide-react";
import { cn } from "@/lib/utils";

const patients = [
  {
    id: 1,
    name: "Ethan",
    age: 25,
    date: "9 Nov 2025",
    time: "6:15PM",
    appointedFor: "Partial Paralysis",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Liam Carter",
    age: 45,
    date: "7 Nov 2025",
    time: "8:30PM",
    appointedFor: "Statin therapy",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Ava Mitchell",
    age: 20,
    date: "6 Nov 2025",
    time: "3:45PM",
    appointedFor: "Angioplasty",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Noah Patel",
    age: 30,
    date: "4 Nov 2025",
    time: "7:00PM",
    appointedFor: "Muscle weakness",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Sophia Reyes",
    age: 18,
    date: "4 Nov 2025",
    time: "6:45PM",
    appointedFor: "Decreased Brain",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
  },
];

const tabs = ["Daily", "Weekly", "Monthly", "Yearly"];

export function PatientsTable() {
  return (
    <Card className="p-5 bg-card border-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Patients</h3>
        <div className="flex gap-1 bg-muted p-1 rounded-lg">
          {tabs.map((tab, index) => (
            <Button
              key={tab}
              variant={index === 0 ? "default" : "ghost"}
              size="sm"
              className={cn(
                "text-sm",
                index === 0
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Name
              </th>
              <th className="text-left py-3 px-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Age
              </th>
              <th className="text-left py-3 px-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Date & Time
              </th>
              <th className="text-left py-3 px-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Appointed For
              </th>
              <th className="text-left py-3 px-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Report
              </th>
              <th className="text-left py-3 px-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id} className="border-b border-border last:border-0">
                <td className="py-4 px-2">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={patient.avatar} />
                      <AvatarFallback>{patient.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium text-foreground">{patient.name}</span>
                  </div>
                </td>
                <td className="py-4 px-2 text-sm text-muted-foreground">{patient.age} years</td>
                <td className="py-4 px-2 text-sm text-muted-foreground">
                  {patient.date} · {patient.time}
                </td>
                <td className="py-4 px-2">
                  <span className="px-2.5 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full">
                    {patient.appointedFor}
                  </span>
                </td>
                <td className="py-4 px-2">
                  <button className="p-1.5 rounded-md hover:bg-muted transition-colors">
                    <FileText className="w-4 h-4 text-muted-foreground" />
                  </button>
                </td>
                <td className="py-4 px-2">
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm" className="text-muted-foreground">
                      View
                    </Button>
                    <button className="p-1.5 rounded-md hover:bg-muted transition-colors">
                      <Printer className="w-4 h-4 text-muted-foreground" />
                    </button>
                    <button className="p-1.5 rounded-md hover:bg-muted transition-colors">
                      <MoreVertical className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
