import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, MoreVertical, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Appointment } from "@/hooks/useAppointments";
import { format, isSameDay, addDays, startOfWeek } from "date-fns";
import { useState } from "react";

interface UpcomingAppointmentsProps {
  appointments: Appointment[];
  isLoading?: boolean;
}

export function UpcomingAppointments({ appointments, isLoading }: UpcomingAppointmentsProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const weekStart = startOfWeek(selectedDate, { weekStartsOn: 6 }); // Start from Saturday
  
  const calendarDays = Array.from({ length: 7 }, (_, i) => {
    const date = addDays(weekStart, i);
    return {
      date,
      day: format(date, 'd'),
      label: format(date, 'EEE'),
      active: isSameDay(date, selectedDate),
    };
  });

  const filteredAppointments = appointments.filter(apt => 
    isSameDay(new Date(apt.appointment_date), selectedDate)
  );

  if (isLoading) {
    return (
      <Card className="p-5 bg-card border-border flex items-center justify-center min-h-[300px]">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </Card>
    );
  }

  return (
    <Card className="p-5 bg-card border-border">
      <h3 className="text-lg font-semibold text-foreground mb-4">Upcoming Appointments</h3>
      
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4">
        <button 
          onClick={() => setSelectedDate(prev => addDays(prev, -7))}
          className="p-1 rounded-md hover:bg-muted transition-colors"
        >
          <ChevronLeft className="w-4 h-4 text-muted-foreground" />
        </button>
        <span className="text-sm font-medium text-foreground">{format(selectedDate, 'MMMM')}</span>
        <button 
          onClick={() => setSelectedDate(prev => addDays(prev, 7))}
          className="p-1 rounded-md hover:bg-muted transition-colors"
        >
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-1 mb-6">
        {calendarDays.map((item) => (
          <button
            key={item.day}
            onClick={() => setSelectedDate(item.date)}
            className={cn(
              "flex flex-col items-center py-2 rounded-lg transition-colors",
              item.active
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted text-muted-foreground"
            )}
          >
            <span className="text-xs">{item.day}</span>
            <span className="text-xs mt-0.5">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Appointments List */}
      <div className="space-y-3">
        {filteredAppointments.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-4">
            No appointments for this day
          </p>
        ) : (
          filteredAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={appointment.patients?.avatar_url || undefined} />
                  <AvatarFallback>{appointment.patients?.name?.[0] || '?'}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-foreground">{appointment.patients?.name || 'Unknown'}</p>
                  <p className="text-xs text-muted-foreground">{format(new Date(appointment.appointment_date), 'h:mm a')}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "px-2 py-0.5 text-xs font-medium rounded-full",
                    appointment.status === "completed"
                      ? "bg-status-online/20 text-status-online"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {appointment.status}
                </span>
                <button className="p-1 rounded-md hover:bg-muted transition-colors">
                  <MoreVertical className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </Card>
  );
}
