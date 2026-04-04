import { Button } from "@mui/material";
import TextArea from "./TextArea";
import { IconCheck } from "./material/IconCheck";
import { IconEdit } from "./material/IconEdit";
import { useGlobal } from "./useGlobal";
import { SmVis, Block } from "./Vis";
import { Title } from "./Title";
import { label } from "./labels";
import { IconDelete } from "./material/IconDelete";
import { Line } from "./Line";
import { useLocation, useNavigate } from "react-router";
import { PrintButton } from "./PrintButton";

export function HomePage() {
  const {
    isEditing,
    setIsEditing,
    text,
    setText,
    orthography,
    collectionsQuery,
  } = useGlobal();

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      style={{
        position: "relative",
      }}
      className="min-h-dvh"
    >
      <div className="print:hidden">
        <div className="mb-4">
          <div className="mb-6 flex gap-4">
            <Title>{label(orthography, "NaWaihona")}</Title>
            {collectionsQuery?.isLoading && (
              <>
                <img className="visible-dark h-8 w-8" src="/loader-dark.gif" />
                <img
                  className="visible-light h-8 w-8"
                  src="/loader-light.gif"
                />
              </>
            )}
          </div>
          <div className="mb-8">
            {collectionsQuery?.data?.collections?.map((c) => {
              return (
                <div
                  className="cursor-pointer mb-5 rounded-lg bg-(--bg-secondary) overflow-hidden"
                  onClick={() => {
                    navigate({
                      pathname: `/waihona/${c.id}`,
                      search: location.search,
                    });
                  }}
                >
                  <div className="pt-2 pb-3 px-3 w-full text-lg opacity-85 hover:opacity-100 hover:bg-neutral-300/10">
                    <div>
                      <span className="font-semibold">{c.title}</span>
                    </div>
                    <div>
                      <span className="text-base opacity-65">{c.subtitle}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <hr className="opacity-10 print:hidden mb-8" />
        <div className="mb-4 flex gap-4 justify-between flex-wrap">
          <Title>{label(orthography, "Pa’i hakahaka")}</Title>
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
                  <SmVis>{label(orthography, "KapaeAku")}</SmVis>{" "}
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
                  {label(orthography, "Hoololi")} <IconEdit className="w-5" />
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
      </div>
      <Block when={!!text}>
        <hr className="opacity-10 print:hidden mb-8" />
        <div className="mb-4 flex gap-4 justify-between print:hidden">
          <Title>Hopena</Title>
          <PrintButton />
        </div>
        <div className="min-h-[80dvh] pb-16">
          {!text && (
            <i className="text-neutral-500 wrap-break-word overflow-hidden">
              {label(orthography, "E hookomo i ka olelo i luna")}
            </i>
          )}
          {text.split("\n").map((line) => {
            return <Line text={line} />;
          })}
        </div>
      </Block>
    </div>
  );
}
