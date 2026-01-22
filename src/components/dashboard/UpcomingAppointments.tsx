import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, MoreVertical } from "lucide-react";
import { cn } from "@/lib/utils";

const calendarDays = [
  { day: 3, label: "Sat", active: false },
  { day: 4, label: "Sun", active: true },
  { day: 5, label: "Mon", active: false },
  { day: 6, label: "Tue", active: false },
  { day: 7, label: "Wed", active: false },
  { day: 8, label: "Thu", active: false },
  { day: 9, label: "Fri", active: false },
];

const appointments = [
  {
    id: 1,
    name: "Cody Fisher",
    time: "8:30AM",
    status: "offline",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=50&h=50&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Marvin McKinney",
    time: "8:45AM",
    status: "offline",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=50&h=50&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Bessie Cooper",
    time: "9:00AM",
    status: "online",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=50&h=50&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Jane Cooper",
    time: "9:15AM",
    status: "offline",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Theresa Webb",
    time: "9:30AM",
    status: "offline",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=50&h=50&fit=crop&crop=face",
  },
];

export function UpcomingAppointments() {
  return (
    <Card className="p-5 bg-card border-border">
      <h3 className="text-lg font-semibold text-foreground mb-4">Upcoming Appointments</h3>
      
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4">
        <button className="p-1 rounded-md hover:bg-muted transition-colors">
          <ChevronLeft className="w-4 h-4 text-muted-foreground" />
        </button>
        <span className="text-sm font-medium text-foreground">November</span>
        <button className="p-1 rounded-md hover:bg-muted transition-colors">
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-1 mb-6">
        {calendarDays.map((item) => (
          <button
            key={item.day}
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
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src={appointment.avatar} />
                <AvatarFallback>{appointment.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-foreground">{appointment.name}</p>
                <p className="text-xs text-muted-foreground">{appointment.time}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "px-2 py-0.5 text-xs font-medium rounded-full",
                  appointment.status === "online"
                    ? "bg-status-online/20 text-status-online"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {appointment.status === "online" ? "Online" : "Offline"}
              </span>
              <button className="p-1 rounded-md hover:bg-muted transition-colors">
                <MoreVertical className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
