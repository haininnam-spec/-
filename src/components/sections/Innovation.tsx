import { Terminal, Network, ShieldAlert, BarChart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Innovation() {
  return (
    <section className="py-24 px-4 bg-kogas-offwhite dark:bg-zinc-900 overflow-hidden relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-kogas-blue text-kogas-blue dark:border-kogas-beige dark:text-kogas-beige bg-white/50 dark:bg-zinc-900/50">AX (AI Transformation) ?곸떊</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            援ы샇媛 ?꾨땶 <span className="text-kogas-blue">?ㅽ뻾?쇰줈 利앸챸?섎뒗 AX</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            ?⑥닚???먮룞???꾧뎄瑜??섏뼱, 湲곗〈 ?좎?蹂댁닔 以묒떖???ъ뾽援ъ“瑜??곗씠??湲곕컲???섏씡 以묒떖 援ъ“濡??ы렪?섎뒗 ?⑦넧濡쒖?瑜?援ъ텞?섍퀬 ?덉뒿?덈떎.
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
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">?곗씠???⑦넧濡쒖?(Ontology) 湲곕컲 ?먯궛??/h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  ?곗옱???꾩옣??湲곗닠猷??곗씠?곗? ?먭? ?대젰??泥닿퀎?곸쑝濡??곕룞?쒖폒, ?쒓뎅媛?ㅺ났??????꾨━誘몄뾼 湲곗닠?쒕퉬???ъ뾽??湲곕컲???ㅼ쭛?덈떎.
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
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Vibe Coding (?먯뿰??肄붾뵫) ?꾩엯</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Cursor, Antigravity ??理쒖떊 LLM 湲곕컲 媛쒕컻 ?섍꼍???꾩옣???꾩엯?섏뿬, 媛쒕컻?먭? ?꾨땶 ?꾩옣 ?ㅻТ?먭? 吏곸젒 ?????덈뒗 ?뚰봽?몄썾?대? 湲고쉷쨌?ㅺ퀎?⑸땲??
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
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">?ъ엯?몃젰愿由??쒖뒪??& PRD v2.0 吏곸젒 ?ㅺ퀎</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  ERP ?곕룞???쒓퀎瑜?洹밸났?섍린 ?꾪빐 Google Sheets? Apps Script瑜?諛깆뿏?쒕줈 ???ㅼ슜????덉쓣 援ъ텞?덉뒿?덈떎. 湲곌퀎諛섍낵 ?꾧린諛???珥?7媛?寃?щ컲??MD(man-day)瑜??듯빀 愿由ы빀?덈떎.
                </p>
              </div>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0">
            {/* Character positioned creatively over the chart */}
            <div className="absolute -top-16 -right-10 md:-top-24 md:-right-16 w-32 md:w-48 z-20 hover:scale-110 transition-transform">
              <img src="/경로 캐릭터.png" alt="媛?ㅻ뫁??AX?곸떊" className="w-full h-full object-contain drop-shadow-2xl" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-tr from-kogas-blue/20 to-kogas-beige/20 rounded-2xl transform rotate-3 blur-lg"></div>
            <div className="relative bg-white dark:bg-zinc-950 border border-kogas-gray/20 dark:border-zinc-800 rounded-2xl p-8 shadow-xl">
              <div className="flex items-center justify-between mb-8 border-b pb-4 dark:border-zinc-800">
                <h4 className="font-bold text-lg">?먭? 紐⑺몴 ?ъ꽦瑜?(PRD v2.0)</h4>
                <Badge className="bg-kogas-blue text-white">?⑹궛 300% 踰ㅼ튂留덊겕</Badge>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-zinc-700 dark:text-zinc-300">怨좎옣?먭? 紐⑺몴 ?ъ꽦</span>
                    <span className="font-bold text-kogas-blue dark:text-kogas-beige">110%</span>
                  </div>
                  <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-2">
                    <div className="bg-kogas-blue h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-zinc-700 dark:text-zinc-300">?덈갑?먭? 紐⑺몴 ?ъ꽦</span>
                    <span className="font-bold text-kogas-blue dark:text-kogas-beige">95%</span>
                  </div>
                  <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-2">
                    <div className="bg-kogas-blue/80 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-zinc-700 dark:text-zinc-300">?뺢린?먭? 紐⑺몴 ?ъ꽦</span>
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


