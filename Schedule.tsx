import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

type DayOfWeek = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

interface ScheduleSlot {
  time: string;
  class: string;
  trainer: string;
  style: string;
  status: "available" | "full";
}

const schedule: Record<DayOfWeek, ScheduleSlot[]> = {
  Mon: [
    { time: "7:00 AM", class: "Zumba Fitness", trainer: "Ravi Kumar", style: "Zumba", status: "available" },
    { time: "10:00 AM", class: "Kids Bharatanatyam", trainer: "Meera Nair", style: "Classical", status: "available" },
    { time: "5:00 PM", class: "Hip-Hop Fundamentals", trainer: "Arjun Das", style: "Hip-Hop", status: "full" },
    { time: "7:00 PM", class: "Contemporary Flow", trainer: "Kavya Reddy", style: "Contemporary", status: "available" },
  ],
  Tue: [
    { time: "7:00 AM", class: "Zumba Fitness", trainer: "Ravi Kumar", style: "Zumba", status: "available" },
    { time: "4:00 PM", class: "Kids Hip-Hop", trainer: "Arjun Das", style: "Hip-Hop", status: "available" },
    { time: "6:00 PM", class: "Bollywood Dance", trainer: "Kavya Reddy", style: "Bollywood", status: "available" },
    { time: "8:00 PM", class: "Advanced Bharatanatyam", trainer: "Meera Nair", style: "Classical", status: "full" },
  ],
  Wed: [
    { time: "7:00 AM", class: "Zumba Fitness", trainer: "Ravi Kumar", style: "Zumba", status: "available" },
    { time: "10:00 AM", class: "Kids Bharatanatyam", trainer: "Meera Nair", style: "Classical", status: "available" },
    { time: "5:00 PM", class: "Hip-Hop Fundamentals", trainer: "Arjun Das", style: "Hip-Hop", status: "available" },
    { time: "7:00 PM", class: "Contemporary Flow", trainer: "Kavya Reddy", style: "Contemporary", status: "available" },
  ],
  Thu: [
    { time: "7:00 AM", class: "Zumba Fitness", trainer: "Ravi Kumar", style: "Zumba", status: "available" },
    { time: "4:00 PM", class: "Kids Hip-Hop", trainer: "Arjun Das", style: "Hip-Hop", status: "full" },
    { time: "6:00 PM", class: "Bollywood Dance", trainer: "Kavya Reddy", style: "Bollywood", status: "available" },
    { time: "8:00 PM", class: "Advanced Bharatanatyam", trainer: "Meera Nair", style: "Classical", status: "available" },
  ],
  Fri: [
    { time: "7:00 AM", class: "Zumba Fitness", trainer: "Ravi Kumar", style: "Zumba", status: "available" },
    { time: "10:00 AM", class: "Kids Bharatanatyam", trainer: "Meera Nair", style: "Classical", status: "available" },
    { time: "5:00 PM", class: "Street Dance Crew", trainer: "Arjun Das", style: "Hip-Hop", status: "available" },
    { time: "7:00 PM", class: "Contemporary Flow", trainer: "Kavya Reddy", style: "Contemporary", status: "full" },
  ],
  Sat: [
    { time: "8:00 AM", class: "Zumba Fitness", trainer: "Ravi Kumar", style: "Zumba", status: "available" },
    { time: "10:00 AM", class: "Kids Hip-Hop", trainer: "Arjun Das", style: "Hip-Hop", status: "available" },
    { time: "11:00 AM", class: "Kids Bharatanatyam", trainer: "Meera Nair", style: "Classical", status: "available" },
    { time: "4:00 PM", class: "Street Dance Crew", trainer: "Arjun Das", style: "Hip-Hop", status: "available" },
    { time: "6:00 PM", class: "Bollywood Dance", trainer: "Kavya Reddy", style: "Bollywood", status: "available" },
  ],
  Sun: [
    { time: "9:00 AM", class: "Zumba Fitness", trainer: "Ravi Kumar", style: "Zumba", status: "available" },
    { time: "11:00 AM", class: "Contemporary Flow", trainer: "Kavya Reddy", style: "Contemporary", status: "available" },
  ],
};

const days: DayOfWeek[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState<DayOfWeek>("Mon");
  const [styleFilter, setStyleFilter] = useState<string>("all");

  const allStyles = Array.from(new Set(Object.values(schedule).flat().map((s) => s.style)));

  const filtered = schedule[selectedDay].filter(
    (s) => styleFilter === "all" || s.style === styleFilter
  );

  return (
    <div className="min-h-screen bg-background pt-24">
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="Weekly Schedule" title="Plan Your Week" description="Find the perfect time slot. Tap a day to see available classes." />

          {/* Day Selector */}
          <div className="flex gap-2 justify-center flex-wrap mb-8">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-5 py-3 rounded-sm text-sm font-semibold transition-all ${
                  selectedDay === day
                    ? "bg-gradient-gold text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Style Filter */}
          <div className="flex gap-2 justify-center flex-wrap mb-12">
            <button
              onClick={() => setStyleFilter("all")}
              className={`px-3 py-1.5 rounded-sm text-xs font-medium transition-all ${
                styleFilter === "all" ? "bg-primary/20 text-primary" : "bg-secondary text-muted-foreground"
              }`}
            >
              All Styles
            </button>
            {allStyles.map((style) => (
              <button
                key={style}
                onClick={() => setStyleFilter(style)}
                className={`px-3 py-1.5 rounded-sm text-xs font-medium transition-all ${
                  styleFilter === style ? "bg-primary/20 text-primary" : "bg-secondary text-muted-foreground"
                }`}
              >
                {style}
              </button>
            ))}
          </div>

          {/* Schedule Grid */}
          <div className="max-w-3xl mx-auto space-y-4">
            {filtered.map((slot, i) => (
              <motion.div
                key={`${slot.time}-${slot.class}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`flex items-center justify-between bg-card border rounded-lg p-5 ${
                  slot.status === "full" ? "border-border opacity-60" : "border-border hover:border-primary/30"
                } transition-colors`}
              >
                <div className="flex items-center gap-6">
                  <span className="text-primary font-mono text-sm font-semibold w-20">{slot.time}</span>
                  <div>
                    <h3 className="text-foreground font-semibold text-sm">{slot.class}</h3>
                    <p className="text-muted-foreground text-xs">{slot.trainer}</p>
                  </div>
                </div>
                <span
                  className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-sm ${
                    slot.status === "available"
                      ? "bg-primary/10 text-primary"
                      : "bg-destructive/10 text-destructive"
                  }`}
                >
                  {slot.status === "available" ? "Open" : "Full"}
                </span>
              </motion.div>
            ))}
            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-12">No classes match your filter for {selectedDay}.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
