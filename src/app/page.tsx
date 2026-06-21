import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Expertise } from "@/components/sections/Expertise";
import { Innovation } from "@/components/sections/Innovation";
import { Leadership } from "@/components/sections/Leadership";
import { Vision } from "@/components/sections/Vision";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-950 font-sans">
      <Header />
      <main className="flex-1">
        <Hero />
        <Expertise />
        <Innovation />
        <Leadership />
        <Vision />
      </main>
      <Footer />
    </div>
  );
}
