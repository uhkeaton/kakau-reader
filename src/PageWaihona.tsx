import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { useGlobal } from "./useGlobal";
import { Title } from "./Title";
import cx from "classnames";
import { sortByDayCyclicalPredicate } from "./sorts";
import { Markdown } from "./Markdown";

export function WaihonaPage() {
  const { collectionsQuery } = useGlobal();
  if (collectionsQuery?.isLoading) {
    return (
      <div className="min-h-dvh">
        <img
          className="visible-light w-16 h-16 m-auto"
          src="/loader-light.gif"
        />
        <img className="visible-dark w-16 h-16 m-auto" src="/loader-dark.gif" />
      </div>
    );
  }
  return <Outlet />;
}

export function WaihonaHomePage() {
  const { waihonaId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { collectionsQuery } = useGlobal();

  const currentCollection = collectionsQuery?.data?.collections?.find(
    (c) => c.id === waihonaId,
  );

  const stories = (currentCollection?.stories ?? []).sort(
    sortByDayCyclicalPredicate,
  );

  return (
    <div className="min-h-dvh flex flex-col">
      <div className="border-b border-(--line) mx-3 mb-6">
        <div className="mb-6">
          <Title>{currentCollection?.title}</Title>
        </div>
        {currentCollection?.descriptionMarkdown && (
          <Markdown markdown={currentCollection?.descriptionMarkdown} />
        )}
      </div>
      <div className="mb-8">
        {stories.map((s, i) => {
          return (
            <div
              className={cx("cursor-pointer", {
                "border-b border-(--line)": i != stories.length - 1,
              })}
              onClick={() => {
                navigate({
                  pathname: `/waihona/${currentCollection?.id}/moolelo/${s.id}`,
                  search: location.search,
                });
              }}
            >
              <div className="p-2 px-3 rounded w-full text-lg opacity-85 hover:opacity-100 hover:bg-neutral-300/20">
                <div className="flex gap-2">
                  <div className="flex-1">
                    <div>
                      <span className="font-semibold">{s.title}</span>
                    </div>
                    {s.subtitle && (
                      <div>
                        <span className="text-base opacity-65">
                          {s.subtitle}
                        </span>
                      </div>
                    )}
                  </div>
                  {s?.synopsis && (
                    <div className="p-2 flex-1 hidden sm:block">
                      <span className="text-secondary">{s?.synopsis}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {currentCollection?.footerMarkdown && (
        <div className="flex-1 flex items-end">
          <div className="border-t border-(--line) mx-3 mt-6">
            <Markdown markdown={currentCollection?.footerMarkdown} />
          </div>
        </div>
      )}
    </div>
  );
}
