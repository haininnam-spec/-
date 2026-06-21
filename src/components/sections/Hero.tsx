import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Wrench, ShieldCheck, Database } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] text-center px-4 overflow-hidden bg-gradient-to-b from-white to-kogas-offwhite dark:from-zinc-950 dark:to-zinc-900">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-kogas-blue/10 rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-lighten" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-kogas-beige/30 rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-lighten dark:bg-kogas-darkblue/20" />
      
      {/* Background Character */}
      <div className="absolute bottom-0 right-10 md:right-32 w-64 md:w-96 opacity-20 pointer-events-none -z-10 flex justify-center filter drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
        <img src="/gas-doongi-cool.png" alt="가스둥이 캐릭터" className="object-contain w-full h-full mix-blend-multiply dark:mix-blend-lighten" />
      </div>

      <Badge variant="outline" className="mb-6 px-4 py-1.5 flex items-center gap-2 border-kogas-blue text-kogas-blue dark:border-kogas-beige dark:text-kogas-beige text-sm font-medium rounded-full">
        <img src="/kogas-logo.png" alt="KOGAS-Tech Logo" className="h-4 w-auto" />
        <span>한국가스기술공사 인천지사 기전부장</span>
      </Badge>
      
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
        <span className="block mb-2 text-kogas-darkblue dark:text-kogas-beige">안전과 데이터,</span>
        <span className="block">사람을 잇는 기술경영자</span>
      </h1>
      
      <div className="max-w-2xl mb-10 flex flex-col items-center">
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
          안녕하세요. 기계공학적 전문성(ANSYS 구조/유동해석)을 바탕으로 현장의 신뢰를 구축하고,
          온톨로지 기반의 AX(AI Transformation) 혁신을 이끄는 리더
        </p>
        <p className="text-2xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white mt-2">
          <span className="text-kogas-blue dark:text-kogas-beige">최인남</span> 입니다.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" className="bg-kogas-blue hover:bg-kogas-darkblue text-white rounded-full px-8 h-14 text-lg">
          혁신 사례 보기
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-kogas-gray hover:bg-kogas-offwhite dark:hover:bg-zinc-800">
          이력서 다운로드
        </Button>
      </div>

      <div className="mt-20 flex gap-8 md:gap-16 opacity-70">
        <div className="flex flex-col items-center">
          <Wrench className="h-8 w-8 mb-2 text-kogas-blue dark:text-kogas-beige" />
          <span className="text-sm font-medium">30년 현장경험</span>
        </div>
        <div className="flex flex-col items-center">
          <Database className="h-8 w-8 mb-2 text-kogas-blue dark:text-kogas-beige" />
          <span className="text-sm font-medium">AX 온톨로지 구축</span>
        </div>
        <div className="flex flex-col items-center">
          <ShieldCheck className="h-8 w-8 mb-2 text-kogas-blue dark:text-kogas-beige" />
          <span className="text-sm font-medium">무사고/무결점</span>
        </div>
      </div>
    </section>
  );
}
