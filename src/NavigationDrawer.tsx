import Drawer from "@mui/material/Drawer";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useGlobal } from "./useGlobal";
import cx from "classnames";
import {
  viteNavDrawerAllowedDestinations,
  viteNavDrawerAllowedOrigins,
  viteNavDrawerUrl,
} from "./env";
import { IconMenu } from "./icons";

export function ThemedButton({
  onClick,
  children,
  size,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  size?: "sm";
}) {
  return (
    <button
      className={cx(
        "rounded-full relative flex justify-center items-center cursor-pointer",
        {
          "max-w-12 min-w-12 min-h-12 max-h-12": size != "sm",
          "max-w-10 min-w-10 min-h-10 max-h-10": size == "sm",
        },
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function NavigationDrawer({ anchor }: { anchor: "left" | "right" }) {
  const { theme } = useGlobal();
  const [open, setOpen] = useState(false);

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="-ml-2 opacity-50 hover:opacity-100">
        <ThemedButton size="sm" onClick={() => setOpen(true)}>
          <IconMenu className="w-8" />
        </ThemedButton>
      </div>
      <Drawer
        anchor={anchor}
        ModalProps={{ keepMounted: true }}
        open={open}
        onClose={closeDrawer}
      >
        <NavIFrame theme={theme} orthography={"marked"} />
      </Drawer>
    </>
  );
}

function NavIFrame({
  theme,
  orthography,
}: {
  theme: "light" | "dark";
  orthography: "marked" | "unmarked";
}) {
  useListenToNavigationDrawer();
  const base = viteNavDrawerUrl;

  // hard reload not a problem now, because it's hidden in a drawer when these change
  const src = `${base}/?theme=${theme}&orthography=${orthography}`;

  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <div className="w-full h-full overflow-auto overscroll-contain">
      <iframe ref={iframeRef} src={src} width="100%" height="100%" />
    </div>
  );
}

function useListenToNavigationDrawer() {
  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (!viteNavDrawerAllowedOrigins.includes(event.origin)) return;

      if (event.data.type === "NAVIGATE") {
        const path = event.data.path;
        if (
          !viteNavDrawerAllowedDestinations.some((item) =>
            path.startsWith(item),
          )
        ) {
          return;
        }
        window.open(path, "_self");
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);
}
