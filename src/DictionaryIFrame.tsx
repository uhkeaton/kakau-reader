import { useEffect, useRef, useState } from "react";
import { useListenToDictionary } from "./dictionaryLoading";
import type { ThemeMode } from "./url";
import { viteDictionaryUrl } from "./env";

function updateQuery(
  iframeRef: React.RefObject<HTMLIFrameElement | null>,
  query: string,
) {
  iframeRef.current?.contentWindow?.postMessage(
    { type: "SET_QUERY", query },
    "*",
  );
}
function updateTheme(
  iframeRef: React.RefObject<HTMLIFrameElement | null>,
  theme: ThemeMode,
) {
  iframeRef.current?.contentWindow?.postMessage(
    { type: "SET_THEME", theme },
    "*",
  );
}

export function DictionaryIFrame({
  query,
  theme,
}: {
  query: string;
  theme: ThemeMode;
}) {
  useListenToDictionary();

  const base = viteDictionaryUrl;
  const [src] = useState(() => {
    return `${base}/?theme=${theme}`;
  });

  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    updateQuery(iframeRef, query);
  }, [query]);

  useEffect(() => {
    updateTheme(iframeRef, theme);
  }, [theme]);

  return (
    <div className="w-full h-full overflow-hidden">
      <iframe ref={iframeRef} src={src} width="100%" height="100%" />
    </div>
  );
}
