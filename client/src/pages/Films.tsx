import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { Link } from "wouter";

export default function Films() {
  const films = [
  {
    id: 1,
    title: "Amniotic Rain",
    slug: "amniotic-rain",
    year: "2026",
    status: "Completed",
    imageUrl: "/amniotic-rain.jpg",
    description: "Official Selection — Berlin Indie Film Festival (2026) · IndieX Film Fest (2026)",
    quote: "A controlled birth within a quiet system.",
  },
  {
    id: 2,
    title: "The Dispenser",
    slug: "the-dispenser",
    year: "2026",
    status: "Completed",
    imageUrl: "/the-dispenser.jpg",
    description: "A peaceful world is a form that conceals human cruelty.",
    quote: "A peaceful world is a form that conceals human cruelty.",
  },
  {
    id: 3,
    title: "The Gum",
    slug: "emotion-gum",
    year: "2026",
    status: "In Development",
    imageUrl: "/emotion-gum.jpg",
    description: "Bubble gum that reveals emotions in color.",
    quote: "Bubble gum that reveals emotions in color.",
  },
];


  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-[1800px] mx-auto">
      <header className="mb-24 md:mb-32 max-w-2xl">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-serif text-white mb-6"
        >
          Current Slate
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-muted-foreground text-lg leading-relaxed font-light"
        >
          A structured slate of narrative IP projects designed for development and expansion.
        </motion.p>
      </header>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24 md:gap-y-32"
      >
        {films?.map((film) => (
          <motion.article 
            key={film.id} 
            variants={item}
            className="group relative flex flex-col gap-6"
          >
            {/* Image Container */}
            <div className="relative aspect-[16/9] overflow-hidden bg-muted">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <img 
                src={film.imageUrl} 
                alt={film.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out md:group-hover:grayscale opacity-100"
              />
              
              {/* Hover Overlay Content */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/60 backdrop-blur-[2px] p-8 text-center">
                <p className="font-serif text-xl italic text-white/90 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {film.abstractSentence ? `"${film.abstractSentence}"` : ""}
                </p>
                <span className="text-xs uppercase tracking-widest text-white/60 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                  {film.duration}
                </span>
              </div>
            </div>

            {/* Title Block */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-baseline border-b border-white/10 pb-4 group-hover:border-white/30 transition-colors duration-500">
                <h2 className="text-xl md:text-2xl font-serif text-white/90 font-medium tracking-wide">
                  {film.title}
                </h2>
                <span className="text-sm font-mono text-white/40">{film.year} — {film.title === "Amniotic Rain" ? "Completed" : "In Development"}</span>
              </div>
              {film.festivalSelection && (
                <span className="text-sm text-white/50">{film.festivalSelection}</span>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
