import {
  Button,
  FormControl,
  InputLabel,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import TextArea from "./TextArea";
import { useEffect } from "react";
import { shouldKnow, shouldShow } from "./constants";
import cx from "classnames";
import { IconCheck } from "./material/IconCheck";
import { Kakaupii } from "./material/Kahapii";
import { IconEdit } from "./material/IconEdit";
import { IconFullscreen } from "./material/IconFullscreen";
import { IconPrint } from "./material/IconPrint";
import { useGlobal } from "./useGlobal";
import {
  coerceOkinas,
  removeDoubleVowelOkinas,
  removeHawaiianDiacritics,
  removePunctuation,
} from "./helpers";
import { SmVis, Block } from "./Vis";
import { StickyNav } from "./StickyHeader";
import { Title } from "./Title";
import { storyGroups } from "./stories";
import { alertIfNotAlphabetical } from "./niihauDictionary";
import { label } from "./labels";
import { IconDelete } from "./material/IconDelete";
import { AboutDialog } from "./AboutDialog";
import { APA } from "./Quote";
import { Sidebar } from "./Sidebar";
import { Levels } from "./Levels";
// import { Flyer } from "./Flyer";

alertIfNotAlphabetical();

function App() {
  // return <Flyer />;
  const { text, isFullscreen, isSplitView } = useGlobal();

  return (
    <div
      className={cx(
        "relative px-8 pt-8",

        {
          "sm:ml-96 print:ml-0": isSplitView,
        },
      )}
    >
      <div
        className={cx(
          "sm:w-96 w-full print:hidden fixed left-0 top-0 z-12 h-dvh",
          {
            hidden: !isSplitView,
            block: isSplitView,
          },
        )}
      >
        <Sidebar />
      </div>
      <div
        className={cx("m-auto max-w-5xl", {
          // "sm:block hidden": isSplitView,
        })}
      >
        <Block when={!isFullscreen}>
          <div className="flex justify-between mb-2 print:hidden">
            <Kakaupii />
            <div className="print:hidden flex items-center gap-4">
              <AboutDialog />
              <div
                onClick={() => window.print()}
                className="opacity-50 hover:opacity-100 cursor-pointer"
              >
                <IconPrint className="w-6" />
              </div>
            </div>
          </div>
        </Block>

        <StickyNav />
        {isFullscreen ? (
          <div className="min-h-[80dvh]">
            {text.split("\n").map((line) => {
              return <Line text={line} />;
            })}
          </div>
        ) : (
          <Body />
        )}
        <BottomNav />
      </div>
    </div>
  );
}

export default App;

// https://mui.com/material-ui/react-select/
function StorySelect() {
  const { text, setText, setIsEditing } = useGlobal();

  const handleChange = (event: SelectChangeEvent) => {
    const val = event.target.value;
    if (!val) setIsEditing(true);
    else setIsEditing(false);
    setText(val as string);
  };
  return (
    <div className="w-full sm:w-fit">
      <FormControl sx={{ minWidth: 120, width: "100%" }}>
        <InputLabel htmlFor="grouped-native-select">Moolelo</InputLabel>
        <Select
          native
          defaultValue=""
          id="grouped-native-select"
          value={text}
          onChange={handleChange}
          label="Grouping"
        >
          <option aria-label="None" value="" />
          {storyGroups.map((group) => {
            return (
              <optgroup label={group.title}>
                {group.stories.map((story) => {
                  return <option value={story.text}>{story.title}</option>;
                })}
              </optgroup>
            );
          })}
          {/* <optgroup label="Category 2">
            <option value={3}>Option 3</option>
            <option value={4}>Option 4</option>
          </optgroup> */}
        </Select>
      </FormControl>
    </div>
  );
}

function Body() {
  const { isEditing, setIsEditing, setIsFullscreen, text, setText, modeTK } =
    useGlobal();

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        whiteSpace: "normal",
        lineHeight: 2,
        position: "relative",
      }}
    >
      <div className="print:hidden">
        <div className="mb-4 flex gap-4 justify-between flex-wrap">
          <Title>Pa’i hakahaka</Title>
        </div>
        <div className="mb-4 flex gap-4 justify-between flex-wrap">
          <StorySelect />
          {/* <Vis when={isEditing}>
              <Button
                // color="inherit"
                sx={{ textTransform: "none" }}
                onClick={() => setText(getRandomExample())}
                variant="outlined"
                className="flex gap-2 text-nowrap"
              >
                <SmVis>Ana Hoohalike</SmVis> <IconShuffle className="w-5" />
              </Button>
            </Vis> */}
          <div className="flex gap-4 justify-end flex-1 content-center">
            <Block when={isEditing}>
              <div className="my-4">
                <Button
                  disabled={!text}
                  color="info"
                  sx={{ textTransform: "none" }}
                  onClick={() => setText("")}
                  variant="outlined"
                  className="flex gap-2 text-nowrap"
                >
                  <SmVis>Kapae aku</SmVis> <IconDelete className="w-5" />
                </Button>
              </div>
            </Block>
            <div className="my-4">
              <Block when={!isEditing}>
                <Button
                  color="info"
                  sx={{ textTransform: "none" }}
                  onClick={() => setIsEditing(true)}
                  variant="contained"
                  className="flex gap-2"
                >
                  Hoololi <IconEdit className="w-5" />
                </Button>
              </Block>

              <Block when={isEditing}>
                <Button
                  disabled={!text}
                  color="info"
                  sx={{ textTransform: "none" }}
                  onClick={() => setIsEditing(false)}
                  variant="contained"
                  className="flex gap-2 text-nowrap"
                >
                  <SmVis>Pau</SmVis> <IconCheck className="w-5" />
                </Button>
              </Block>
            </div>
          </div>
        </div>
        <div className="h-full mb-2">
          <Block when={isEditing}>
            <TextArea
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </Block>
          <Block when={!isEditing}>
            <div className="w-full h-32 bg-neutral-100 rounded-lg p-4 mb-4.5">
              <div className="opacity-50 max-h-30 line-clamp-3 overflow-hidden">
                {text}
              </div>
            </div>
          </Block>
        </div>
        <div className="flex gap-4 justify-end mb-8"></div>
      </div>
      <hr className="opacity-10 print:hidden mb-8" />
      <div className="mb-4 flex gap-4 justify-between print:hidden">
        <Title>Hopena</Title>

        <div>
          <Button
            color="primary"
            sx={{ textTransform: "none" }}
            onClick={() => setIsFullscreen(true)}
            variant="outlined"
            className="flex gap-2"
          >
            <SmVis>Nana Pono</SmVis>
            <IconFullscreen className="w-5" />
          </Button>
        </div>
      </div>
      <div className="min-h-[80dvh] cursor-default">
        {!text && <APA>{label(modeTK, "E hookomo i ka olelo i luna")}</APA>}
        {text.split("\n").map((line) => {
          return <Line text={line} />;
        })}
      </div>
    </div>
  );
}

