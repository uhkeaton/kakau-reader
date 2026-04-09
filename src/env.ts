//  Data Source
export const viteCollectionsUrl = import.meta.env.VITE_COLLECTIONS_URL;

//  Languages
export type DataLanguage = "hawaiian" | "samoan"
export const viteDataLanguage: DataLanguage = import.meta.env.VITE_DATA_LANGUAGE;

type UILanguage = "hawaiian" | "english"
export const viteUILanguage: UILanguage = import.meta.env.VITE_UI_LANGUAGE || "english";

// Logo
export const viteLogoWidth = import.meta.env.VITE_LOGO_WIDTH;
export const viteLogoUrlLight = import.meta.env.VITE_LOGO_URL_LIGHT;
export const viteLogoUrlDark = import.meta.env.VITE_LOGO_URL_DARK;

// Dictionary
export const viteDictionaryUrl = import.meta.env.VITE_DICTIONARY_URL;

export const viteDictionaryAllowedOrigins = (JSON.parse(
  import.meta.env.VITE_DICTIONARY_ALLOWED_ORIGINS,
) || []) as string[];


// Navigation Drawer
export const viteNavDrawerUrl = import.meta.env.VITE_NAV_DRAWER_URL;

export const viteNavDrawerAllowedOrigins = (JSON.parse(
  import.meta.env.VITE_NAV_DRAWER_ALLOWED_ORIGINS,
) || []) as string[];

export const viteNavDrawerAllowedDestinations = (JSON.parse(
  import.meta.env.VITE_NAV_DRAWER_ALLOWED_DESTINATIONS,
) || []) as string[];

// Buttons
export const viteEnableNavLogo = isTrue(import.meta.env.VITE_ENABLE_NAV_LOGO);
export const viteEnableThemeButton = isTrue(import.meta.env.VITE_ENABLE_THEME_BUTTON);
export const viteEnablePrintButton = isTrue(import.meta.env.VITE_ENABLE_PRINT_BUTTON);
export const viteEnableFontSizeButton = isTrue(import.meta.env.VITE_ENABLE_FONT_SIZE_BUTTON);
export const viteEnableNavDrawerButton = isTrue(import.meta.env.VITE_ENABLE_NAV_DRAWER_BUTTON);
export const viteEnableDictionaryButton = isTrue(import.meta.env.VITE_ENABLE_DICTIONARY_BUTTON);
export const viteEnableOrthographyButton = isTrue(import.meta.env.VITE_ENABLE_ORTHOGRAPHY_BUTTON);
export const viteEnableUnmarkedOrthographyLevelsButton = isTrue(import.meta.env.VITE_ENABLE_UNMARKED_ORTHOGRAPHY_LEVELS_BUTTON);
export const viteEnableUnmarkedOrthographySettingsButton = isTrue(import.meta.env.VITE_ENABLE_UNMARKED_ORTHOGRAPHY_SETTINGS_BUTTON);

// Sections
export const viteEnableSectionCollections = isTrue(import.meta.env.VITE_ENABLE_SECTION_COLLECTIONS);
export const viteEnableSectionForm = isTrue(import.meta.env.VITE_ENABLE_SECTION_FORM);



function isTrue(str: string | undefined) {
  return (str || "").toLowerCase() === "true";
}
