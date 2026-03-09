import { useEffect, useRef } from "react";

export function IFrame({ query }: { query: string }) {
//   const src = `http://localhost:3000/`;
  const src = `https://huiolelo.georgekwilliamson.workers.dev/`;

  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    iframeRef.current?.contentWindow?.postMessage(
      { type: "SET_QUERY", query },
      "*",
    );
  }, [query]);

  return (
    <div className="w-full h-full overflow-auto overscroll-contain">
      <iframe ref={iframeRef} src={src} width="100%" height="100%" />
    </div>
  );
}
