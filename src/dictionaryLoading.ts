import { useEffect } from "react";
import { useGlobal } from "./useGlobal";
import { viteDictionaryAllowedOrigins } from "./env";

export const dictionaryLoaderId = "dictionary-loader";

export function setDictionaryLoading(val: boolean) {
  const el = document.getElementById(dictionaryLoaderId);
  if (!el) return;

  const transitionClasses = [
    "transition-opacity",
    "duration-300",
    "ease-in-out",
    "delay-100",
  ];

  if (!val) {
    // Hide by making transparent
    el.classList.add("opacity-0");
    el.classList.remove("opacity-100", ...transitionClasses);
  } else {
    // Show by making fully opaque
    el.classList.add("opacity-100", ...transitionClasses);
    el.classList.remove("opacity-0");
  }
}

export function useListenToDictionary() {
  const { setSplitView } = useGlobal();

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (!viteDictionaryAllowedOrigins.includes(event.origin)) return;

      if (event.data.type === "DICTIONARY_SUCCESS") {
        setDictionaryLoading(false);
        setSplitView("dictionary");
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [setSplitView]);
}
