import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-24 md:py-32 px-6 border-t border-white/5 bg-background text-center"
    >
      <p className="font-serif text-2xl md:text-3xl text-white/90 mb-12 leading-relaxed">
        The catalog is open. Access is selective.
      </p>
      <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">
        For Inquiries
      </p>
      <a 
        href="mailto:ummssun@gmail.com" 
        className="text-lg md:text-xl text-white/70 hover:text-white transition-colors duration-300 tracking-wide"
      >
        ummssun@gmail.com
      </a>
    </motion.footer>
  );
}
