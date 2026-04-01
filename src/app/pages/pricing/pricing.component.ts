import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionHeadingComponent } from '../../components/section-heading/section-heading.component';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, RouterModule, SectionHeadingComponent],
  template: `
    <div class="min-h-screen bg-background pt-24">
      <section class="py-16">
        <div class="container mx-auto px-6">
          <app-section-heading
            subtitle="Pricing"
            title="Simple, Transparent Pricing"
            description="No hidden fees. Pick the plan that works for you and start dancing today.">
          </app-section-heading>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div
              *ngFor="let plan of plans"
              [ngClass]="plan.highlighted ? 'bg-card border-2 border-primary shadow-gold' : 'bg-card border border-border'"
              class="relative rounded-lg p-8 flex flex-col">
              <span
                *ngIf="plan.highlighted"
                class="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-sm">
                Most Popular
              </span>
              <h3 class="text-xl font-display font-bold text-foreground mb-2">{{ plan.name }}</h3>
              <div class="mb-4">
                <span class="text-4xl font-display font-bold text-gradient-gold">{{ plan.price }}</span>
                <span class="text-muted-foreground text-sm">{{ plan.period }}</span>
              </div>
              <p class="text-muted-foreground text-sm mb-6">{{ plan.description }}</p>
              <ul class="space-y-3 mb-8 flex-1">
                <li *ngFor="let feature of plan.features" class="flex items-center gap-3 text-sm text-foreground">
                  <span class="text-primary">✓</span>
                  {{ feature }}
                </li>
              </ul>
              <a
                routerLink="/contact"
                [ngClass]="plan.highlighted ? 'bg-gradient-gold text-primary-foreground hover:opacity-90' : 'border border-primary/30 text-foreground hover:border-primary/60'"
                class="text-center py-3 rounded-sm text-sm font-semibold tracking-wide transition-all">
                {{ plan.price === 'Free' ? 'Book Free Trial' : 'Get Started' }}
              </a>
            </div>
          </div>

          <!-- Payment Methods -->
          <div class="text-center mt-12">
            <p class="text-muted-foreground text-sm">
              We accept UPI, credit/debit cards, net banking, and cash payments.
            </p>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: []
})
export class PricingComponent {
  plans: PricingPlan[] = [
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
}
