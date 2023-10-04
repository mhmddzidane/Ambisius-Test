import Layout from "@/components/Layout";
import { RestoProvider } from "@/context/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RestoProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RestoProvider>
  );
}
