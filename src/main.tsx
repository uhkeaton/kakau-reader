import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { GlobalProvider } from "./useGlobal.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeWrapper } from "./Theme.tsx";
import { HomePage } from "./PageHome.tsx";
import { WaihonaHomePage, WaihonaPage } from "./PageWaihona.tsx";
import { MooleloPage } from "./PageMoolelo.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <GlobalProvider>
          <ThemeWrapper>
            <Routes>
              <Route path="/" element={<App />}>
                <Route index element={<HomePage />} />
                <Route path="/waihona/:waihonaId" element={<WaihonaPage />}>
                  <Route index element={<WaihonaHomePage />} />
                  <Route
                    path="/waihona/:waihonaId/moolelo/:mooleloId"
                    element={<MooleloPage />}
                  />
                </Route>
              </Route>
            </Routes>
          </ThemeWrapper>
        </GlobalProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
);
