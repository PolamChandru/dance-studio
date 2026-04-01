import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionHeadingComponent } from '../../components/section-heading/section-heading.component';

type AgeFilter = 'all' | 'kids' | 'adults';
type LevelFilter = 'all' | 'beginner' | 'intermediate' | 'advanced';

interface DanceClass {
  name: string;
  trainer: string;
  duration: string;
  age: 'kids' | 'adults';
  level: 'beginner' | 'intermediate' | 'advanced';
  fees: string;
  description: string;
}

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [CommonModule, RouterModule, SectionHeadingComponent],
  template: `
    <div class="min-h-screen bg-background pt-24">
      <section class="py-16">
        <div class="container mx-auto px-6">
          <app-section-heading 
            subtitle="Our Classes" 
            title="Dance Programs"
            description="From beginners to pros, kids to adults — find the perfect class for your journey.">
          </app-section-heading>

          <!-- Filters -->
          <div class="flex flex-wrap gap-8 mb-12 justify-center">
            <div>
              <p class="text-xs uppercase tracking-wider text-muted-foreground mb-2 text-center">Age Group</p>
              <div class="flex gap-2">
                <button
                  (click)="ageFilter = 'all'"
                  [class.active]="ageFilter === 'all'"
                  class="px-4 py-2 rounded-sm text-sm font-medium transition-all"
                  [ngClass]="ageFilter === 'all' ? 'bg-gradient-gold text-primary-foreground' : 'bg-secondary text-muted-foreground hover:text-foreground'">
                  All
                </button>
                <button
                  (click)="ageFilter = 'kids'"
                  [class.active]="ageFilter === 'kids'"
                  class="px-4 py-2 rounded-sm text-sm font-medium transition-all"
                  [ngClass]="ageFilter === 'kids' ? 'bg-gradient-gold text-primary-foreground' : 'bg-secondary text-muted-foreground hover:text-foreground'">
                  Kids
                </button>
                <button
                  (click)="ageFilter = 'adults'"
                  [class.active]="ageFilter === 'adults'"
                  class="px-4 py-2 rounded-sm text-sm font-medium transition-all"
                  [ngClass]="ageFilter === 'adults' ? 'bg-gradient-gold text-primary-foreground' : 'bg-secondary text-muted-foreground hover:text-foreground'">
                  Adults
                </button>
              </div>
            </div>
            <div>
              <p class="text-xs uppercase tracking-wider text-muted-foreground mb-2 text-center">Skill Level</p>
              <div class="flex gap-2">
                <button
                  (click)="levelFilter = 'all'"
                  [class.active]="levelFilter === 'all'"
                  class="px-4 py-2 rounded-sm text-sm font-medium transition-all"
                  [ngClass]="levelFilter === 'all' ? 'bg-gradient-gold text-primary-foreground' : 'bg-secondary text-muted-foreground hover:text-foreground'">
                  All
                </button>
                <button
                  (click)="levelFilter = 'beginner'"
                  [class.active]="levelFilter === 'beginner'"
                  class="px-4 py-2 rounded-sm text-sm font-medium transition-all"
                  [ngClass]="levelFilter === 'beginner' ? 'bg-gradient-gold text-primary-foreground' : 'bg-secondary text-muted-foreground hover:text-foreground'">
                  Beginner
                </button>
                <button
                  (click)="levelFilter = 'intermediate'"
                  [class.active]="levelFilter === 'intermediate'"
                  class="px-4 py-2 rounded-sm text-sm font-medium transition-all"
                  [ngClass]="levelFilter === 'intermediate' ? 'bg-gradient-gold text-primary-foreground' : 'bg-secondary text-muted-foreground hover:text-foreground'">
                  Intermediate
                </button>
                <button
                  (click)="levelFilter = 'advanced'"
                  [class.active]="levelFilter === 'advanced'"
                  class="px-4 py-2 rounded-sm text-sm font-medium transition-all"
                  [ngClass]="levelFilter === 'advanced' ? 'bg-gradient-gold text-primary-foreground' : 'bg-secondary text-muted-foreground hover:text-foreground'">
                  Advanced
                </button>
              </div>
            </div>
          </div>

          <!-- Class Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div *ngFor="let c of filteredClasses" class="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors flex flex-col">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-xs font-medium uppercase tracking-wider bg-primary/10 text-primary px-2 py-1 rounded-sm">
                  {{ c.level }}
                </span>
                <span class="text-xs font-medium uppercase tracking-wider bg-secondary text-muted-foreground px-2 py-1 rounded-sm">
                  {{ c.age === 'kids' ? 'Kids' : 'Adults' }}
                </span>
              </div>
              <h3 class="text-xl font-display font-bold text-foreground mb-2">{{ c.name }}</h3>
              <p class="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{{ c.description }}</p>
              <div class="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <span class="flex items-center gap-1">👤 {{ c.trainer }}</span>
                <span class="flex items-center gap-1">⏱️ {{ c.duration }}</span>
              </div>
              <div class="flex items-center justify-between border-t border-border pt-4">
                <span class="text-primary font-bold">{{ c.fees }}</span>
                <a routerLink="/contact" class="inline-flex items-center gap-1 text-foreground text-sm font-medium hover:text-primary transition-colors">
                  Enroll Now →
                </a>
              </div>
            </div>
          </div>
          <div *ngIf="filteredClasses.length === 0" class="text-center text-muted-foreground py-16">
            No classes match your filters. Try adjusting them.
          </div>
        </div>
      </section>
    </div>
  `,
  styles: []
})
export class ClassesComponent {
  ageFilter: AgeFilter = 'all';
  levelFilter: LevelFilter = 'all';

