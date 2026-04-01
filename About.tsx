import { motion } from "framer-motion";
import { Award, Target, Eye } from "lucide-react";
import aboutImage from "@/assets/about-studio.jpg";
import SectionHeading from "@/components/SectionHeading";

const instructors = [
  { name: "Meera Nair", style: "Bharatanatyam", exp: "15 years", desc: "Award-winning classical dancer and Kalakshetra alumna." },
  { name: "Arjun Das", style: "Hip-Hop & Street", exp: "10 years", desc: "Choreographer for major music videos and stage shows." },
  { name: "Kavya Reddy", style: "Contemporary", exp: "12 years", desc: "Trained at the London Contemporary Dance School." },
  { name: "Ravi Kumar", style: "Zumba & Fitness", exp: "8 years", desc: "Licensed Zumba instructor with a passion for wellness." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Hero */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">Our Story</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight mb-6">
                Born from a Love of <span className="text-gradient-gold italic">Movement</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 2012, Élève Dance Studio began with a simple belief: dance is for everyone. What started as a small studio in Anna Nagar has grown into Chennai's most vibrant dance community.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our name, "Élève" — meaning "student" in French — reflects our core philosophy. We are all learners, always growing, always evolving. Whether you're taking your first step or perfecting your thousandth pirouette, you belong here.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <img src={aboutImage} alt="Élève dance studio interior" className="rounded-lg w-full" loading="lazy" width={1280} height={720} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Target, title: "Our Mission", text: "To make dance accessible, joyful, and transformative for every individual — regardless of age, background, or experience level." },
              { icon: Eye, title: "Our Vision", text: "To be South India's most inspiring dance community, where artistry and well-being thrive together." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-background p-10 rounded-lg border border-border"
              >
                <item.icon size={28} className="text-primary mb-4" />
                <h3 className="text-2xl font-display font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <SectionHeading subtitle="Recognition" title="Awards & Achievements" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              "Best Dance Studio — Chennai Arts Awards 2023",
              "Featured in The Hindu — 'Studios Shaping Tamil Nadu's Dance Scene'",
              "National Youth Dance Competition — 3 Gold Medals",
            ].map((achievement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <Award size={28} className="text-primary mb-3" />
                <p className="text-foreground text-sm font-medium text-center">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="Meet the Team" title="Our Instructors" description="Passionate professionals dedicated to bringing out the best in every student." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {instructors.map((inst, i) => (
              <motion.div
                key={inst.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background rounded-lg border border-border p-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-display font-bold text-xl mb-4">
                  {inst.name.charAt(0)}
                </div>
                <h3 className="text-lg font-display font-bold text-foreground">{inst.name}</h3>
                <p className="text-primary text-xs font-semibold uppercase tracking-wider mt-1">{inst.style}</p>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{inst.desc}</p>
                <p className="text-muted-foreground text-xs mt-2">{inst.exp} experience</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
