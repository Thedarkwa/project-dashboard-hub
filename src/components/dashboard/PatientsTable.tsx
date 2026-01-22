import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FileText, Printer, MoreVertical, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Patient } from "@/hooks/usePatients";

interface PatientsTableProps {
  patients: Patient[];
  isLoading?: boolean;
}

const tabs = ["Daily", "Weekly", "Monthly", "Yearly"];

export function PatientsTable({ patients, isLoading }: PatientsTableProps) {
  if (isLoading) {
    return (
      <Card className="p-5 bg-card border-border flex items-center justify-center min-h-[300px]">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </Card>
    );
  }

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
      
      {patients.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <p>No patients yet. Add your first patient to get started.</p>
        </div>
      ) : (
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
                  Email
                </th>
                <th className="text-left py-3 px-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Phone
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
              {patients.slice(0, 7).map((patient) => (
                <tr key={patient.id} className="border-b border-border last:border-0">
                  <td className="py-4 px-2">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={patient.avatar_url || undefined} />
                        <AvatarFallback>{patient.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium text-foreground">{patient.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-2 text-sm text-muted-foreground">{patient.age ? `${patient.age} years` : '-'}</td>
                  <td className="py-4 px-2 text-sm text-muted-foreground">{patient.email || '-'}</td>
                  <td className="py-4 px-2 text-sm text-muted-foreground">{patient.phone || '-'}</td>
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
      )}
    </Card>
  );
}