  classes: DanceClass[] = [
    { name: "Bharatanatyam", trainer: "Meera Nair", duration: "60 min", age: "kids", level: "beginner", fees: "₹3,000/mo", description: "Traditional South Indian classical dance emphasizing rhythm, expression, and storytelling." },
    { name: "Hip-Hop Fundamentals", trainer: "Arjun Das", duration: "60 min", age: "adults", level: "beginner", fees: "₹2,500/mo", description: "Learn the foundations of hip-hop — grooves, isolations, and freestyle basics." },
    { name: "Contemporary Flow", trainer: "Kavya Reddy", duration: "75 min", age: "adults", level: "intermediate", fees: "₹3,500/mo", description: "Fluid, expressive movement blending modern dance techniques with emotional storytelling." },
    { name: "Zumba Fitness", trainer: "Ravi Kumar", duration: "45 min", age: "adults", level: "beginner", fees: "₹2,000/mo", description: "High-energy dance fitness combining Latin rhythms with easy-to-follow moves." },
    { name: "Advanced Bharatanatyam", trainer: "Meera Nair", duration: "90 min", age: "adults", level: "advanced", fees: "₹4,500/mo", description: "Deep dive into complex compositions, abhinaya, and performance technique." },
    { name: "Kids Hip-Hop", trainer: "Arjun Das", duration: "45 min", age: "kids", level: "beginner", fees: "₹2,000/mo", description: "Fun, age-appropriate hip-hop choreography that builds confidence and coordination." },
    { name: "Bollywood Dance", trainer: "Kavya Reddy", duration: "60 min", age: "adults", level: "beginner", fees: "₹2,500/mo", description: "Energetic Bollywood choreography from the latest hits to classic songs." },
    { name: "Street Dance Crew", trainer: "Arjun Das", duration: "90 min", age: "adults", level: "advanced", fees: "₹4,000/mo", description: "Competitive crew training — battles, formations, and performance-level choreography." },
  ];

  get filteredClasses(): DanceClass[] {
    return this.classes.filter(c => {
      if (this.ageFilter !== 'all' && c.age !== this.ageFilter) return false;
      if (this.levelFilter !== 'all' && c.level !== this.levelFilter) return false;
      return true;
    });
  }
}
