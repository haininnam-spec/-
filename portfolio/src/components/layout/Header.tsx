import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-kogas-gray/20 bg-white/80 backdrop-blur-md dark:bg-zinc-950/80 dark:border-zinc-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-kogas-blue dark:text-kogas-beige">
            <img src="/kogas-logo.png" alt="KOGAS-Tech Logo" className="h-6 w-auto" />
            <span>KOGAS-Tech</span> <span className="text-zinc-400 font-light text-base ml-1">| Choi In-nam</span>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-300">
          <a href="#" className="hover:text-kogas-blue transition-colors">Expertise</a>
          <a href="#" className="hover:text-kogas-blue transition-colors">Innovation</a>
          <a href="#" className="hover:text-kogas-blue transition-colors">Leadership</a>
          <a href="#" className="hover:text-kogas-blue transition-colors">Vision</a>
        </nav>
        <div>
          <Button variant="default" className="bg-kogas-blue hover:bg-kogas-darkblue text-white rounded-full">
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
}
