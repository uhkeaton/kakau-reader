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
import { viteEnablePrintButton } from "./env";
import { useEffect, useState } from "react";

export function PageHakahaka() {
  const { orthography } = useGlobal();

  const keyHakahakaText = "hakahaka-text";

  const [hakahakaText, setHakahakaText] = useState(() => {
    const stored = localStorage.getItem(keyHakahakaText);
    return stored || "";
  });

  const [isEditingHakahaka, setIsEditingHakahaka] = useState(!hakahakaText);

  useEffect(() => {
    localStorage.setItem(keyHakahakaText, hakahakaText);
  }, [hakahakaText]);

  return (
    <div
      style={{
        position: "relative",
      }}
      className="min-h-dvh"
    >
      <div className="print:hidden">
        <div className="mb-4 flex gap-4 justify-between flex-wrap">
          <Title>{label(orthography, "HeaderForm")}</Title>
          <div className="flex gap-4 justify-end flex-1 content-center">
            <Block when={isEditingHakahaka}>
              <div className="">
                <Button
                  disabled={!hakahakaText}
                  color="info"
                  sx={{ textTransform: "none" }}
                  onClick={() => setHakahakaText("")}
                  variant="outlined"
                  className="flex gap-2 text-nowrap"
                >
                  <SmVis>{label(orthography, "ButtonClearForm")}</SmVis>{" "}
                  <IconDelete className="w-5" />
                </Button>
              </div>
            </Block>
            <div className="">
              <Block when={!isEditingHakahaka}>
                <Button
                  color="info"
                  sx={{ textTransform: "none" }}
                  onClick={() => setIsEditingHakahaka(true)}
                  variant="contained"
                  className="flex gap-2"
                >
                  {label(orthography, "ButtonEdit")}{" "}
                  <IconEdit className="w-5" />
                </Button>
              </Block>

              <Block when={isEditingHakahaka}>
                <Button
                  disabled={!hakahakaText}
                  color="info"
                  sx={{ textTransform: "none" }}
                  onClick={() => setIsEditingHakahaka(false)}
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
          <Block when={isEditingHakahaka}>
            <TextArea
              value={hakahakaText}
              onChange={(e) => {
                setHakahakaText(e.target.value.normalize("NFC"));
              }}
            />
          </Block>
          <Block when={!isEditingHakahaka}>
            <div
              onClick={() => {
                setIsEditingHakahaka(true);
              }}
              className="cursor-pointer w-full h-32 bg-(--bg-secondary) rounded-lg p-4 mb-4.5"
            >
              <div className="opacity-50 max-h-30 line-clamp-3 overflow-hidden">
                {hakahakaText}
              </div>
            </div>
          </Block>
        </div>
        <div className="flex gap-4 justify-end mb-8"></div>
      </div>
      <Block when={!!hakahakaText}>
        <hr className="opacity-10 print:hidden mb-8" />
        <div className="mb-4 flex gap-4 justify-between print:hidden">
          <Title>{label(orthography, "HeaderResult")}</Title>
          <div>{viteEnablePrintButton && <ButtonPrint />}</div>
        </div>
        <div className="min-h-[80dvh] pb-16">
          <LineContainer>
            {hakahakaText.split("\n").map((line) => {
              return <FuriganaLine text={line} />;
            })}
          </LineContainer>
        </div>
      </Block>
    </div>
  );
}
