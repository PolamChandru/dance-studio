import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SectionHeadingComponent } from '../../components/section-heading/section-heading.component';

interface FormData {
  name: string;
  phone: string;
  email: string;
  preferredClass: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, SectionHeadingComponent],
  template: `
    <div class="min-h-screen bg-background pt-24">
      <section class="py-16">
        <div class="container mx-auto px-6">
          <app-section-heading 
            subtitle="Get In Touch" 
            title="Start Dancing Today"
            description="Fill out the form below or reach us directly. We&apos;d love to welcome you to Élève.">
          </app-section-heading>

          <div class="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <!-- Form -->
            <form (ngSubmit)="handleSubmit()" class="bg-card border border-border rounded-lg p-8 space-y-6">
              <div>
                <label class="text-sm font-medium text-foreground mb-2 block">Full Name *</label>
                <input
                  [(ngModel)]="formData.name"
                  name="name"
                  required
                  class="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name" />
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="text-sm font-medium text-foreground mb-2 block">Phone *</label>
                  <input
                    [(ngModel)]="formData.phone"
                    name="phone"
                    required
                    type="tel"
                    class="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label class="text-sm font-medium text-foreground mb-2 block">Email *</label>
                  <input
                    [(ngModel)]="formData.email"
                    name="email"
                    required
                    type="email"
                    class="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="you@email.com" />
                </div>
              </div>
              <div>
                <label class="text-sm font-medium text-foreground mb-2 block">Preferred Class</label>
                <select
                  [(ngModel)]="formData.preferredClass"
                  name="preferredClass"
                  class="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors">
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
                <label class="text-sm font-medium text-foreground mb-2 block">Message</label>
                <textarea
                  [(ngModel)]="formData.message"
                  name="message"
                  rows="4"
                  class="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your dance experience, goals, or questions...">
                </textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-gradient-gold text-primary-foreground py-3.5 rounded-sm text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity">
                Submit Registration
              </button>
            </form>

            <!-- Contact Info -->
            <div class="space-y-8">
              <!-- Location -->
              <div class="flex gap-4">
                <div class="w-10 h-10 bg-gradient-gold rounded-sm flex items-center justify-center shrink-0">
                  <span class="text-primary-foreground">📍</span>
                </div>
                <div>
                  <h3 class="text-foreground font-semibold text-sm mb-1">Visit Us</h3>
                  <p class="text-muted-foreground text-sm">42 Dance Avenue, Anna Nagar</p>
                  <p class="text-muted-foreground text-sm">Chennai, Tamil Nadu 600040</p>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex gap-4">
                <div class="w-10 h-10 bg-gradient-gold rounded-sm flex items-center justify-center shrink-0">
                  <span class="text-primary-foreground">📞</span>
                </div>
                <div>
                  <h3 class="text-foreground font-semibold text-sm mb-1">Call Us</h3>
                  <p class="text-muted-foreground text-sm">+91 98765 43210</p>
                  <p class="text-muted-foreground text-sm">+91 98765 43211</p>
                </div>
              </div>

              <!-- Email -->
              <div class="flex gap-4">
                <div class="w-10 h-10 bg-gradient-gold rounded-sm flex items-center justify-center shrink-0">
                  <span class="text-primary-foreground">✉️</span>
                </div>
                <div>
                  <h3 class="text-foreground font-semibold text-sm mb-1">Email Us</h3>
                  <p class="text-muted-foreground text-sm">hello@elevedance.com</p>
                  <p class="text-muted-foreground text-sm">admissions@elevedance.com</p>
                </div>
              </div>

              <!-- Hours -->
              <div class="flex gap-4">
                <div class="w-10 h-10 bg-gradient-gold rounded-sm flex items-center justify-center shrink-0">
                  <span class="text-primary-foreground">🕐</span>
                </div>
                <div>
                  <h3 class="text-foreground font-semibold text-sm mb-1">Working Hours</h3>
                  <p class="text-muted-foreground text-sm">Mon–Fri: 7 AM – 9 PM</p>
                  <p class="text-muted-foreground text-sm">Sat–Sun: 8 AM – 7 PM</p>
                </div>
              </div>

              <!-- WhatsApp -->
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors">
                <span class="text-2xl">💬</span>
                <div>
                  <p class="text-foreground font-semibold text-sm">Chat on WhatsApp</p>
                  <p class="text-muted-foreground text-xs">Quick responses, usually within minutes</p>
                </div>
              </a>

              <!-- Map -->
              <div class="bg-card border border-border rounded-lg overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2!2d80.21!3d13.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzQ4LjAiTiA4MMKwMTInMzYuMCJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="Élève Dance Studio Location">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: []
})
export class ContactComponent {
  formData: FormData = {
    name: '',
    phone: '',
    email: '',
    preferredClass: '',
    message: '',
  };

  handleSubmit(): void {
    alert('Registration Received! We will contact you within 24 hours to confirm your class.');
    this.formData = { name: '', phone: '', email: '', preferredClass: '', message: '' };
  }
}
