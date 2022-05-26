import Head from "next/head";

type metaProps = {
  title: string;
  description: string;
  keywords: string;
};

const Meta = ({ title, keywords, description }: metaProps) => {
  return (
    <Head>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Thet Paing Soe" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Mobile & Web App Development Company in Singapore",
  description:
    "Award winning Singapore based mobile app development company. iOS, Android, Web, Social, Games, UI, UX & SEO. 300 apps developed since 2010.",
  keywords: "codigo, web development, mobile development",
};

export default Meta;
