import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Wrench, ShieldCheck, Database } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-[90vh] px-4 md:px-12 overflow-hidden bg-gradient-to-b from-white to-kogas-offwhite dark:from-zinc-950 dark:to-zinc-900">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-kogas-blue/10 rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-lighten" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-kogas-beige/30 rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-lighten dark:bg-kogas-darkblue/20" />
      
      {/* Left Content Area */}
      <div className="flex-1 text-center md:text-left z-10 pt-20 md:pt-0 flex flex-col items-center md:items-start">
        <Badge variant="outline" className="mb-6 px-4 py-1.5 flex items-center gap-2 border-kogas-blue text-kogas-blue dark:border-kogas-beige dark:text-kogas-beige text-sm font-medium rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm">
          <img src="/kogas-logo.png" alt="KOGAS-Tech Logo" className="h-4 w-auto" />
          <span>한국가스기술공사 인천지사 기전부장</span>
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
          <span className="block mb-2 text-kogas-darkblue dark:text-kogas-beige">안전과 데이터,</span>
          <span className="block">사람을 잇는 기술경영자</span>
        </h1>
        
        <div className="max-w-xl mb-10 flex flex-col items-center md:items-start">
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 text-center md:text-left">
            1969년생, 1996년 입사 이래 30년 가까이 천연가스 공급설비의 유지보수와 안전관리에 헌신해 왔습니다. 현장에서 시작해 숫자로 증명한 신뢰를 바탕으로 변화를 이끕니다.
          </p>
          <p className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white mt-4 flex items-baseline gap-2">
            <span className="text-kogas-blue dark:text-kogas-beige text-4xl md:text-6xl">최인남</span> 입니다.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button size="lg" className="bg-kogas-blue hover:bg-kogas-darkblue text-white rounded-full px-8 h-14 text-lg shadow-lg shadow-kogas-blue/20">
            혁신 사례 보기
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="flex gap-6 md:gap-12 opacity-80">
          <div className="flex flex-col items-center md:items-start">
            <Wrench className="h-8 w-8 mb-2 text-kogas-blue dark:text-kogas-beige" />
            <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200">30년 현장경험</span>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <Database className="h-8 w-8 mb-2 text-kogas-blue dark:text-kogas-beige" />
            <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200">AX 혁신 리더</span>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <ShieldCheck className="h-8 w-8 mb-2 text-kogas-blue dark:text-kogas-beige" />
            <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200">무사고/무결점</span>
          </div>
        </div>
      </div>

      {/* Right Character Area */}
      <div className="flex-1 relative w-full h-[50vh] md:h-[80vh] flex items-center justify-center mt-10 md:mt-0">
        <div className="absolute inset-0 bg-kogas-blue/5 dark:bg-kogas-beige/5 rounded-full blur-3xl animate-pulse" />
        <img 
          src="/gas-doongi-cool.png" 
          alt="가스둥이 캐릭터 환영" 
          className="relative z-10 object-contain w-3/4 md:w-full h-full max-h-[600px] drop-shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out" 
        />
        
        {/* Floating Badges around character */}
        <div className="absolute top-1/4 right-10 bg-white dark:bg-zinc-800 px-4 py-2 rounded-2xl shadow-xl animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
          <span className="text-sm font-bold text-kogas-blue">3D 정밀 설계</span>
        </div>
        <div className="absolute bottom-1/3 left-0 md:-left-10 bg-white dark:bg-zinc-800 px-4 py-2 rounded-2xl shadow-xl animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3.5s' }}>
          <span className="text-sm font-bold text-kogas-darkblue dark:text-kogas-beige">자연어 코딩(Vibe)</span>
        </div>
      </div>
    </section>
  );
}

