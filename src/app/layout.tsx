import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oliani | Agência Digital - Em Breve",
  description: "Oliani é uma agência digital que conecta marcas, pessoas e oportunidades. Preparando uma experiência clara, moderna e impactante. Em breve, site institucional e portfólio.",
  keywords: [
    "agência digital",
    "web design",
    "desenvolvimento web",
    "marketing digital",
    "Oliani",
    "em breve",
    "presença digital",
    "consultoria digital",
    "design responsivo",
    "solução digital"
  ],
  authors: [{ name: "Oliani", url: "https://oliani.dev" }],
  creator: "Oliani",
  publisher: "Oliani",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://oliani.dev",
    siteName: "Oliani - Agência Digital",
    title: "Oliani | Agência Digital - Em Breve",
    description: "Conectando marcas, pessoas e oportunidades com uma experiência clara, moderna e impactante.",
    images: [
      {
        url: "https://oliani.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Oliani - Agência Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oliani | Agência Digital - Em Breve",
    description: "Conectando marcas, pessoas e oportunidades com uma experiência clara, moderna e impactante.",
    creator: "@oliani.dev",
    images: ["https://oliani.dev/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://oliani.dev",
  },
  category: "Agência Digital",
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="alternate" hrefLang="pt-BR" href="https://oliani.dev" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Oliani",
              url: "https://oliani.dev",
              logo: "https://oliani.dev/logo.png",
              description: "Agência digital que conecta marcas, pessoas e oportunidades com uma experiência clara, moderna e impactante.",
              sameAs: [
                "https://www.instagram.com/oliani.dev",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "guilhermenoliani@gmail.com",
                contactType: "Customer Support",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "BR",
                addressLocality: "Brasil",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
