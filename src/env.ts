export const viteCollectionsUrl = import.meta.env.VITE_COLLECTIONS_URL;

export const viteLogoWidth = import.meta.env.VITE_LOGO_WIDTH;
export const viteLogoUrlLight = import.meta.env.VITE_LOGO_URL_LIGHT;
export const viteLogoUrlDark = import.meta.env.VITE_LOGO_URL_DARK;

export const viteDictionaryUrl = import.meta.env.VITE_DICTIONARY_URL;
export const viteDictionaryAllowedOrigins = (JSON.parse(
  import.meta.env.VITE_DICTIONARY_ALLOWED_ORIGINS,
) || []) as string[];

export const viteNavDrawerUrl = import.meta.env.VITE_NAV_DRAWER_URL;
export const viteNavDrawerAllowedOrigins = (JSON.parse(
  import.meta.env.VITE_NAV_DRAWER_ALLOWED_ORIGINS,
) || []) as string[];
export const viteNavDrawerAllowedDestinations = (JSON.parse(
  import.meta.env.VITE_NAV_DRAWER_ALLOWED_DESTINATIONS,
) || []) as string[];
