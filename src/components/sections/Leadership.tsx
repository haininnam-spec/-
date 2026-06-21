import { Users, Presentation, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Leadership() {
  return (
    <section className="py-24 px-4 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
              ?щ엺???먯궛?대떎 <br />
              <span className="text-kogas-blue">?몃?瑜??뉖뒗 ?꾩옣??由щ뜑??/span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed text-lg">
              議곗쭅??寃쎌웳?μ? 寃곌뎅 ?щ엺?먭쾶???섏샃?덈떎. 湲곗닠??沅뚯쐞? ?멸컙??移쒗솕?μ쓣 
              ?④퍡 媛뽰텣 由щ뜑??씠?쇰쭚濡?蹂?붿쓽 ?쒓린??議곗쭅???대걚???섏씠?쇨퀬 誘우뒿?덈떎.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-kogas-offwhite dark:bg-zinc-800 p-2 rounded-lg">
                  <Users className="h-5 w-5 text-kogas-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">?뚰넻怨?議곗쑉??愿由ъ옄</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">湲곌퀎? ?꾧린 7媛?寃?щ컲???댁쁺?섎ŉ ?꾩옣???좊줈?ы빆??吏곸젒 ?ｊ퀬 ?섑룊??議곗쭅臾명솕瑜??뺤갑?쒖섟?듬땲??</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-kogas-offwhite dark:bg-zinc-800 p-2 rounded-lg">
                  <Presentation className="h-5 w-5 text-kogas-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">臾몄젣?닿껐 以묒떖 硫섑넗留?/h4>
                  <p className="text-zinc-600 dark:text-zinc-400">湲곗닠援먯쑁怨?肄붿묶???듯빐 ?꾨같 吏곸썝?ㅼ씠 ?ㅼ뒪濡??깆옣?????덈뒗 ?섍꼍??議곗꽦?⑸땲??</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-kogas-offwhite dark:bg-zinc-800 p-2 rounded-lg">
                  <Target className="h-5 w-5 text-kogas-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">?듯빀???ш퀬???ㅼ쿇 (怨⑦봽 ?곗묶 ?꾨줈)</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">?숆뎄?대줈 痍⑤뱷??怨⑦봽 ?곗묶 ?꾨줈 ?먭꺽? ??븰??援ъ“瑜??ㅼ쐷????낇븯???듯빀???ш퀬???곕Ъ?대ŉ, ?몃? 媛??뚰넻??留ㅺ컻泥닿? ?⑸땲??</p>
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
                  <Badge className="bg-zinc-900/80 text-white backdrop-blur-sm border-none">硫붿뭅??怨⑦봽 (Mechanics Golf)</Badge>
                </div>
              </div>

              {/* Character Overlay */}
              <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
                <img 
                  src="/하트 캐릭터.png" 
                  alt="媛?ㅻ뫁??由щ뜑?? 
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


