import { viteLogoUrlDark, viteLogoUrlLight, viteLogoWidth } from "./env";

export function Logo() {
  return (
    <>
      <img
        style={{ width: viteLogoWidth || 144 }}
        className="visible-light mb-2 w-40 pointer-events-none"
        src={viteLogoUrlLight}
      />
      <img
        style={{ width: viteLogoWidth || 144 }}
        className="visible-dark mb-2 w-40 pointer-events-none"
        src={viteLogoUrlDark}
      />
    </>
  );
}
