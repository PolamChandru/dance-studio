import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const plans = [
  {
    name: "Trial",
    price: "Free",
    period: "",
    description: "Experience Élève with a complimentary class.",
    features: ["1 class of your choice", "Studio tour", "Meet your trainer", "No commitment"],
    highlighted: false,
  },
  {
    name: "Monthly",
    price: "₹3,000",
    period: "/month",
    description: "Flexible month-to-month membership for regular dancers.",
    features: ["Unlimited classes", "All dance styles", "Flexible batch timing", "Progress tracking", "Community events"],
    highlighted: true,
  },
  {
    name: "Quarterly",
    price: "₹7,500",
    period: "/3 months",
    description: "Best value — save 17% with quarterly billing.",
    features: ["Everything in Monthly", "Priority batch selection", "1 free guest pass/month", "Performance opportunities", "Exclusive workshops"],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionHeading
            subtitle="Pricing"
            title="Simple, Transparent Pricing"
            description="No hidden fees. Pick the plan that works for you and start dancing today."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-lg p-8 flex flex-col ${
                  plan.highlighted
                    ? "bg-card border-2 border-primary shadow-gold"
                    : "bg-card border border-border"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-sm">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-display font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-display font-bold text-gradient-gold">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                      <Check size={16} className="text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`text-center py-3 rounded-sm text-sm font-semibold tracking-wide transition-all ${
                    plan.highlighted
                      ? "bg-gradient-gold text-primary-foreground hover:opacity-90"
                      : "border border-primary/30 text-foreground hover:border-primary/60"
                  }`}
                >
                  {plan.price === "Free" ? "Book Free Trial" : "Get Started"}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Payment Methods */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground text-sm">
              We accept UPI, credit/debit cards, net banking, and cash payments.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
