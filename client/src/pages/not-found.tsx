import { Link } from "wouter";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <AlertCircle className="h-12 w-12 text-white/20" />
        </div>
        <h1 className="font-serif text-3xl text-white">404 Page Not Found</h1>
        <p className="text-white/60 font-light">
          The scene you are looking for does not exist.
        </p>
        <div className="pt-4">
          <Link href="/">
            <a className="inline-block border-b border-white/30 pb-1 text-sm uppercase tracking-widest text-white/80 hover:text-white hover:border-white transition-colors duration-300">
              Return Home
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
