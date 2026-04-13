import { StickyNav } from "./StickyHeader";
import { NavigationDrawer } from "./NavigationDrawer";
import { Logo } from "./Logo";
import { SidebarLayout } from "./Sidebar";
import { Outlet } from "react-router";
import { StickyFooter } from "./StickyFooter";
import { useLayoutEffect } from "react";
import { useParams } from "react-router";
import { viteEnableNavDrawerButton, viteEnableNavLogo } from "./env";

export function App() {
  const { mooleloId, waihonaId } = useParams();

  useLayoutEffect(() => {
    // Instantly move to top before the browser paints the new page
    window.scrollTo(0, 0);
  }, [mooleloId, waihonaId]);

  return (
    <SidebarLayout>
      <div className="flex justify-between print:hidden">
        <div className="ml-1 flex gap-2 items-center">
          {viteEnableNavDrawerButton && <NavigationDrawer anchor="left" />}
          {viteEnableNavLogo && (
            <div className="mb-2">
              <Logo />
            </div>
          )}
        </div>
        <div className="print:hidden flex items-center gap-4"></div>
      </div>
      <StickyNav />
      <Outlet />
      <StickyFooter />
    </SidebarLayout>
  );
}
