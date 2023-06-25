import React from "react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import type { AppProps } from "next/app";
import type { DehydratedState } from "@tanstack/react-query";
import type { NextPageWithLayout } from "@/types/next-page";
import { SmoothScrollProvider } from "@/context/SmoothScroll.context";

require("../../scroll-style.css");

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const { dehydratedState } = pageProps as {
    dehydratedState: DehydratedState;
  };

  const [queryClient] = React.useState(() => new QueryClient());
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <SmoothScrollProvider options={{ smooth: true }}>
          <main data-scroll-container className="container">
            {getLayout(<Component {...pageProps} />)}
          </main>
        </SmoothScrollProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
