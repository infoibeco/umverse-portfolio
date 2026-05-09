import { motion } from "framer-motion";

export default function ArchiveAccess() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="text-white/60 text-sm uppercase tracking-[0.3em] mb-12">
          <p>This page is privately shared.</p>
          <p>Please do not distribute the link.</p>
        </div>
        
        <a 
          href="#" 
          className="group inline-flex flex-col items-center"
          onClick={(e) => e.preventDefault()}
        >
          <div className="px-8 py-4 border border-white/10 group-hover:border-white/40 transition-colors duration-500 mb-4">
            <span className="text-white uppercase tracking-[0.2em] text-sm">Download Full IP Brief (PDF)</span>
          </div>
        </a>
      </motion.div>
    </div>
  );
}
