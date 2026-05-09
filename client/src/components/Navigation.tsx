import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [location] = useLocation();

  const links = [
    { href: "/films", label: "Film" },
    { href: "/fiction", label: "Fiction" },
    { href: "/archive", label: "Archive" },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-6 py-4 md:px-12 md:py-6 bg-black/80 backdrop-blur-md border-b border-white/5 text-white"
    >
      <div className="w-full md:w-auto flex justify-start">
        <Link href="/" className="font-serif text-base md:text-lg tracking-widest uppercase cursor-pointer hover:opacity-70 transition-opacity duration-300">
            UMVERSE STUDIO
        </Link>
      </div>

      <div className="w-full md:w-auto flex justify-end md:justify-start gap-6 md:gap-12">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={cn(
              "text-sm uppercase tracking-widest transition-all duration-300 relative group cursor-pointer",
              location === link.href ? "opacity-100" : "opacity-60 hover:opacity-100"
            )}>
              {link.label}
              <span className={cn(
                "absolute -bottom-2 left-0 w-full h-[1px] bg-white transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100",
                location === link.href && "scale-x-100"
              )} />
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
