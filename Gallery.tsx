import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const categories = ["All", "Performances", "Classes", "Events", "Behind the Scenes"];

const galleryItems = [
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

const videos = [
  { id: 1, thumbnail: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=600&h=340&fit=crop", title: "Annual Recital Highlights 2024", duration: "3:24" },
  { id: 2, thumbnail: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=600&h=340&fit=crop", title: "Behind the Scenes — Summer Camp", duration: "2:10" },
  { id: 3, thumbnail: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=600&h=340&fit=crop", title: "Contemporary Solo — Kavya Reddy", duration: "4:05" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<typeof galleryItems[0] | null>(null);

  const filtered = activeCategory === "All" ? galleryItems : galleryItems.filter((i) => i.category === activeCategory);

  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Hero */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="Our Moments" title="Gallery" description="Capturing the energy, passion, and joy of every performance, class, and event." />

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-sm text-sm font-medium tracking-wide transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-gold text-primary-foreground"
                    : "bg-card text-muted-foreground border border-border hover:border-primary/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style Grid */}
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg"
                  onClick={() => setLightboxItem(item)}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <p className="text-white font-display font-bold text-sm">{item.title}</p>
                      <p className="text-white/70 text-xs">{item.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Videos */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="Watch" title="Performance Videos" description="Relive our best moments on stage." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
              >
                <img src={video.thumbnail} alt={video.title} className="w-full aspect-video object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={24} className="text-primary-foreground ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-display font-bold text-sm">{video.title}</p>
                  <p className="text-white/70 text-xs">{video.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxItem(null)}
          >
            <button className="absolute top-6 right-6 text-white/80 hover:text-white" onClick={() => setLightboxItem(null)}>
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightboxItem.src.replace("w=600", "w=1200").replace("h=400", "h=800").replace("h=600", "h=1200")}
              alt={lightboxItem.title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
