import Head from "next/head";
export default function OpenGraph() {
  return (
    <Head>
      <title>AnotherCat - Dev</title>
      <meta
        name="description"
        content="Student developer, working in Python and Javascript"
      />

      {/* Open Graph */}
      <meta name="og:title" content="AnotherCat - Dev" />
      <meta
        property="og:site_name"
        content="AnotherCat - Dev"
        key="og-site-name"
      />
      <meta
        name="og:description"
        content="Student developer, working in Python and Javascript"
      />
      <meta name="og:type" content="website" />
      <meta name="og:image" content="/avatar.png" />
      <meta name="og:url" content="https://anothercat.me" />
    </Head>
  );
}
