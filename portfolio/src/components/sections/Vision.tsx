import { CheckCircle2, TrendingUp, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Vision() {
  const visions = [
    {
      title: "안전의 상향평준화",
      description: "예방 중심의 정비체계와 위험성평가 고도화를 통해 무사고·무재해 사업장을 구축하겠습니다.",
      icon: <CheckCircle2 className="h-8 w-8 text-kogas-blue" />,
      delay: "0ms"
    },
    {
      title: "정비체계의 디지털화",
      description: "투입인력관리 시스템을 전사 표준모델로 확장하고, 설비예지보전(Predictive Maintenance) 등 데이터 기반 정비체계를 고도화하겠습니다.",
      icon: <TrendingUp className="h-8 w-8 text-kogas-blue" />,
      delay: "100ms"
    },
    {
      title: "새로운 비즈니스 창출",
      description: "기술료 데이터를 자산화하여 프리미엄 기술서비스 사업화를 추진하고, 한국가스기술공사가 AI 기반 에너지 기술기업으로 성장하는 데 앞장서겠습니다.",
      icon: <Lightbulb className="h-8 w-8 text-kogas-blue" />,
      delay: "200ms"
    }
  ];

  return (
    <section className="py-24 px-4 bg-zinc-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-kogas-darkblue/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-kogas-blue/30 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            관리자로서의 <span className="text-kogas-beige">3대 실천과제</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            지사 및 본사 경영진으로서 한국가스기술공사의 다음 성장을 만들어가겠습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visions.map((vision, index) => (
            <Card key={index} className="bg-zinc-800/50 border-zinc-700/50 backdrop-blur-sm text-white">
              <CardHeader>
                <div className="mb-4 bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                  {vision.icon}
                </div>
                <CardTitle className="text-xl">{vision.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-300 leading-relaxed">
                  {vision.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-zinc-800 text-center">
          <p className="text-xl md:text-2xl font-light italic text-zinc-300 max-w-4xl mx-auto leading-relaxed">
            "현장에서 쌓아온 30년의 기술적 전문성과, 문제를 스스로 코드로 풀어낸 실행력, 
            그리고 사람을 키우는 리더십이 만나는 지점에서 <strong className="text-kogas-beige font-bold">다음 성장</strong>을 만들겠습니다."
          </p>
        </div>
      </div>
    </section>
  );
}
