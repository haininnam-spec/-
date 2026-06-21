export function Footer() {
  return (
    <footer className="border-t border-kogas-gray/20 bg-white dark:bg-zinc-950 dark:border-zinc-800 py-12">
      <div className="container mx-auto px-4 text-center text-zinc-500 dark:text-zinc-400">
        <p className="flex items-center justify-center gap-2 mb-4 text-lg font-medium">
          <img src="/kogas-Tech-logo.png" alt="KOGAS-Tech Logo" className="h-5 w-auto grayscale opacity-80" />
          <span>?쒓뎅媛?ㅺ린?좉났???몄쿇吏??湲곗쟾遺??理쒖씤??/span>
        </p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Choi In-nam. All rights reserved.
        </p>
        <p className="text-xs mt-2 opacity-70">
          蹂??뱀궗?댄듃??<img src="/kogas-Tech-logo.png" alt="KOGAS-Tech Logo" className="inline-block h-3 w-auto mx-1 grayscale opacity-70" />?쒓뎅媛?ㅺ린?좉났?ъ쓽 鍮꾩쟾怨?媛쒖씤??湲곗닠???꾨Ц?깆쓣 諛뷀깢?쇰줈 ?쒖옉?섏뿀?듬땲??
        </p>
      </div>
    </footer>
  );
}

