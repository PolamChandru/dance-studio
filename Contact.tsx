import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SectionHeading from "@/components/SectionHeading";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredClass: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Received! 🎉",
      description: "We'll contact you within 24 hours to confirm your class.",
    });
    setFormData({ name: "", phone: "", email: "", preferredClass: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-background pt-24">
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="Get In Touch" title="Start Dancing Today" description="Fill out the form below or reach us directly. We'd love to welcome you to Élève." />

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-lg p-8 space-y-6"
            >
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Full Name *</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone *</label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    type="tel"
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email *</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    type="email"
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Preferred Class</label>
                <select
                  name="preferredClass"
                  value={formData.preferredClass}
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Select a class</option>
                  <option>Bharatanatyam</option>
                  <option>Hip-Hop</option>
                  <option>Contemporary</option>
                  <option>Zumba</option>
                  <option>Bollywood</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your dance experience, goals, or questions..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-gold text-primary-foreground py-3.5 rounded-sm text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
              >
                Submit Registration
              </button>
            </motion.form>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-8"
            >
              {[
                { icon: MapPin, title: "Visit Us", lines: ["42 Dance Avenue, Anna Nagar", "Chennai, Tamil Nadu 600040"] },
                { icon: Phone, title: "Call Us", lines: ["+91 98765 43210", "+91 98765 43211"] },
                { icon: Mail, title: "Email Us", lines: ["hello@elevedance.com", "admissions@elevedance.com"] },
                { icon: Clock, title: "Working Hours", lines: ["Mon–Fri: 7 AM – 9 PM", "Sat–Sun: 8 AM – 7 PM"] },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-gradient-gold rounded-sm flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold text-sm mb-1">{item.title}</h3>
                    {item.lines.map((line) => (
                      <p key={line} className="text-muted-foreground text-sm">{line}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* WhatsApp */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors"
              >
                <MessageCircle size={24} className="text-primary" />
                <div>
                  <p className="text-foreground font-semibold text-sm">Chat on WhatsApp</p>
                  <p className="text-muted-foreground text-xs">Quick responses, usually within minutes</p>
                </div>
              </a>

              {/* Map */}
              <div className="bg-card border border-border rounded-lg overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2!2d80.21!3d13.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzQ4LjAiTiA4MMKwMTInMzYuMCJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Élève Dance Studio Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
