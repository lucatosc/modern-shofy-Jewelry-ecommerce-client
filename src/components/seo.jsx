import Head from "next/head";

const SITE_NAME = "Zaibaraish";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://zaibaraish.pk";

const SEO = ({pageTitle}) => (
  <>
    <Head>
      <title>
        {pageTitle ? `${pageTitle} - ${SITE_NAME}` : `${SITE_NAME} - Jewelry eCommerce`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content={`${SITE_NAME} - Jewelry eCommerce store`} />
      <meta name="robots" content="noindex, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={SITE_URL} />
      <link rel="canonical" href={SITE_URL} />
      <link rel="icon" href="/favicon.png" />
    </Head>
  </>
);

export default SEO;