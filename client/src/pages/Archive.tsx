import { motion } from "framer-motion";

export default function Archive() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-12">
          IP Archive
        </h1>
        <div className="text-xl text-white/80 font-light leading-relaxed mb-12">
          <p>Detailed development materials</p>
          <p>are shared selectively.</p>
        </div>
        <div className="space-y-2">
          <p className="text-white/40 uppercase tracking-widest text-xs mb-2">For access inquiries:</p>
          <a 
            href="mailto:ummssun@gmail.com" 
            className="text-lg tracking-widest opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            ummssun@gmail.com
          </a>
        </div>
      </motion.div>
    </div>
  );
}
