import { Button } from "@mui/material";
import { IconEdit } from "./icons";
import { useGlobal } from "./useGlobal";
import { SmVis, Block } from "./Vis";
import { Title } from "./Title";
import { label } from "./labels";
import { CollectionPreviews } from "./CollectionPreviews";
import { viteEnableSectionCollections, viteEnableSectionForm } from "./env";
import { unmarked } from "./orthography";
import { useLocation, useNavigate } from "react-router";

export function HomePage() {
  const { orthography, collectionsQuery } = useGlobal();

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
        {viteEnableSectionCollections && (
          <>
            <div className="mb-4">
              <div className="mb-6 flex justify-between">
                <div className="flex gap-4">
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
                <Block when={viteEnableSectionForm}>
                  <Button
                    color="info"
                    sx={{ textTransform: "none" }}
                    onClick={() =>
                      navigate({
                        pathname: `/hakahaka`,
                        search: location.search,
                      })
                    }
                    variant="contained"
                    className="flex gap-2 text-nowrap"
                  >
                    <SmVis>{unmarked(orthography, "Kākau iā ʻoe iho")}</SmVis>{" "}
                    <IconEdit className="w-5" />
                  </Button>
                </Block>
              </div>
              <div className="mb-8">
                <CollectionPreviews />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
