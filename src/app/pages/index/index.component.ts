import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-background pt-24">
      <!-- Hero Section -->
      <section class="py-24">
        <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <h1 class="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
              Welcome to <span class="text-gradient-gold">Élève</span>
            </h1>
            <p class="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover the joy of dance. From classical traditions to modern movements, find your rhythm and express yourself.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a routerLink="/classes" class="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Explore Classes
              </a>
              <a routerLink="/contact" class="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Us -->
      <section class="py-20 bg-card">
        <div class="container mx-auto px-6">
          <h2 class="text-4xl font-display font-bold text-center text-foreground mb-12">Why Choose Élève?</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-20 h-20 rounded-lg bg-gradient-gold flex items-center justify-center mx-auto mb-6">
                <span class="text-3xl">🎯</span>
              </div>
              <h3 class="text-xl font-bold text-foreground mb-3">Expert Trainers</h3>
              <p class="text-muted-foreground">Learn from award-winning instructors with decades of combined experience.</p>
            </div>
            <div class="text-center">
              <div class="w-20 h-20 rounded-lg bg-gradient-gold flex items-center justify-center mx-auto mb-6">
                <span class="text-3xl">🎭</span>
              </div>
              <h3 class="text-xl font-bold text-foreground mb-3">Diverse Classes</h3>
              <p class="text-muted-foreground">From Bharatanatyam to Hip-Hop, we offer classes for every style and skill level.</p>
            </div>
            <div class="text-center">
              <div class="w-20 h-20 rounded-lg bg-gradient-gold flex items-center justify-center mx-auto mb-6">
                <span class="text-3xl">🌟</span>
              </div>
              <h3 class="text-xl font-bold text-foreground mb-3">Community</h3>
              <p class="text-muted-foreground">Join a vibrant community of dancers who celebrate art and expression.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Classes -->
      <section class="py-20">
        <div class="container mx-auto px-6">
          <h2 class="text-4xl font-display font-bold text-center text-foreground mb-12">Featured Classes</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
              <h3 class="text-lg font-bold text-foreground mb-2">Bharatanatyam</h3>
              <p class="text-muted-foreground text-sm mb-4">Traditional South Indian classical dance</p>
              <a routerLink="/classes" class="text-primary font-medium text-sm hover:underline">Learn More →</a>
            </div>
            <div class="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
              <h3 class="text-lg font-bold text-foreground mb-2">Hip-Hop</h3>
              <p class="text-muted-foreground text-sm mb-4">High-energy urban dance styles</p>
              <a routerLink="/classes" class="text-primary font-medium text-sm hover:underline">Learn More →</a>
            </div>
            <div class="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
              <h3 class="text-lg font-bold text-foreground mb-2">Contemporary</h3>
              <p class="text-muted-foreground text-sm mb-4">Modern expressive movement</p>
              <a routerLink="/classes" class="text-primary font-medium text-sm hover:underline">Learn More →</a>
            </div>
            <div class="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
              <h3 class="text-lg font-bold text-foreground mb-2">Zumba</h3>
              <p class="text-muted-foreground text-sm mb-4">Fun fitness dance for all</p>
              <a routerLink="/classes" class="text-primary font-medium text-sm hover:underline">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-gradient-gold text-primary-foreground">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-4xl font-display font-bold mb-6">Ready to Start Your Dance Journey?</h2>
          <p class="text-lg mb-8 max-w-2xl mx-auto">Join hundreds of students already dancing at Élève.</p>
          <a routerLink="/contact" class="px-8 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:bg-white transition-colors">
            Enroll Now
          </a>
        </div>
      </section>
    </div>
  `,
  styles: []
})
export class IndexComponent {
}
