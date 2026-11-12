import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InlineScript from "@/components/InlineScript";
import { defaultLocale, dirOf, hasLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import "../globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const space = Space_Grotesk({ variable: "--font-space", subsets: ["latin"] });
const jet = JetBrains_Mono({ variable: "--font-jet", subsets: ["latin"] });
const arabic = IBM_Plex_Sans_Arabic({ variable: "--font-arabic", subsets: ["arabic"], weight: ["400", "500", "600", "700"] });

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const resolve = (lang: string): Locale => (hasLocale(lang) ? lang : defaultLocale);

export async function generateMetadata(props: LayoutProps<"/[lang]">): Promise<Metadata> {
  const lang = resolve((await props.params).lang);
  const t = getDictionary(lang);
  return {
    title: { default: t.meta.title, template: `%s | ${t.name}` },
    description: t.meta.description,
    alternates: { languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])) },
    openGraph: { title: t.meta.title, description: t.meta.description, type: "website", locale: lang },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#07090f" },
    { media: "(prefers-color-scheme: light)", color: "#f6f7fb" },
  ],
};

// Runs before paint so the saved theme never flashes. Dark is the default.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='light'?'light':'dark'}catch(e){document.documentElement.dataset.theme='dark'}})()`;

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const lang = resolve((await params).lang);
  const t = getDictionary(lang);

  return (
    <html
      lang={lang}
      dir={dirOf(lang)}
      data-theme="dark"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${inter.variable} ${space.variable} ${jet.variable} ${arabic.variable}`}
    >
      <head>
        <InlineScript html={themeScript} />
      </head>
      <body id="top" className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
        >
          {t.nav.skip}
        </a>
        <Header lang={lang} name={t.name} nav={t.nav} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer name={t.name} t={t.footer} />
      </body>
    </html>
  );
}
