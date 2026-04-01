import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Users, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

type AgeFilter = "all" | "kids" | "adults";
type LevelFilter = "all" | "beginner" | "intermediate" | "advanced";

const classes = [
  { name: "Bharatanatyam", trainer: "Meera Nair", duration: "60 min", age: "kids" as const, level: "beginner" as const, fees: "₹3,000/mo", description: "Traditional South Indian classical dance emphasizing rhythm, expression, and storytelling." },
  { name: "Hip-Hop Fundamentals", trainer: "Arjun Das", duration: "60 min", age: "adults" as const, level: "beginner" as const, fees: "₹2,500/mo", description: "Learn the foundations of hip-hop — grooves, isolations, and freestyle basics." },
  { name: "Contemporary Flow", trainer: "Kavya Reddy", duration: "75 min", age: "adults" as const, level: "intermediate" as const, fees: "₹3,500/mo", description: "Fluid, expressive movement blending modern dance techniques with emotional storytelling." },
  { name: "Zumba Fitness", trainer: "Ravi Kumar", duration: "45 min", age: "adults" as const, level: "beginner" as const, fees: "₹2,000/mo", description: "High-energy dance fitness combining Latin rhythms with easy-to-follow moves." },
  { name: "Advanced Bharatanatyam", trainer: "Meera Nair", duration: "90 min", age: "adults" as const, level: "advanced" as const, fees: "₹4,500/mo", description: "Deep dive into complex compositions, abhinaya, and performance technique." },
  { name: "Kids Hip-Hop", trainer: "Arjun Das", duration: "45 min", age: "kids" as const, level: "beginner" as const, fees: "₹2,000/mo", description: "Fun, age-appropriate hip-hop choreography that builds confidence and coordination." },
  { name: "Bollywood Dance", trainer: "Kavya Reddy", duration: "60 min", age: "adults" as const, level: "beginner" as const, fees: "₹2,500/mo", description: "Energetic Bollywood choreography from the latest hits to classic songs." },
  { name: "Street Dance Crew", trainer: "Arjun Das", duration: "90 min", age: "adults" as const, level: "advanced" as const, fees: "₹4,000/mo", description: "Competitive crew training — battles, formations, and performance-level choreography." },
];

const Classes = () => {
  const [ageFilter, setAgeFilter] = useState<AgeFilter>("all");
  const [levelFilter, setLevelFilter] = useState<LevelFilter>("all");

  const filtered = classes.filter((c) => {
    if (ageFilter !== "all" && c.age !== ageFilter) return false;
    if (levelFilter !== "all" && c.level !== levelFilter) return false;
    return true;
  });

  const FilterButton = ({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-sm text-sm font-medium transition-all ${
        active ? "bg-gradient-gold text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-background pt-24">
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="Our Classes" title="Dance Programs" description="From beginners to pros, kids to adults — find the perfect class for your journey." />

          {/* Filters */}
          <div className="flex flex-wrap gap-8 mb-12 justify-center">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 text-center">Age Group</p>
              <div className="flex gap-2">
                <FilterButton active={ageFilter === "all"} onClick={() => setAgeFilter("all")}>All</FilterButton>
                <FilterButton active={ageFilter === "kids"} onClick={() => setAgeFilter("kids")}>Kids</FilterButton>
                <FilterButton active={ageFilter === "adults"} onClick={() => setAgeFilter("adults")}>Adults</FilterButton>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 text-center">Skill Level</p>
              <div className="flex gap-2">
                <FilterButton active={levelFilter === "all"} onClick={() => setLevelFilter("all")}>All</FilterButton>
                <FilterButton active={levelFilter === "beginner"} onClick={() => setLevelFilter("beginner")}>Beginner</FilterButton>
                <FilterButton active={levelFilter === "intermediate"} onClick={() => setLevelFilter("intermediate")}>Intermediate</FilterButton>
                <FilterButton active={levelFilter === "advanced"} onClick={() => setLevelFilter("advanced")}>Advanced</FilterButton>
              </div>
            </div>
          </div>

          {/* Class Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium uppercase tracking-wider bg-primary/10 text-primary px-2 py-1 rounded-sm">
                    {c.level}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wider bg-secondary text-muted-foreground px-2 py-1 rounded-sm">
                    {c.age === "kids" ? "Kids" : "Adults"}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">{c.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{c.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Users size={14} /> {c.trainer}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {c.duration}</span>
                </div>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <span className="text-primary font-bold">{c.fees}</span>
                  <Link to="/contact" className="inline-flex items-center gap-1 text-foreground text-sm font-medium hover:text-primary transition-colors">
                    Enroll Now <ChevronRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-16">No classes match your filters. Try adjusting them.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Classes;
