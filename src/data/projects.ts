// Language-neutral project structure: images, colors, stack and links.
// All visible text lives in src/i18n/dictionaries/{en,ar,de}.ts under `projects[slug]`.
// Fields marked VERIFY should be confirmed by Omair (exact stack, store links).

import type { Dictionary } from "@/i18n/dictionaries";

export type CategoryKey = "mobility" | "logistics" | "healthcare" | "social";
export type StoreLink = { label: string; href: string };

type AppData = { id: string; screens: string[] };

export type ProjectData = {
  slug: ProjectSlug;
  name: string;
  category: CategoryKey;
  accent: string; // brand color taken from the app UI
  stack: string[];
  cover: string;
  heroScreens: [string, string, string];
  apps: AppData[];
  links: StoreLink[];
};

export type ProjectSlug = "yalla" | "cargox-driver" | "aazer" | "madar-ex" | "rassah";

const y = (f: string) => `/projects/yalla/${f}`;
const c = (f: string) => `/projects/cargox-driver/${f}`;
const a = (f: string) => `/projects/aazer/${f}`;
const m = (f: string) => `/projects/madar-ex/${f}`;
const r = (f: string) => `/projects/rassah/${f}`;

export const projects: ProjectData[] = [
  {
    slug: "yalla",
    name: "Yalla",
    category: "mobility",
    accent: "#8BD620",
    stack: ["Flutter", "Dart", "Google Maps", "REST APIs"], // VERIFY
    cover: y("rider/02_home.png"),
    heroScreens: [y("rider/03_food.png"), y("rider/02_home.png"), y("driver/02_home-online.png")],
    apps: [
      {
        id: "rider",
        screens: [
          "01_onboarding", "02_home", "03_food", "04_taxi-route", "05_taxi-tracking", "06_parcel",
          "07_wallet", "08_food-tracking", "09_vehicle-types", "10_profile", "11_notifications", "12_home-light",
        ].map((f) => y(`rider/${f}.png`)),
      },
      {
        id: "driver",
        screens: [
          "01_start", "02_home-online", "03_requests", "04_active-order", "05_earnings", "06_wallet",
          "07_activity", "08_notifications", "09_profile", "10_food-request", "11_delivery-route", "12_home-dark",
        ].map((f) => y(`driver/${f}.png`)),
      },
    ],
    links: [], // VERIFY: add store links if published
  },
  {
    slug: "cargox-driver",
    name: "CargoX Driver",
    category: "logistics",
    accent: "#2554A8",
    stack: ["Flutter", "Dart", "GetX", "Google Maps", "REST APIs"],
    cover: c("03_home-map.jpg"),
    heroScreens: [c("05_offers.jpg"), c("03_home-map.jpg"), c("08_trip-delivered.jpg")],
    apps: [
      {
        id: "driver",
        screens: [
          "01_login-phone", "02_otp-verification", "03_home-map", "04_side-menu", "05_offers", "06_trip-details-pending",
          "07_trip-hold-to-start", "08_trip-delivered", "09_chat", "10_wallet", "11_languages",
        ].map((f) => c(`${f}.jpg`)),
      },
    ],
    links: [], // VERIFY: add Google Play link
  },
  {
    slug: "aazer",
    name: "Aazer",
    category: "healthcare",
    accent: "#16B6C4",
    stack: ["Flutter", "Dart", "REST APIs", "Push notifications"], // VERIFY
    cover: a("01_home.jpg"),
    heroScreens: [a("04_articles.jpg"), a("01_home.jpg"), a("08_dark-home.jpg")],
    apps: [
      {
        id: "patient",
        screens: [
          "01_home", "02_home-doctors-support", "03_clinics-filter", "04_articles", "05_settings",
          "06_consultation-call", "07_call-notification", "08_dark-home", "09_dark-articles", "10_dark-settings",
        ].map((f) => a(`${f}.jpg`)),
      },
    ],
    links: [],
  },
  {
    slug: "madar-ex",
    name: "Madar EX",
    category: "logistics",
    accent: "#6B4BA3",
    stack: ["Flutter", "Dart", "Google Maps", "REST APIs"], // VERIFY
    cover: m("customer/02_home-map.jpg"),
    heroScreens: [m("customer/06_order-tracking.jpg"), m("customer/02_home-map.jpg"), m("driver/01_dashboard.jpg")],
    apps: [
      {
        id: "customer",
        screens: [
          "01_splash", "02_home-map", "03_driver-card", "04_pick-location", "05_route-summary", "06_order-tracking", "07_orders-history",
        ].map((f) => m(`customer/${f}.jpg`)),
      },
      {
        id: "driver",
        screens: ["01_dashboard", "02_orders-map", "03_order-popup", "04_order-details", "05_profile"].map((f) => m(`driver/${f}.jpg`)),
      },
    ],
    links: [],
  },
  {
    slug: "rassah",
    name: "Rassah",
    category: "social",
    accent: "#2F7BEA",
    stack: ["Flutter", "Dart", "Maps", "REST APIs"], // VERIFY
    cover: r("04_discover.jpg"),
    heroScreens: [r("05_map-nearby.jpg"), r("04_discover.jpg"), r("06_session-details.jpg")],
    apps: [
      {
        id: "app",
        screens: [
          "01_splash", "02_onboarding", "03_login", "04_discover", "05_map-nearby", "06_session-details",
          "07_session-joined", "08_create-session-activity", "09_create-session-details", "10_profile",
        ].map((f) => r(`${f}.jpg`)),
      },
    ],
    links: [],
  },
];

export const categoryKeys: CategoryKey[] = ["mobility", "logistics", "healthcare", "social"];

/* ---------- Localized view model ---------- */

export type Screen = { src: string; title: string };
export type AppGroup = { id: string; label: string; screens: Screen[] };

export type Project = Omit<ProjectData, "apps"> & {
  categoryLabel: string;
  tagline: string;
  intro: string;
  overview: string[];
  role: string;
  platforms: string;
  highlights: string[];
  features: { title: string; body: string }[];
  apps: AppGroup[];
};

/** Merge a project's structure with its text in the given dictionary. */
export function localize(p: ProjectData, t: Dictionary): Project {
  const text = t.projects[p.slug];
  const appText = text.apps as Record<string, { label: string; screens: string[] }>;
  return {
    ...p,
    ...text,
    categoryLabel: t.categories[p.category],
    apps: p.apps.map((app) => ({
      id: app.id,
      label: appText[app.id].label,
      screens: app.screens.map((src, i) => ({ src, title: appText[app.id].screens[i] ?? "" })),
    })),
  };
}

export const localizedProjects = (t: Dictionary) => projects.map((p) => localize(p, t));

export function getProject(slug: string, t: Dictionary) {
  const p = projects.find((x) => x.slug === slug);
  return p ? localize(p, t) : undefined;
}

export function getNextProject(slug: string, t: Dictionary) {
  const i = projects.findIndex((p) => p.slug === slug);
  return localize(projects[(i + 1) % projects.length], t);
}

export function screenCount(p: Project) {
  return p.apps.reduce((n, app) => n + app.screens.length, 0);
}
