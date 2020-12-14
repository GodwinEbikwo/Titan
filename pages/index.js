import Head from "next/head";
import Header from "../src/components/header";
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
          <title>HorizonBank</title>
          <link rel="icon" href="/favicon.ico" />
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
