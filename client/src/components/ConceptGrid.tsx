import { useState } from "react";
import { motion } from "framer-motion";
import { concepts as allConcepts } from "@/data/concepts";

const PAGE_SIZE = 9;

export function ConceptGrid() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visibleConcepts = allConcepts.slice(0, visibleCount);
  const hasMore = visibleCount < allConcepts.length;

  return (
    <section className="px-6 md:px-12 py-24 md:py-32 max-w-[1800px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mb-16 md:mb-20 text-center"
      >
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-4">
          Concept Grid
        </h2>
        <p className="text-white/50 text-sm md:text-base font-light tracking-wide uppercase">
          {allConcepts.length} concepts and counting.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-20">
        {visibleConcepts.map((concept, index) => (
          <motion.article
            key={concept.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: (index % PAGE_SIZE) * 0.05 }}
            className="group flex flex-col gap-4"
          >
            {/* Still Image */}
            <div className="relative aspect-[16/9] overflow-hidden bg-muted">
              <img
                src={concept.imageUrl}
                alt={concept.title}
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out md:group-hover:grayscale"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
            </div>

            {/* Title + Logline */}
            <div className="flex flex-col gap-1.5 px-1">
              <h3 className="font-serif text-lg md:text-xl text-white/90 tracking-wide">
                {concept.title}
              </h3>
              <p className="text-sm text-white/50 font-light leading-relaxed">
                {concept.logline}
              </p>

              {/* Teaser Link — only renders if a teaserUrl exists */}
              {concept.teaserUrl && (
                <a
                  href={concept.teaserUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-300 w-fit"
                >
                  <span className="inline-block w-0 h-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-current" />
                  Watch Teaser
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-20 md:mt-24">
          <button
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            className="px-8 py-3 border border-white/20 text-xs uppercase tracking-widest text-white/70 hover:text-white hover:border-white/50 transition-all duration-300"
            data-testid="button-load-more-concepts"
          >
            More Concepts
          </button>
        </div>
      )}
    </section>
  );
}
