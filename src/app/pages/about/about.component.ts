import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from '../../components/section-heading/section-heading.component';

interface Instructor {
  name: string;
  style: string;
  exp: string;
  desc: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent],
  template: `
    <div class="min-h-screen bg-background pt-24">
      <!-- Hero -->
      <section class="py-16">
        <div class="container mx-auto px-6">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p class="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">Our Story</p>
              <h1 class="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight mb-6">
                Born from a Love of <span class="text-gradient-gold italic">Movement</span>
              </h1>
              <p class="text-muted-foreground leading-relaxed mb-4">
                Founded in 2012, Élève Dance Studio began with a simple belief: dance is for everyone. What started as a small studio in Anna Nagar has grown into Chennai's most vibrant dance community.
              </p>
              <p class="text-muted-foreground leading-relaxed">
                Our name, "Élève" — meaning "student" in French — reflects our core philosophy. We are all learners, always growing, always evolving. Whether you're taking your first step or perfecting your thousandth pirouette, you belong here.
              </p>
            </div>
            <div>
              <img src="assets/about-studio.jpg" alt="Élève dance studio interior" class="rounded-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      <!-- Vision & Mission -->
      <section class="py-20 bg-card">
        <div class="container mx-auto px-6">
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-background p-10 rounded-lg border border-border">
              <h3 class="text-2xl font-display font-bold text-foreground mb-3">Our Mission</h3>
              <p class="text-muted-foreground leading-relaxed">
                To make dance accessible, joyful, and transformative for every individual — regardless of age, background, or experience level.
              </p>
            </div>
            <div class="bg-background p-10 rounded-lg border border-border">
              <h3 class="text-2xl font-display font-bold text-foreground mb-3">Our Vision</h3>
              <p class="text-muted-foreground leading-relaxed">
                To be South India's most inspiring dance community, where artistry and well-being thrive together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Achievements -->
      <section class="py-20">
        <div class="container mx-auto px-6 text-center">
          <app-section-heading 
            subtitle="Recognition" 
            title="Awards & Achievements">
          </app-section-heading>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div class="flex flex-col items-center">
              <span class="text-3xl mb-3">🏆</span>
              <p class="text-foreground text-sm font-medium text-center">Best Dance Studio — Chennai Arts Awards 2023</p>
            </div>
            <div class="flex flex-col items-center">
              <span class="text-3xl mb-3">📰</span>
              <p class="text-foreground text-sm font-medium text-center">Featured in The Hindu — 'Studios Shaping Tamil Nadu's Dance Scene'</p>
            </div>
            <div class="flex flex-col items-center">
              <span class="text-3xl mb-3">🥇</span>
              <p class="text-foreground text-sm font-medium text-center">National Youth Dance Competition — 3 Gold Medals</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Instructors -->
      <section class="py-20 bg-card">
        <div class="container mx-auto px-6">
          <app-section-heading 
            subtitle="Meet the Team" 
            title="Our Instructors"
            description="Passionate professionals dedicated to bringing out the best in every student.">
          </app-section-heading>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div *ngFor="let inst of instructors" class="bg-background rounded-lg border border-border p-6 hover:border-primary/30 transition-colors">
              <div class="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-display font-bold text-xl mb-4">
                {{ inst.name.charAt(0) }}
              </div>
              <h3 class="text-lg font-display font-bold text-foreground">{{ inst.name }}</h3>
              <p class="text-primary text-xs font-semibold uppercase tracking-wider mt-1">{{ inst.style }}</p>
              <p class="text-muted-foreground text-sm mt-3 leading-relaxed">{{ inst.desc }}</p>
              <p class="text-muted-foreground text-xs mt-2">{{ inst.exp }} experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: []
})
export class AboutComponent {
  instructors: Instructor[] = [
    { name: "Meera Nair", style: "Bharatanatyam", exp: "15 years", desc: "Award-winning classical dancer and Kalakshetra alumna." },
    { name: "Arjun Das", style: "Hip-Hop & Street", exp: "10 years", desc: "Choreographer for major music videos and stage shows." },
    { name: "Kavya Reddy", style: "Contemporary", exp: "12 years", desc: "Trained at the London Contemporary Dance School." },
    { name: "Ravi Kumar", style: "Zumba & Fitness", exp: "8 years", desc: "Licensed Zumba instructor with a passion for wellness." },
  ];
}
