import Head from 'next/head';
import site from '@/lib/constants/site';

interface Meta {
  title: string;
  keywords: string;
  description: string;
  canonical: string;
  image: {
    url: string;
    alt: string;
  };
}

export default function Meta({ title, keywords, description = site.description, image = site.image, canonical }: Meta) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:url" content={`${site.url}${canonical}`} />
      <meta property="og:title" content={`${site.name} | ${title}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image.url} />
      <meta property="og:image:alt" content={image.alt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content={site.twiter} />
      <meta name="twitter:creator" content={site.author} />
    </Head>
  );
}
