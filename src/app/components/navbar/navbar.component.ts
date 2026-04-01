import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
              <span class="font-display font-bold text-primary-foreground">É</span>
            </div>
            <span class="font-display font-bold text-xl text-foreground">Élève</span>
          </div>
          
          <ul class="hidden md:flex items-center gap-8">
            <li><a routerLink="/" class="text-foreground hover:text-primary transition-colors">Home</a></li>
            <li><a routerLink="/about" class="text-foreground hover:text-primary transition-colors">About</a></li>
            <li><a routerLink="/classes" class="text-foreground hover:text-primary transition-colors">Classes</a></li>
            <li><a routerLink="/schedule" class="text-foreground hover:text-primary transition-colors">Schedule</a></li>
            <li><a routerLink="/pricing" class="text-foreground hover:text-primary transition-colors">Pricing</a></li>
            <li><a routerLink="/gallery" class="text-foreground hover:text-primary transition-colors">Gallery</a></li>
          </ul>
          
          <a routerLink="/contact" class="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
            Contact
          </a>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class NavbarComponent {
}
