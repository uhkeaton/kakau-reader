import { useLocation, useNavigate, useParams } from "react-router";
import { IconArrowBack } from "./icons";

export function ButtonBack() {
  const location = useLocation();
  const isWaihona = location.pathname.startsWith("/waihona");
  const isHakahaka = location.pathname.startsWith("/hakahaka");
  if (isWaihona) return <ButtonBackStory />;
  if (isHakahaka) return <ButtonBackHakahaka />;
  return <></>;
}

function ButtonBackStory() {
  const navigate = useNavigate();
  const location = useLocation();
  const { waihonaId, mooleloId } = useParams();
  if (!waihonaId && !mooleloId) return <></>;
  return (
    <div
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
    </div>
  );
}

function ButtonBackHakahaka() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div
      onClick={() => {
        navigate({
          pathname: `/`,
          search: location.search,
        });
      }}
      className={"cursor-pointer flex-0 opacity-50 hover:opacity-100"}
    >
      <IconArrowBack className="w-8" />
    </div>
  );
}
