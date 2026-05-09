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
      <p className="font-serif italic text-muted-foreground mb-4 text-lg leading-relaxed">
        <span className="block">For collaboration inquiries, contact</span>
        <span className="block">here.</span>
      </p>
      <a 
        href="mailto:ummmsun@gmail.com" 
        className="text-sm uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity duration-300"
      >
        ummmsun@gmail.com
      </a>
    </motion.footer>
  );
}
