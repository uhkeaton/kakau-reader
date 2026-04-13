import cx from "classnames";
import { ThemeMode } from "./url";
import { useGlobal } from "./useGlobal";
import { StyledButton } from "./StyledButton";
import { IconDarkMode, IconLightMode } from "./icons";

export function ThemeToggle() {
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
      <IconDarkMode className={cx("w-7", { hidden: !isDarkMode })} />
      <IconLightMode className={cx("w-7", { hidden: isDarkMode })} />
    </StyledButton>
  );
}
