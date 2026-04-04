import { useParams } from "react-router-dom";
import { useGlobal } from "./useGlobal";
import { Title } from "./Title";
import { Line, LineContainer } from "./Line";
import { formatHawaiianDate } from "./date";
import { PrintButton } from "./PrintButton";

export function MooleloPage() {
  const { collectionsQuery, orthography } = useGlobal();
  const { waihonaId, mooleloId } = useParams();

  const currentCollection = collectionsQuery?.data?.collections?.find(
    (c) => c.id === waihonaId,
  );

  const currentMoolelo = currentCollection?.stories?.find((s) => {
    return s.id === mooleloId;
  });

  const hawDate = currentMoolelo?.date
    ? formatHawaiianDate(currentMoolelo?.date, orthography)
    : null;

  const subtitle = [currentMoolelo?.authors, hawDate]
    .filter(Boolean)
    .join(" · ");

  return (
    <div className="min-h-dvh">
      <div className="mb-4 flex justify-between">
        <div>
          <div className="mb-2">
            <Title>{currentMoolelo?.title}</Title>
          </div>
          <div className="mb-4 text-secondary">
            <span>{subtitle}</span>
          </div>
        </div>
        <div>
          <PrintButton />
        </div>
      </div>
      {currentMoolelo?.synopsis && (
        <div className="p-2 rounded-lg bg-(--bg-secondary) print:bg-transparent mb-4">
          <span className="text-secondary">{currentMoolelo?.synopsis}</span>
        </div>
      )}
      <LineContainer>
        {currentMoolelo?.paragraphs.map((p) => {
          return <Line text={p.text} />;
        })}
      </LineContainer>
    </div>
  );
}
