import type { Metadata } from "next";
  import { ThemeProvider } from "next-themes";
  import "./globals.css";

  export const metadata: Metadata = {
    title: "Henrique Antony — Web Designer & Desenvolvedor Web | Santa Catarina",
    description: "Web Designer e Desenvolvedor Web baseado em Santa Catarina. Crio sites, e-commerces e identidades digitais com foco em resultado.",
    authors: [{ name: "Henrique Antony" }],
    robots: "index, follow",
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: "Henrique Antony",
      title: "Henrique Antony — Web Designer & Desenvolvedor Web",
      description: "Web Designer e Desenvolvedor Web baseado em Santa Catarina.",
    },
    twitter: {
      card: "summary_large_image",
      title: "Henrique Antony — Web Designer & Desenvolvedor Web",
      description: "Web Designer e Desenvolvedor Web baseado em Santa Catarina.",
    },
  };

  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="pt-BR" suppressHydrationWarning>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Henrique Antony",
                jobTitle: "Web Designer e Desenvolvedor Web",
                sameAs: [
                  "https://www.linkedin.com/in/henriqueantony",
                  "https://github.com/HenriqueAntony07",
                  "https://instagram.com/henrique_webdesigner",
                ],
                address: { "@type": "PostalAddress", addressRegion: "Santa Catarina", addressCountry: "BR" },
                worksFor: { "@type": "Organization", name: "Make+ / Gatte72" },
              }),
            }}
          />
        </head>
        <body>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            {children}
          </ThemeProvider>
        </body>
      </html>
    );
  }
  