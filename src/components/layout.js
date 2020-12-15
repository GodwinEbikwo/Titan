import styles from "./layout.module.scss";
import Head from "next/head";
import Header from "./header";
import Navbar from "./Nav";

export const siteTitle = "Titan";
const previewImage = "/titan.png";
export const url = "https://titaan.vercel.app/";
export const siteName = "Titaan Bank";
export const description =
  "Titan is the most secure and transparent bank for modern day individuals ";

export default function Layout({ children, pageTitle, description }) {
  return (
    <div className={styles.layoutContainer}>
      <Head>
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
        <meta property="og:locale" content="en_GB" />
        <meta name="description" content={description} />
        <meta name="og:title" content={siteTitle} />
        <meta property="og:title" content={siteTitle} key="ogtitle" />
        <meta property="og:image" content={previewImage} key="ogimage" />
        <meta property="og:url" content={url} key="ogurl" />
        <meta property="og:site_name" content={siteName} key="ogsitename" />
        <meta property="og:title" content={siteTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <title>{siteTitle}</title>
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