// function Copyright() {
//   return (
//     <div className="print:hidden opacity-50 text-sm">
//       <div className="p-2 flex justify-center">
//         <div>© 2026 Keaton Williamson</div>
//       </div>
//     </div>
//   );
// }

function getFontSize(num: number): number {
  if (num === 15) return 44;
  if (num === 14) return 42;
  if (num === 13) return 40;
  if (num === 12) return 38;
  if (num === 11) return 36;
  if (num === 10) return 34;
  if (num === 9) return 32;
  if (num === 8) return 30;
  if (num === 7) return 28;
  if (num === 6) return 26;
  if (num === 5) return 24;
  if (num === 4) return 22;
  if (num === 3) return 20;
  if (num === 2) return 18;
  if (num === 1) return 16;
  return 16;
}

export function Line({ text }: { text: string }) {
  const {
    showFurigana,
    fontSize,
    visibilitySettings,
    setQuery,
    setIsSplitView,
  } = useGlobal();
  const opacity = showFurigana ? 40 : 0;

  return (
    <div
      style={{
        fontSize: getFontSize(fontSize),
        // color: "white",
        // fontSize: 48
      }}
    >
      {text.split(" ").map((token) => {
        const { leading, core: word, trailing } = removePunctuation(token);
        //
        const removed = removeHawaiianDiacritics(word);
        const removedDoubleVowel = removeDoubleVowelOkinas(word);
        const coercedOkina = coerceOkinas(word);
        const onlyHasDoubleVowelOkina = removed == removedDoubleVowel;

        const shouldShowFull = shouldShow(
          coercedOkina,
          visibilitySettings["setting-show-mai-group"],
        );

        const showRuby =
          word != removed &&
          !onlyHasDoubleVowelOkina &&
          !shouldKnow(coercedOkina, visibilitySettings) &&
          !shouldShowFull;

        const text = shouldShowFull ? word : removed;

        return (
          <>
            <span
              onClick={() => {
                setIsSplitView("dictionary");
                setQuery(removed);
              }}
              className="inline-block"
            >
              <ruby>
                {leading}
                <span className="hover:underline hover:opacity-50">{text}</span>
                {trailing}
                <rt
                  style={{
                    opacity: showRuby ? `${opacity}%` : "0%",
                    userSelect: "none",
                  }}
                >
                  {word}
                </rt>
              </ruby>
            </span>
            {"\u00A0"}
          </>
        );
      })}
    </div>
  );
}

// function SmHid({ children }: { children: React.ReactNode }) {
//   return <div className={"sm:inline-block hidden"}>{children}</div>;
// }

function BottomNav() {
  return (
    <div className="print:hidden sticky bottom-0 z-10 bg-white">
      <hr className="opacity-10" />

      <div className="flex gap-2 justify-between print:hidden pt-4 pb-4">
        <div className="flex-0"></div>
        <div className="flex-1 flex justify-center gap-4 items-center">
          <SpaceBar />
          <Levels />
        </div>

        <div className="flex-0"></div>
      </div>
    </div>
  );
}

function SpaceBar() {
  const { showFurigana, setShowFurigana, spaceDown, setSpaceDown, modeTK } =
    useGlobal();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ignore typing in inputs
      const target = event.target as HTMLElement;

      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      if (event.code === "Space") {
        event.preventDefault(); // stop page scroll
        setShowFurigana((s) => !s);
        setSpaceDown(true);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      // Ignore typing in inputs
      const target = event.target as HTMLElement;

      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      if (event.code === "Space") {
        event.preventDefault(); // stop page scroll
        setSpaceDown(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [setShowFurigana, setSpaceDown]);

  return (
    <div
      onClick={() => {
        setShowFurigana((s) => !s);
      }}
      className="select-none relative w-full bg-neutral-200 rounded-lg h-8 cursor-pointer min-w-40 max-w-sm"
    >
      &nbsp;
      <div
        className={cx(
          {
            "-top-1": !spaceDown,
            "-top-0.5": spaceDown,
          },
          "absolute w-full bg-gray-100 rounded-md h-8 flex items-center justify-center gap-2",
          {},
        )}
      >
        <div className="basis-1/2 flex justify-end">
          <span className="opacity-30">[Space]</span>
        </div>
        <div className="basis-1/2 flex justify-start">
          {showFurigana ? "hoohuna" : label(modeTK, "hoike")}
        </div>
      </div>
    </div>
  );
}
