export function Footer() {
  return (
    <footer className="border-t border-kogas-gray/20 bg-white dark:bg-zinc-950 dark:border-zinc-800 py-12">
      <div className="container mx-auto px-4 text-center text-zinc-500 dark:text-zinc-400">
        <p className="flex items-center justify-center gap-2 mb-4 text-lg font-medium">
          <img src="/kogas-logo.png" alt="KOGAS-Tech Logo" className="h-5 w-auto grayscale opacity-80" />
          <span>한국가스기술공사 인천지사 기전부장 최인남</span>
        </p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Choi In-nam. All rights reserved.
        </p>
        <p className="text-xs mt-2 opacity-70">
          본 웹사이트는 <img src="/kogas-logo.png" alt="KOGAS-Tech Logo" className="inline-block h-3 w-auto mx-1 grayscale opacity-70" />한국가스기술공사의 비전과 개인의 기술적 전문성을 바탕으로 제작되었습니다.
        </p>
      </div>
    </footer>
  );
}
