import { useLayoutEffect, useRef } from "react";
import { useGlobal } from "./useGlobal";
import { useLocation, useNavigate } from "react-router";

export function CollectionPreviewContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = gridRef.current;
    if (!container) return;

    const observer = new ResizeObserver(() => {
      const width = container.clientWidth;
      const MIN_WIDTH = 271;
      const itemsPerRow = Math.max(1, Math.floor(width / MIN_WIDTH));
      container.style.setProperty("--items-per-row", itemsPerRow.toString());
    });

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={gridRef} className="flex flex-wrap justify-start">
      {children}
    </div>
  );
}

export function CollectionPreviews() {
  const { collectionsQuery } = useGlobal();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (collectionId: string) => {
    navigate({
      pathname: `/waihona/${collectionId}`,
      search: location.search,
    });
  };

  if (collectionsQuery?.isLoading) {
    return (
      <CollectionPreviewContainer>
        <CollectionSkeleton />
        <CollectionSkeleton />
        <CollectionSkeleton />
      </CollectionPreviewContainer>
    );
  }

  const hasPreviewImage = (collectionsQuery?.data?.collections ?? [])?.filter(
    (c) => c.previewImageSrc,
  );
  const notHasPreviewImage = (
    collectionsQuery?.data?.collections ?? []
  )?.filter((c) => !c.previewImageSrc);
  return (
    <>
      <CollectionPreviewContainer>
        {hasPreviewImage.map((c, i) => {
          return (
            <CollectionPreview
              id={c.id}
              imgSrc={c.previewImageSrc}
              title={c.title}
              subtitle={c.subtitle}
              onClick={() => {
                handleClick(c.id);
              }}
              i={i}
            />
          );
        })}
      </CollectionPreviewContainer>
      {notHasPreviewImage.map((c) => {
        return (
          <div
            className="cursor-pointer mb-5 rounded-lg bg-(--bg-secondary) overflow-hidden"
            onClick={() => {
              handleClick(c.id);
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
    </>
  );
}

function CollectionPreview({
  id,
  imgSrc,
  title,
  subtitle,
  onClick,
  i,
}: {
  id: string;
  imgSrc: string | undefined;
  title: string;
  subtitle: string;
  onClick: () => void;
  i: number;
}) {
  return (
    <div
      key={id}
      onClick={onClick}
      className="rise-in mb-8 mx-2 cursor-pointer"
      style={{
        width: "calc(100% / var(--items-per-row, 1) - 16px - 0.01px)",
        animationDelay: `${i * 90 + 80}ms`,
      }}
    >
      <div className="flex flex-col">
        <div className="relative w-full aspect-[16/9] overflow-hidden  rounded-xl">
          <div className="bg-black/10 absolute top-0 bottom-0 left-0 right-0 animate-pulse" />
          <img
            src={imgSrc}
            className="absolute top-0 bottom-0 left-0 right-0 w-full h-full object-cover"
          />
        </div>
        <div>
          <div className={"font-semibold mt-3 mb-1"}>{title}</div>
          <div className={"text-gray-500"}>{subtitle}</div>
        </div>
      </div>
    </div>
  );
}

function CollectionSkeleton() {
  return (
    <div
      className="mb-8 mx-2"
      style={{
        width: "calc(100% / var(--items-per-row, 1) - 16px - 0.01px)",
      }}
    >
      <div className="flex flex-col">
        <div className="relative w-full aspect-[16/9] overflow-hidden  rounded-xl">
          <div className="bg-gray-300/20 animate-pulse absolute top-0 bottom-0 left-0 right-0 animate-pulse" />
        </div>
        <div>
          <div
            className={
              "rounded bg-gray-300/20 animate-pulse font-semibold mt-3 mb-1 text-transparent"
            }
          >
            {"--"}
          </div>
          <div
            className={"rounded bg-gray-300/20 animate-pulse text-transparent"}
          >
            {"--"}
          </div>
        </div>
      </div>
    </div>
  );
}
