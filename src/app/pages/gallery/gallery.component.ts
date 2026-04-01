import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from '../../components/section-heading/section-heading.component';

interface GalleryItem {
  id: number;
  src: string;
  category: string;
  title: string;
}

interface Video {
  id: number;
  thumbnail: string;
  title: string;
  duration: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent],
  template: `
    <div class="min-h-screen bg-background pt-24">
      <!-- Photo Gallery -->
      <section class="py-16">
        <div class="container mx-auto px-6">
          <app-section-heading 
            subtitle="Our Moments" 
            title="Gallery"
            description="Capturing the energy, passion, and joy of every performance, class, and event.">
          </app-section-heading>

          <!-- Filters -->
          <div class="flex flex-wrap justify-center gap-3 mb-12">
            <button
              *ngFor="let category of categories"
              (click)="activeCategory = category"
              [ngClass]="activeCategory === category ? 'bg-gradient-gold text-primary-foreground' : 'bg-card text-muted-foreground border border-border hover:border-primary/30'"
              class="px-5 py-2 rounded-sm text-sm font-medium tracking-wide transition-all">
              {{ category }}
            </button>
          </div>

          <!-- Masonry Grid -->
          <div class="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <div
              *ngFor="let item of filteredGallery"
              class="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg"
              (click)="openLightbox(item)">
              <img
                [src]="item.src"
                [alt]="item.title"
                class="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p class="text-white font-display font-bold text-sm">{{ item.title }}</p>
                  <p class="text-white/70 text-xs">{{ item.category }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Videos -->
      <section class="py-20 bg-card">
        <div class="container mx-auto px-6">
          <app-section-heading 
            subtitle="Watch" 
            title="Performance Videos"
            description="Relive our best moments on stage.">
          </app-section-heading>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div *ngFor="let video of videos" class="group relative overflow-hidden rounded-lg cursor-pointer">
              <img [src]="video.thumbnail" [alt]="video.title" class="w-full aspect-video object-cover" loading="lazy" />
              <div class="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                <div class="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span class="text-primary-foreground">▶</span>
                </div>
              </div>
              <div class="absolute bottom-0 left-0 right-0 p-4">
                <p class="text-white font-display font-bold text-sm">{{ video.title }}</p>
                <p class="text-white/70 text-xs">{{ video.duration }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Lightbox -->
      <div
        *ngIf="lightboxItem"
        class="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
        (click)="closeLightbox()">
        <button
          class="absolute top-6 right-6 text-white/80 hover:text-white text-3xl"
          (click)="closeLightbox()">
          ×
        </button>
        <img
          [src]="lightboxItem.src"
          [alt]="lightboxItem.title"
          class="max-w-full max-h-[85vh] object-contain rounded-lg"
          (click)="$event.stopPropagation()" />
      </div>
    </div>
  `,
  styles: []
})
export class GalleryComponent {
  activeCategory = 'All';
  lightboxItem: GalleryItem | null = null;

  categories = ['All', 'Performances', 'Classes', 'Events', 'Behind the Scenes'];

  galleryItems: GalleryItem[] = [
    { id: 1, src: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=600&h=400&fit=crop", category: "Performances", title: "Annual Recital 2024" },
    { id: 2, src: "https://images.unsplash.com/photo-1547153760-18fc86c39815?w=600&h=400&fit=crop", category: "Classes", title: "Bharatanatyam Practice" },
    { id: 3, src: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=600&h=600&fit=crop", category: "Events", title: "Summer Dance Camp" },
    { id: 4, src: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=600&h=400&fit=crop", category: "Performances", title: "Contemporary Showcase" },
    { id: 5, src: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=600&h=600&fit=crop", category: "Behind the Scenes", title: "Warm-up Session" },
    { id: 6, src: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=600&h=400&fit=crop", category: "Classes", title: "Hip-Hop Crew" },
    { id: 7, src: "https://images.unsplash.com/photo-1545959570-a94084071b5d?w=600&h=400&fit=crop", category: "Events", title: "Workshop with Guest Artist" },
    { id: 8, src: "https://images.unsplash.com/photo-1509670811615-bb8b07cb3baf?w=600&h=600&fit=crop", category: "Behind the Scenes", title: "Costume Prep" },
    { id: 9, src: "https://images.unsplash.com/photo-1550026593-f369f98df0dd?w=600&h=400&fit=crop", category: "Performances", title: "Kids Ballet Show" },
    { id: 10, src: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=600&h=400&fit=crop", category: "Classes", title: "Zumba Fitness" },
    { id: 11, src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=600&fit=crop", category: "Events", title: "DJ Night Fusion" },
    { id: 12, src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop", category: "Performances", title: "Stage Lights" },
  ];

  videos: Video[] = [
    { id: 1, thumbnail: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=600&h=340&fit=crop", title: "Annual Recital Highlights 2024", duration: "3:24" },
    { id: 2, thumbnail: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=600&h=340&fit=crop", title: "Behind the Scenes — Summer Camp", duration: "2:10" },
    { id: 3, thumbnail: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=600&h=340&fit=crop", title: "Contemporary Solo — Kavya Reddy", duration: "4:05" },
  ];

  get filteredGallery(): GalleryItem[] {
    return this.activeCategory === 'All'
      ? this.galleryItems
      : this.galleryItems.filter(item => item.category === this.activeCategory);
  }

  openLightbox(item: GalleryItem): void {
    this.lightboxItem = item;
  }

  closeLightbox(): void {
    this.lightboxItem = null;
  }
}
