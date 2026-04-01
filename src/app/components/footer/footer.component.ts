import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="bg-card border-t border-border">
      <div class="container mx-auto px-6 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <!-- Brand -->
          <div>
            <div class="flex items-center gap-2 mb-4">
              <div class="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                <span class="font-display font-bold text-primary-foreground">É</span>
              </div>
              <span class="font-display font-bold text-lg text-foreground">Élève</span>
            </div>
            <p class="text-muted-foreground text-sm">Your destination for dance and expression.</p>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li><a routerLink="/" class="text-muted-foreground hover:text-primary transition-colors text-sm">Home</a></li>
              <li><a routerLink="/about" class="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</a></li>
              <li><a routerLink="/classes" class="text-muted-foreground hover:text-primary transition-colors text-sm">Classes</a></li>
              <li><a routerLink="/pricing" class="text-muted-foreground hover:text-primary transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h4 class="font-semibold text-foreground mb-4">Contact</h4>
            <p class="text-muted-foreground text-sm mb-2">📍 Anna Nagar, Chennai</p>
            <p class="text-muted-foreground text-sm mb-2">📞 +91 (123) 456-7890</p>
            <p class="text-muted-foreground text-sm">✉️ info&#64;elevenstudio.com</p>
          </div>

          <!-- Social Links -->
          <div>
            <h4 class="font-semibold text-foreground mb-4">Follow Us</h4>
            <div class="flex gap-4">
              <a href="#" class="w-10 h-10 rounded-lg bg-background flex items-center justify-center text-foreground hover:text-primary transition-colors">
                f
              </a>
              <a href="#" class="w-10 h-10 rounded-lg bg-background flex items-center justify-center text-foreground hover:text-primary transition-colors">
                in
              </a>
              <a href="#" class="w-10 h-10 rounded-lg bg-background flex items-center justify-center text-foreground hover:text-primary transition-colors">
                ig
              </a>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="border-t border-border pt-8">
          <p class="text-center text-muted-foreground text-sm">
            © 2024 Élève Dance Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
}
