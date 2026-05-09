import { motion } from "framer-motion";

export default function Fiction() {
  return (
    <div className="min-h-screen pt-40 pb-32 px-6 max-w-4xl mx-auto">
      <header className="mb-24 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-serif text-white mb-6"
        >
          Narrative Assets
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-muted-foreground text-lg leading-relaxed font-light"
        >
          Source narratives structured for cross-format adaptation.
        </motion.p>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="flex flex-col items-center"
      >
        <div className="w-full max-w-sm aspect-[3/4] bg-muted mb-12 overflow-hidden border border-white/10">
          <img 
            src="/beyond-the-wall.jpg" 
            alt="Beyond the Wall Cover" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="text-center max-w-xl">
          <h2 className="text-2xl font-serif text-white mb-4">
            Beyond the Wall (2026)
          </h2>
          <div className="text-muted-foreground leading-relaxed space-y-4 font-light">
            <p>A short-form IP foundation series within the UMVERSE system.</p>
            <p>Four narrative units structured for adaptation and expansion.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
