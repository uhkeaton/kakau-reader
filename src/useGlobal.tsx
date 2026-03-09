import React, { createContext, useContext, useEffect, useState } from "react";
import { isAStory } from "./stories";
import { useLocalStorage } from "./useLocalStorage";

type GlobalContextType = ReturnType<typeof useGlobalContext>;

const keyText = "text";
const keyModeTK = "mode-tk";
const keyVisibiltySettings = "visibility-settings";

export type VisibilitySettings = {
  "setting-show-mai-group": boolean;
  closedClassNoCollisions: boolean;
  closedClassSomeCollisions: boolean;
  closedClassMoreCollisions: boolean;
  openClassLevelOne: boolean;
};

function useGlobalContext() {
  const [query, setQuery] = useState("");
  // const [modeTK, setModeTK] = useState<"t" | "k">("k");
  const [modeTK, setModeTK] = useLocalStorage<"t" | "k">(keyModeTK, "k");

  const [visibilitySettings, setVisibilitySettings] =
    useLocalStorage<VisibilitySettings>(keyVisibiltySettings, {
      "setting-show-mai-group": true,
      closedClassNoCollisions: true,
      closedClassSomeCollisions: true,
      closedClassMoreCollisions: true,
      openClassLevelOne: true,
    });

  //
  const [text, setText] = useState(() => {
    const stored = localStorage.getItem(keyText);
    if (isAStory(stored || "")) return "";
    return stored || "";
  });

  useEffect(() => {
    localStorage.setItem(keyText, text);
  }, [text]);

  const [spaceDown, setSpaceDown] = useState(false);
  const [showFurigana, setShowFurigana] = useState(true);

  const [isEditing, setIsEditing] = useState(!text);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSplitView, setIsSplitView] = useState<
    "filter" | "dictionary" | false
  >(false);
  const [fontSize, setFontSize] = useState(3);

  return {
    spaceDown,
    setSpaceDown,
    showFurigana,
    setShowFurigana,
    isEditing,
    setIsEditing,
    isFullscreen,
    setIsFullscreen,
    text,
    setText,
    isSplitView,
    setIsSplitView,
    fontSize,
    setFontSize,
    modeTK,
    setModeTK,
    visibilitySettings,
    setVisibilitySettings,
    query,
    setQuery,
  };
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const ctx = useGlobalContext();
  return (
    <GlobalContext.Provider value={ctx}>{children}</GlobalContext.Provider>
  );
};

// eslint-disable-next-line
export const useGlobal = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal must be used within an GlobalProvider");
  }
  return context;
};
