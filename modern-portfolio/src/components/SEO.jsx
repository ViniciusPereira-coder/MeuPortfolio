import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Vinicius Pereira | Arquitetura de Experiências Digitais",
  description = "Especialista em Qualidade de Software e desenvolvimento front-end, criando experiências digitais marcantes e funcionais.",
  keywords = "desenvolvimento web, qualidade de software, front-end, QA automation, React, JavaScript, Cypress",
  image = "/assets/img/logonovapng.png",
  url = "https://vinicius-pereira.dev",
  type = "website",
  author = "Vinicius Pereira",
  publishedTime,
  modifiedTime,
  section,
  tags
}) => {
  const siteName = "Vinicius Pereira - Portfolio";
  const twitterHandle = "@vinicius_dev";

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "Person",
    "name": author,
    "description": description,
    "url": url,
    "image": image,
    "sameAs": [
      "https://github.com/ViniciusPereira-coder",
      "https://www.linkedin.com/in/vinicius-de-moraes-10b50b151/",
      "https://www.instagram.com/ninicius_/"
    ],
    "jobTitle": "Arquiteto de Experiências Digitais",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelancer"
    },
    "knowsAbout": [
      "Desenvolvimento Front-end",
      "Qualidade de Software",
      "Automação de Testes",
      "UX/UI Design",
      "React",
      "JavaScript",
      "Cypress",
      "Selenium"
    ]
  };

  if (type === "article" && publishedTime) {
    structuredData.datePublished = publishedTime;
    structuredData.dateModified = modifiedTime || publishedTime;
    structuredData.author = {
      "@type": "Person",
      "name": author
    };
    if (section) structuredData.articleSection = section;
    if (tags) structuredData.keywords = tags;
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="pt-BR" />
      <meta name="revisit-after" content="7 days" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Vinicius Pereira" />

      {/* Favicons */}
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/logonovapng.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/logonovapng.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/logonovapng.png" />
      <link rel="manifest" href="/manifest.json" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Additional structured data for portfolio */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": siteName,
          "url": url,
          "description": description,
          "author": {
            "@type": "Person",
            "name": author,
            "jobTitle": "Arquiteto de Experiências Digitais",
            "url": url
          },
          "publisher": {
            "@type": "Person",
            "name": author
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${url}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
