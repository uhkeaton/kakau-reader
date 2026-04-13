import React, { createContext, useContext, useState } from "react";
import type { SplitView } from "./sidebar.helpers";
import { useSearchParams } from "react-router";
import type { Orthography, SplitScreenSide, ThemeMode } from "./url";
import { useQuery } from "@tanstack/react-query";
import { fetchStoryCollections } from "./api.story";

type GlobalContextType = ReturnType<typeof useGlobalContext>;

export type VisibilitySettings = {
  "setting-show-mai-group": boolean;
  closedClassNoCollisions: boolean;
  closedClassSomeCollisions: boolean;
  openClassLevelOne: boolean;
};

function useGlobalContext() {
  const collectionsQuery = useQuery({
    queryKey: ["collections"],
    queryFn: fetchStoryCollections,
  });

  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const orthography: Orthography =
    (searchParams.get("orthography") as Orthography) || "marked";

  function setOrthography(value: Orthography) {
    setSearchParams((searchParams) => {
      searchParams.set("orthography", value);
      return searchParams;
    });
  }

  const theme: ThemeMode = (searchParams.get("theme") as ThemeMode) || "light";

  function setTheme(value: ThemeMode) {
    setSearchParams((searchParams) => {
      searchParams.set("theme", value);
      return searchParams;
    });
  }

  const splitScreenSide: SplitScreenSide =
    (searchParams.get("splitScreenSide") as SplitScreenSide) || "left";

  function setSplitScreenSide(value: SplitScreenSide) {
    setSearchParams((searchParams) => {
      searchParams.set("splitScreenSide", value);
      return searchParams;
    });
  }

  const [visibilitySettings, setVisibilitySettings] =
    useState<VisibilitySettings>({
      "setting-show-mai-group": true,
      closedClassNoCollisions: true,
      closedClassSomeCollisions: true,
      openClassLevelOne: true,
    });

  const [showFurigana, setShowFurigana] = useState(true);

  const [splitView, setSplitView] = useState<SplitView>(false);
  const [fontSize, setFontSize] = useState(5);

  return {
    showFurigana,
    setShowFurigana,

    splitView,
    setSplitView,
    fontSize,
    setFontSize,

    //
    orthography,
    setOrthography,

    //
    theme,
    setTheme,

    //
    visibilitySettings,
    setVisibilitySettings,
    query,
    setQuery,

    //
    splitScreenSide,
    setSplitScreenSide,

    //
    collectionsQuery,
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
