"use client";

// 한/영 전환 컨텍스트 — localStorage(브라우저 저장소)에 선택 언어 유지
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "ko" | "en";

const STORAGE_KEY = "portfolio-lang";

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
}>({ lang: "ko", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ko");

  useEffect(() => {
    // SSR(정적 export)에서는 localStorage가 없으므로 클라이언트 마운트 후 1회 복원
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "ko") {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- 외부 저장소 복원은 마운트 후에만 가능
        setLangState(saved);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

// lang 상태와 tr(ko, en) 헬퍼 제공
export function useLang() {
  const { lang, setLang } = useContext(LanguageContext);
  const tr = (ko: string, en: string) => (lang === "en" ? en : ko);
  return { lang, setLang, tr };
}
