import { ThemeMode } from "./url";
import { useGlobal } from "./useGlobal";
import { StyledButton } from "./StyledButton";
import { IconDarkMode, IconLightMode } from "./icons";

export function ButtonTheme() {
  const { theme, setTheme } = useGlobal();
  const isDarkMode = theme === ThemeMode.dark;

  return (
    <StyledButton
      size="sm"
      onClick={() => {
        if (isDarkMode) setTheme(ThemeMode.light);
        else setTheme(ThemeMode.dark);
      }}
    >
      <IconDarkMode className={"w-7 visible-dark"} />
      <IconLightMode className={"w-7 visible-light"} />
    </StyledButton>
  );
}
