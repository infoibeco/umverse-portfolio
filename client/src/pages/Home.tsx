import { motion } from "framer-motion";
import { ConceptGrid } from "@/components/ConceptGrid";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2074&auto=format&fit=crop" 
            alt="Atmospheric Background" 
            className="w-full h-full object-cover opacity-60 scale-105"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          >
            <h1 className="font-serif text-3xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              One hit is accidental.<br />
              Structure is intentional.
            </h1>
            <p className="text-white/60 text-base md:text-lg font-light tracking-wide uppercase italic">
              50+ narrative IPs across film, series, and animation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Concept Grid Section */}
      <ConceptGrid />

      {/* Structural Principles Section */}
      <section className="py-32 md:py-48 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-12 tracking-wide">
            Structural Principles
          </h2>
          <div className="text-xl md:text-2xl text-white/80 font-light leading-relaxed space-y-2 w-fit mx-auto text-left">
            <p>• 53 concepts. Distributed risk.</p>
            <p>• Korean specificity. Global scale.</p>
            <p>• Adaptable by design.</p>
          </div>
        </motion.div>
      </section>

      {/* Closing / Contact Section */}
      <section className="py-24 md:py-32 px-6 max-w-3xl mx-auto text-center border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
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
        </motion.div>
      </section>
    </div>
  );
}
