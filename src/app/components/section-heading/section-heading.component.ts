import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="text-center mb-12">
      <p *ngIf="subtitle" class="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3 block">{{ subtitle }}</p>
      <h2 class="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight mb-4">{{ title }}</h2>
      <p *ngIf="description" class="text-muted-foreground text-lg max-w-2xl mx-auto">{{ description }}</p>
    </div>
  `,
  styles: []
})
export class SectionHeadingComponent {
  @Input() title: string = '';
  @Input() subtitle?: string;
  @Input() description?: string;
}
