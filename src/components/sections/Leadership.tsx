import { Users, Presentation, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Leadership() {
  return (
    <section className="py-24 px-4 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
              사람이 자산이다 <br />
              <span className="text-kogas-blue">세대를 잇는 현장형 리더십</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed text-lg">
              조직의 경쟁력은 결국 사람에게서 나옵니다. 기술적 권위와 인간적 친화력을 
              함께 갖춘 리더십이야말로 변화의 시기에 조직을 이끄는 힘이라고 믿습니다.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-kogas-offwhite dark:bg-zinc-800 p-2 rounded-lg">
                  <Users className="h-5 w-5 text-kogas-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">소통과 조율의 관리자</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">기계와 전기 7개 검사반을 운영하며 현장의 애로사항을 직접 듣고 수평적 조직문화를 정착시켰습니다.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-kogas-offwhite dark:bg-zinc-800 p-2 rounded-lg">
                  <Presentation className="h-5 w-5 text-kogas-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">문제해결 중심 멘토링</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">기술교육과 코칭을 통해 후배 직원들이 스스로 성장할 수 있는 환경을 조성합니다.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-kogas-offwhite dark:bg-zinc-800 p-2 rounded-lg">
                  <Target className="h-5 w-5 text-kogas-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">융합적 사고의 실천 (골프 티칭 프로)</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">학구열로 취득한 골프 티칭 프로 자격은 역학적 구조를 스윙에 대입하는 융합적 사고의 산물이며, 세대 간 소통의 매개체가 됩니다.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 w-full">
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-kogas-offwhite dark:bg-zinc-900 border-2 border-kogas-gray/20 flex items-center justify-center p-4 group">
              <div className="absolute inset-0 bg-kogas-blue/5 group-hover:bg-kogas-blue/10 transition-colors z-0"></div>
              
              {/* Golf Mechanics Image Background */}
              <div className="absolute inset-4 rounded-xl overflow-hidden z-10 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1535139262971-c5184570f817?auto=format&fit=crop&q=80&w=800" 
                  alt="Golf Mechanics" 
                  className="w-full h-full object-cover opacity-80 mix-blend-overlay dark:mix-blend-normal dark:opacity-40 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-zinc-900/80 text-white backdrop-blur-sm border-none">메카닉 골프 (Mechanics Golf)</Badge>
                </div>
              </div>

              {/* Character Overlay */}
              <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
                <img 
                  src="/gas-doongi.gif" 
                  alt="가스둥이 리더십" 
                  className="w-48 md:w-64 object-contain drop-shadow-[0_20px_40px_rgba(59,130,246,0.6)] transition-transform duration-700 hover:-translate-y-4" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
