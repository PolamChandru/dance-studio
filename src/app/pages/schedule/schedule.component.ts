import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from '../../components/section-heading/section-heading.component';

type DayOfWeek = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';

interface ScheduleSlot {
  time: string;
  class: string;
  trainer: string;
  style: string;
  status: 'available' | 'full';
}

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent],
  template: `
    <div class="min-h-screen bg-background pt-24">
      <section class="py-16">
        <div class="container mx-auto px-6">
          <app-section-heading 
            subtitle="Weekly Schedule" 
            title="Plan Your Week"
            description="Find the perfect time slot. Tap a day to see available classes.">
          </app-section-heading>

          <!-- Day Selector -->
          <div class="flex gap-2 justify-center flex-wrap mb-8">
            <button
              *ngFor="let day of days"
              (click)="selectedDay = day"
              [ngClass]="selectedDay === day ? 'bg-gradient-gold text-primary-foreground' : 'bg-secondary text-muted-foreground hover:text-foreground'"
              class="px-5 py-3 rounded-sm text-sm font-semibold transition-all">
              {{ day }}
            </button>
          </div>

          <!-- Style Filter -->
          <div class="flex gap-2 justify-center flex-wrap mb-12">
            <button
              (click)="styleFilter = 'all'"
              [ngClass]="styleFilter === 'all' ? 'bg-primary/20 text-primary' : 'bg-secondary text-muted-foreground'"
              class="px-3 py-1.5 rounded-sm text-xs font-medium transition-all">
              All Styles
            </button>
            <button
              *ngFor="let style of allStyles"
              (click)="styleFilter = style"
              [ngClass]="styleFilter === style ? 'bg-primary/20 text-primary' : 'bg-secondary text-muted-foreground'"
              class="px-3 py-1.5 rounded-sm text-xs font-medium transition-all">
              {{ style }}
            </button>
          </div>

          <!-- Schedule Grid -->
          <div class="max-w-3xl mx-auto space-y-4">
            <div
              *ngFor="let slot of filteredSchedule"
              [ngClass]="slot.status === 'full' ? 'border-border opacity-60' : 'border-border hover:border-primary/30'"
              class="flex items-center justify-between bg-card border rounded-lg p-5 transition-colors">
              <div class="flex items-center gap-6">
                <span class="text-primary font-mono text-sm font-semibold w-20">{{ slot.time }}</span>
                <div>
                  <h3 class="text-foreground font-semibold text-sm">{{ slot.class }}</h3>
                  <p class="text-muted-foreground text-xs">{{ slot.trainer }}</p>
                </div>
              </div>
              <span
                [ngClass]="slot.status === 'available' ? 'bg-primary/10 text-primary' : 'bg-destructive/10 text-destructive'"
                class="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-sm">
                {{ slot.status === 'available' ? 'Open' : 'Full' }}
              </span>
            </div>
            <div *ngIf="filteredSchedule.length === 0" class="text-center text-muted-foreground py-12">
              No classes match your filter for {{ selectedDay }}.
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: []
})
export class ScheduleComponent {
  selectedDay: DayOfWeek = 'Mon';
  styleFilter = 'all';
  days: DayOfWeek[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  schedule: Record<DayOfWeek, ScheduleSlot[]> = {
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

  get allStyles(): string[] {
    const styles = new Set<string>();
    Object.values(this.schedule).forEach(slots => {
      slots.forEach(slot => styles.add(slot.style));
    });
    return Array.from(styles);
  }

  get filteredSchedule(): ScheduleSlot[] {
    return this.schedule[this.selectedDay].filter(s =>
      this.styleFilter === 'all' || s.style === this.styleFilter
    );
  }
}
