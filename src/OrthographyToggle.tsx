import cx from "classnames";
import { useGlobal } from "./useGlobal";
import { Orthography } from "./url";
import { IconAMarked, IconAUnmarked } from "./icons";
import { StyledButton } from "./StyledButton";

export function OrthographyToggle() {
  const { orthography, setOrthography, setShowFurigana } = useGlobal();

  return (
    <StyledButton
      // className={cx("cursor-pointer flex items-end justify-end w-full h-full")}
      onClick={() => {
        if (orthography === Orthography.marked) {
          setShowFurigana(false);
          setOrthography(Orthography.unmarked);
        } else {
          setShowFurigana(false);
          setOrthography(Orthography.marked);
        }
      }}
    >
      <div>
        <IconAMarked
          className={cx("w-4", {
            "text-(--text-hl)": orthography == Orthography.marked,
            hidden: orthography !== Orthography.marked,
          })}
        />
        <IconAUnmarked
          className={cx("w-4", {
            hidden: orthography !== Orthography.unmarked,
          })}
        />
      </div>
    </StyledButton>
  );
}
