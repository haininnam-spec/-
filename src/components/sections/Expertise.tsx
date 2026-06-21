import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, PenTool, Cpu, Activity } from "lucide-react";

export function Expertise() {
  const skills = [
    {
      title: "ANSYS 구조 및 유동해석 전문성",
      description: "설비의 응력 집중과 열유체 흐름을 과학적으로 검증하여 최적의 설계를 도출합니다. 가스 저장탱크 보수공사의 PM으로서 해석 데이터를 근거로 공정을 정밀 제어하여 무사고·무결점을 달성했습니다.",
      icon: <Activity className="h-6 w-6 text-kogas-blue" />,
      tags: ["Ansys", "Fluent", "구조해석", "유동해석"]
    },
    {
      title: "SolidWorks 정밀 3D 설계",
      description: "도면상의 복잡한 기계 요소를 정밀한 3D 모델로 구현하며, 시뮬레이션을 위한 완벽한 기초 데이터를 구축합니다.",
      icon: <Cpu className="h-6 w-6 text-kogas-blue" />,
      tags: ["SolidWorks", "3D CAD", "정밀설계"]
    },
    {
      title: "비파괴검사(NDT) 정밀 진단 체계",
      description: "침투탐상(PT), 초음파탐상(UT), 누설탐상(LT) 등 전문 자격을 바탕으로 현장의 미세한 결함까지 놓치지 않는 빈틈없는 안전관리 체계를 운영합니다.",
      icon: <Search className="h-6 w-6 text-kogas-blue" />,
      tags: ["PT", "UT", "LT", "산업안전"]
    },
    {
      title: "기계공학 현장 실무 30년",
      description: "서울과학기술대학교 기계공학 학사, 인하대학교 기계공학 석사를 거쳐 1996년 입사 이래 천연가스 공급설비의 유지보수를 총괄해 왔습니다.",
      icon: <PenTool className="h-6 w-6 text-kogas-blue" />,
      tags: ["기계공학", "유지보수", "가스설비"]
    }
  ];

  return (
    <section className="py-24 px-4 bg-white dark:bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            현장에서 시작해 <span className="text-kogas-blue">숫자로 증명한 신뢰</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            이론적 지식과 30년 현장의 감각을 결합하여 가장 안전하고 효율적인 엔지니어링 솔루션을 제공합니다.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Character Image Left */}
          <div className="hidden lg:flex w-1/3 justify-center relative">
            <div className="absolute inset-0 bg-kogas-beige/20 rounded-full blur-3xl animate-pulse" />
            <img 
              src="/gas-doongi-cool.png" 
              alt="가스둥이 전문성" 
              className="w-full max-w-md object-contain z-10 drop-shadow-xl" 
            />
          </div>

          {/* Cards Right */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {skills.map((skill, index) => (
              <Card key={index} className="border-kogas-gray/20 dark:border-zinc-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-3 bg-kogas-offwhite dark:bg-zinc-900 rounded-lg">
                    {skill.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold">{skill.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-kogas-offwhite text-zinc-800 hover:bg-kogas-beige dark:bg-zinc-800 dark:text-zinc-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
