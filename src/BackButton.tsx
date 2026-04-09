import { useNavigate, useParams } from "react-router";
import { IconArrowBack } from "./material/IconArrowBack";

export function BackButton() {
  const navigate = useNavigate();
  const { waihonaId, mooleloId } = useParams();
  if (!waihonaId && !mooleloId) return <></>;
  return (
    <button
      onClick={() => {
        if (!mooleloId) {
          navigate({
            pathname: `/`,
            search: location.search,
          });
        } else {
          navigate({
            pathname: `/waihona/${waihonaId}`,
            search: location.search,
          });
        }
      }}
      className={"cursor-pointer flex-0 opacity-50 hover:opacity-100"}
    >
      <IconArrowBack className="w-8" />
    </button>
  );
}
