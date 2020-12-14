import Head from "next/head";
import { SmoothScrollProvider } from "../src/utils/SmoothScroll.utils";
import Layout from "../src/components/layout";
import Hero from "../src/components/hero";
import Feature from "../src/components/feature";
import Perktwo from "../src/components/Perktwo";
import PerkThree from "../src/components/PerkThree";
import Cta from "../src/components/Cta";
import Headline from "../src/components/headline";
import Footer from "../src/components/footer";

export default function Home() {
  return (
    <SmoothScrollProvider options={{ smooth: true }}>
      <Layout>
        <Head>
          <title>Titaan</title>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta
            name="description"
            content="Titan is the most secure and transparent bank for modern day individuals "
          />
        </Head>
        <Hero />
        <Feature />
        <Perktwo />
        <PerkThree />
        <Cta />
        <Headline />
        <Footer />
      </Layout>
    </SmoothScrollProvider>
  );
}
