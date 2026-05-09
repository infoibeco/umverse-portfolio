import { motion } from "framer-motion";

export default function Slate() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
          Complete IP Slate
        </h1>
        <p className="text-xl text-white/60 font-light mb-12">
          Full portfolio available upon request.
        </p>
        <a 
          href="mailto:ummssun@gmail.com" 
          className="text-lg tracking-widest opacity-60 hover:opacity-100 transition-opacity duration-300"
        >
          ummssun@gmail.com
        </a>
      </motion.div>
    </div>
  );
}
