import { Terminal, Network, ShieldAlert, BarChart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Innovation() {
  return (
    <section className="py-24 px-4 bg-kogas-offwhite dark:bg-zinc-900 overflow-hidden relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-kogas-blue text-kogas-blue dark:border-kogas-beige dark:text-kogas-beige bg-white/50 dark:bg-zinc-900/50">AX (AI Transformation) 혁신</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            구호가 아닌 <span className="text-kogas-blue">실행으로 증명하는 AX</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            단순한 자동화 도구를 넘어, 기존 유지보수 중심의 사업구조를 데이터 기반의 수익 중심 구조로 재편하는 온톨로지를 구축하고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-full bg-kogas-blue/10 flex items-center justify-center">
                  <Network className="h-6 w-6 text-kogas-blue" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">데이터 온톨로지(Ontology) 기반 자산화</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  산재된 현장의 기술료 데이터와 점검 이력을 체계적으로 연동시켜, 한국가스공사 대상 프리미엄 기술서비스 사업화 기반을 다집니다.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-full bg-kogas-blue/10 flex items-center justify-center">
                  <Terminal className="h-6 w-6 text-kogas-blue" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Vibe Coding (자연어 코딩) 도입</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Cursor, Antigravity 등 최신 LLM 기반 개발 환경을 현장에 도입하여, 개발자가 아닌 현장 실무자가 직접 쓸 수 있는 소프트웨어를 기획·설계합니다.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-full bg-kogas-blue/10 flex items-center justify-center">
                  <BarChart className="h-6 w-6 text-kogas-blue" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">투입인력관리 시스템 & PRD v2.0 직접 설계</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  ERP 연동의 한계를 극복하기 위해 Google Sheets와 Apps Script를 백엔드로 한 실용적 대안을 구축했습니다. 기계반과 전기반 등 총 7개 검사반의 MD(man-day)를 통합 관리합니다.
                </p>
              </div>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0">
            {/* Character positioned creatively over the chart */}
            <div className="absolute -top-16 -right-10 md:-top-24 md:-right-16 w-32 md:w-48 z-20 hover:scale-110 transition-transform">
              <img src="/gas-doongi-cool.png" alt="가스둥이 AX혁신" className="w-full h-full object-contain drop-shadow-2xl" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-tr from-kogas-blue/20 to-kogas-beige/20 rounded-2xl transform rotate-3 blur-lg"></div>
            <div className="relative bg-white dark:bg-zinc-950 border border-kogas-gray/20 dark:border-zinc-800 rounded-2xl p-8 shadow-xl">
              <div className="flex items-center justify-between mb-8 border-b pb-4 dark:border-zinc-800">
                <h4 className="font-bold text-lg">점검 목표 달성률 (PRD v2.0)</h4>
                <Badge className="bg-kogas-blue text-white">합산 300% 벤치마크</Badge>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-zinc-700 dark:text-zinc-300">고장점검 목표 달성</span>
                    <span className="font-bold text-kogas-blue dark:text-kogas-beige">110%</span>
                  </div>
                  <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-2">
                    <div className="bg-kogas-blue h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-zinc-700 dark:text-zinc-300">예방점검 목표 달성</span>
                    <span className="font-bold text-kogas-blue dark:text-kogas-beige">95%</span>
                  </div>
                  <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-2">
                    <div className="bg-kogas-blue/80 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-zinc-700 dark:text-zinc-300">정기점검 목표 달성</span>
                    <span className="font-bold text-kogas-blue dark:text-kogas-beige">95%</span>
                  </div>
                  <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-2">
                    <div className="bg-kogas-blue/60 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
