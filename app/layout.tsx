import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["700", "800"],
  style: ["italic"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "ViaBike — Bicicletas, Oficina e Aluguer · Viana do Castelo",
  description:
    "Venda, reparação e aluguer de bicicletas em Darque, Viana do Castelo. Focus, Cervélo e Pinarello. Na N13 desde sempre, a pedalar o Minho.",
  openGraph: {
    title: "ViaBike — Bicicletas, Oficina e Aluguer · Viana do Castelo",
    description:
      "Venda, reparação e aluguer de bicicletas em Darque, Viana do Castelo. Focus, Cervélo e Pinarello. Na N13 desde sempre, a pedalar o Minho.",
    locale: "pt_PT",
    type: "website",
    siteName: "ViaBike",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BikeStore",
  name: "ViaBike",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua das Flores 177",
    postalCode: "4935-125",
    addressLocality: "Darque, Viana do Castelo",
    addressCountry: "PT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.6812,
    longitude: -8.8072,
  },
  telephone: "+351258333174",
  email: "vianabike@hotmail.com",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "12:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "14:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  brand: ["Focus", "Cervélo", "Pinarello"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${barlow.variable} ${barlowCondensed.variable} ${ibmPlexMono.variable} antialiased`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
