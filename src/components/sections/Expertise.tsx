import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, PenTool, Cpu, Activity } from "lucide-react";

export function Expertise() {
  const skills = [
    {
      title: "ANSYS 援ъ“ 諛??좊룞?댁꽍 ?꾨Ц??,
      description: "?ㅻ퉬???묐젰 吏묒쨷怨??댁쑀泥??먮쫫??怨쇳븰?곸쑝濡?寃利앺븯??理쒖쟻???ㅺ퀎瑜??꾩텧?⑸땲?? 媛????ν꺊??蹂댁닔怨듭궗??PM?쇰줈???댁꽍 ?곗씠?곕? 洹쇨굅濡?怨듭젙???뺣? ?쒖뼱?섏뿬 臾댁궗怨졖룸Т寃곗젏???ъ꽦?덉뒿?덈떎.",
      icon: <Activity className="h-6 w-6 text-kogas-blue" />,
      tags: ["Ansys", "Fluent", "援ъ“?댁꽍", "?좊룞?댁꽍"]
    },
    {
      title: "SolidWorks ?뺣? 3D ?ㅺ퀎",
      description: "?꾨㈃?곸쓽 蹂듭옟??湲곌퀎 ?붿냼瑜??뺣???3D 紐⑤뜽濡?援ы쁽?섎ŉ, ?쒕??덉씠?섏쓣 ?꾪븳 ?꾨꼍??湲곗큹 ?곗씠?곕? 援ъ텞?⑸땲??",
      icon: <Cpu className="h-6 w-6 text-kogas-blue" />,
      tags: ["SolidWorks", "3D CAD", "?뺣??ㅺ퀎"]
    },
    {
      title: "鍮꾪뙆愿닿???NDT) ?뺣? 吏꾨떒 泥닿퀎",
      description: "移⑦닾?먯긽(PT), 珥덉쓬?뚰깘??UT), ?꾩꽕?먯긽(LT) ???꾨Ц ?먭꺽??諛뷀깢?쇰줈 ?꾩옣??誘몄꽭??寃고븿源뚯? ?볦튂吏 ?딅뒗 鍮덊땲?녿뒗 ?덉쟾愿由?泥닿퀎瑜??댁쁺?⑸땲??",
      icon: <Search className="h-6 w-6 text-kogas-blue" />,
      tags: ["PT", "UT", "LT", "?곗뾽?덉쟾"]
    },
    {
      title: "湲곌퀎怨듯븰 ?꾩옣 ?ㅻТ 30??,
      description: "?쒖슱怨쇳븰湲곗닠??숆탳 湲곌퀎怨듯븰 ?숈궗, ?명븯??숆탳 湲곌퀎怨듯븰 ?앹궗瑜?嫄곗퀜 1996???낆궗 ?대옒 泥쒖뿰媛??怨듦툒?ㅻ퉬???좎?蹂댁닔瑜?珥앷큵???붿뒿?덈떎.",
      icon: <PenTool className="h-6 w-6 text-kogas-blue" />,
      tags: ["湲곌퀎怨듯븰", "?좎?蹂댁닔", "媛?ㅼ꽕鍮?]
    }
  ];

  return (
    <section className="py-24 px-4 bg-white dark:bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            ?꾩옣?먯꽌 ?쒖옉??<span className="text-kogas-blue">?レ옄濡?利앸챸???좊ː</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            ?대줎??吏?앷낵 30???꾩옣??媛먭컖??寃고빀?섏뿬 媛???덉쟾?섍퀬 ?⑥쑉?곸씤 ?붿??덉뼱留??붾（?섏쓣 ?쒓났?⑸땲??
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Character Image Left */}
          <div className="hidden lg:flex w-1/3 justify-center relative">
            <div className="absolute inset-0 bg-kogas-beige/20 rounded-full blur-3xl animate-pulse" />
            <img 
              src="/설계 캐릭터.png" 
              alt="媛?ㅻ뫁???꾨Ц?? 
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


