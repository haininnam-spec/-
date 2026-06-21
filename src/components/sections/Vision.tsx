import { CheckCircle2, TrendingUp, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Vision() {
  const visions = [
    {
      title: "?덉쟾???곹뼢?됱???,
      description: "?덈갑 以묒떖???뺣퉬泥닿퀎? ?꾪뿕?깊룊媛 怨좊룄?붾? ?듯빐 臾댁궗怨졖룸Т?ы빐 ?ъ뾽?μ쓣 援ъ텞?섍쿋?듬땲??",
      icon: <CheckCircle2 className="h-8 w-8 text-kogas-blue" />,
      delay: "0ms"
    },
    {
      title: "?뺣퉬泥닿퀎???붿??명솕",
      description: "?ъ엯?몃젰愿由??쒖뒪?쒖쓣 ?꾩궗 ?쒖?紐⑤뜽濡??뺤옣?섍퀬, ?ㅻ퉬?덉?蹂댁쟾(Predictive Maintenance) ???곗씠??湲곕컲 ?뺣퉬泥닿퀎瑜?怨좊룄?뷀븯寃좎뒿?덈떎.",
      icon: <TrendingUp className="h-8 w-8 text-kogas-blue" />,
      delay: "100ms"
    },
    {
      title: "?덈줈??鍮꾩쫰?덉뒪 李쎌텧",
      description: "湲곗닠猷??곗씠?곕? ?먯궛?뷀븯???꾨━誘몄뾼 湲곗닠?쒕퉬???ъ뾽?붾? 異붿쭊?섍퀬, ?쒓뎅媛?ㅺ린?좉났?ш? AI 湲곕컲 ?먮꼫吏 湲곗닠湲곗뾽?쇰줈 ?깆옣?섎뒗 ???욎옣?쒓쿋?듬땲??",
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
            愿由ъ옄濡쒖꽌??<span className="text-kogas-beige">3? ?ㅼ쿇怨쇱젣</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            吏??諛?蹂몄궗 寃쎌쁺吏꾩쑝濡쒖꽌 ?쒓뎅媛?ㅺ린?좉났?ъ쓽 ?ㅼ쓬 ?깆옣??留뚮뱾?닿?寃좎뒿?덈떎.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visions.map((vision, index) => (
            <Card key={index} className="bg-zinc-800/50 border-zinc-700/50 backdrop-blur-sm text-white hover:bg-zinc-800 transition-colors">
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

        <div className="mt-20 pt-10 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-32 h-32 md:w-48 md:h-48 relative flex-shrink-0">
            <div className="absolute inset-0 bg-kogas-beige/10 rounded-full blur-xl animate-pulse" />
            <img 
              src="/안전제일 캐릭터.png" 
              alt="鍮꾩쟾???쒖떆?섎뒗 媛?ㅻ뫁?? 
              className="relative z-10 w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(255,255,255,0.1)]" 
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-xl md:text-2xl font-light italic text-zinc-300 max-w-3xl leading-relaxed">
              "?꾩옣?먯꽌 ?볦븘??30?꾩쓽 湲곗닠???꾨Ц?깃낵, 臾몄젣瑜??ㅼ뒪濡?肄붾뱶濡???대궦 ?ㅽ뻾?? 
              洹몃━怨??щ엺???ㅼ슦??由щ뜑??씠 留뚮굹??吏?먯뿉??<br className="hidden md:block"/>
              <strong className="text-kogas-beige font-bold text-2xl md:text-3xl inline-block mt-2">?ㅼ쓬 ?깆옣??留뚮뱾寃좎뒿?덈떎.</strong>"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


