import { Button } from "@mui/material";
import TextArea from "./TextArea";
import { IconCheck } from "./icons";
import { IconEdit } from "./icons";
import { useGlobal } from "./useGlobal";
import { SmVis, Block } from "./Vis";
import { Title } from "./Title";
import { label } from "./labels";
import { IconDelete } from "./icons";
import { FuriganaLine, LineContainer } from "./FuriganaLine";
import { ButtonPrint } from "./ButtonPrint";
import { CollectionPreviews } from "./CollectionPreviews";
import {
  viteEnablePrintButton,
  viteEnableSectionCollections,
  viteEnableSectionForm,
} from "./env";

export function HomePage() {
  const {
    isEditing,
    setIsEditing,
    text,
    setText,
    orthography,
    collectionsQuery,
  } = useGlobal();

  return (
    <div
      style={{
        position: "relative",
      }}
      className="min-h-dvh"
    >
      <div className="print:hidden">
        {viteEnableSectionCollections && (
          <>
            <div className="mb-4">
              <div className="mb-6 flex gap-4">
                <Title>{label(orthography, "HeaderTheCollections")}</Title>
                {collectionsQuery?.isLoading && (
                  <>
                    <img
                      className="visible-dark h-8 w-8"
                      src="/loader-dark.gif"
                    />
                    <img
                      className="visible-light h-8 w-8"
                      src="/loader-light.gif"
                    />
                  </>
                )}
              </div>
              <div className="mb-8">
                <CollectionPreviews />
              </div>
            </div>
            <hr className="opacity-10 print:hidden mb-8" />
          </>
        )}
        {viteEnableSectionForm && (
          <>
            <div className="mb-4 flex gap-4 justify-between flex-wrap">
              <Title>{label(orthography, "HeaderForm")}</Title>
              <div className="flex gap-4 justify-end flex-1 content-center">
                <Block when={isEditing}>
                  <div className="">
                    <Button
                      disabled={!text}
                      color="info"
                      sx={{ textTransform: "none" }}
                      onClick={() => setText("")}
                      variant="outlined"
                      className="flex gap-2 text-nowrap"
                    >
                      <SmVis>{label(orthography, "ButtonClearForm")}</SmVis>{" "}
                      <IconDelete className="w-5" />
                    </Button>
                  </div>
                </Block>
                <div className="">
                  <Block when={!isEditing}>
                    <Button
                      color="info"
                      sx={{ textTransform: "none" }}
                      onClick={() => setIsEditing(true)}
                      variant="contained"
                      className="flex gap-2"
                    >
                      {label(orthography, "ButtonEdit")}{" "}
                      <IconEdit className="w-5" />
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
                    setText(e.target.value.normalize("NFC"));
                  }}
                />
              </Block>
              <Block when={!isEditing}>
                <div
                  onClick={() => {
                    setIsEditing(true);
                  }}
                  className="cursor-pointer w-full h-32 bg-(--bg-secondary) rounded-lg p-4 mb-4.5"
                >
                  <div className="opacity-50 max-h-30 line-clamp-3 overflow-hidden">
                    {text}
                  </div>
                </div>
              </Block>
            </div>
            <div className="flex gap-4 justify-end mb-8"></div>
          </>
        )}
      </div>
      <Block when={!!text}>
        <hr className="opacity-10 print:hidden mb-8" />
        <div className="mb-4 flex gap-4 justify-between print:hidden">
          <Title>{label(orthography, "HeaderResult")}</Title>
          <div>{viteEnablePrintButton && <ButtonPrint />}</div>
        </div>
        <div className="min-h-[80dvh] pb-16">
          <LineContainer>
            {text.split("\n").map((line) => {
              return <FuriganaLine text={line} />;
            })}
          </LineContainer>
        </div>
      </Block>
    </div>
  );
}
