import type { Dictionary } from ".";

const de: Dictionary = {
  meta: {
    title: "Omair Alkhateeb | Flutter-Entwickler",
    description:
      "Flutter-Entwickler und Mobile-Teamleiter: plattformübergreifende Apps, von Kunden- und Fahrer-Apps mit Echtzeit-Bestellabläufen bis zur Veröffentlichung bei Google Play und im App Store.",
  },
  name: "Omair Alkhateeb",

  nav: {
    work: "projekte",
    expertise: "kompetenzen",
    experience: "werdegang",
    contact: "kontakt",
    resume: "Lebenslauf",
    downloadResume: "Lebenslauf herunterladen",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    skip: "Zum Inhalt springen",
    toLight: "Zum hellen Design wechseln",
    toDark: "Zum dunklen Design wechseln",
    language: "Sprache",
  },

  hero: {
    roleLong: "Flutter-Entwickler & Mobile-Teamleiter",
    headline:
      "Ich entwickle plattformübergreifende Mobile-Apps mit Flutter, von Kunden- und Fahrer-Apps mit Echtzeit-Bestellabläufen bis zu ausgereiften Releases bei Google Play und im App Store.",
    location: "Damaskus, Syrien",
    viewWork: "Projekte ansehen",
    getInTouch: "Kontakt aufnehmen",
  },

  stats: [
    { value: "4+", label: "Jahre Softwareentwicklung" },
    { value: "6", label: "Produkte · 8 Apps im Portfolio" },
    { value: "2", label: "Entwicklerteams geleitet (7 & 6 Personen)" },
    { value: "iOS + Android", label: "Store-Veröffentlichungen" },
  ],

  work: {
    eyebrow: "ausgewählte projekte",
    title: "Apps, die ich konzipiert, entwickelt und veröffentlicht habe",
    intro: "Kunden- und Fahrer-Apps mit verknüpften Bestellabläufen, Live-Karten, Statusupdates in Echtzeit und Store-fertigen Releases.",
    featured: "★ Hauptprojekt",
    viewCase: "Fallstudie ansehen",
    filterBy: "filtern nach",
    filterLabel: "Projekte filtern",
    all: "Alle",
    oneApp: "1 App",
    apps: "{n} Apps",
    screens: "{n} Screens",
    appScreenAlt: "Screen der App {name}",
  },

  categories: {
    mobility: "Mobilität & Lieferung",
    logistics: "Logistik",
    healthcare: "Gesundheit",
    social: "Social",
    ecommerce: "E-Commerce",
  },

  markets: {
    sa: "Saudi-Arabien",
    iq: "Irak",
    om: "Oman",
  },

  statuses: {
    "live-ios-pending": "Bei Google Play verfügbar · App-Store-Freigabe ausstehend",
    "awaiting-license": "Wartet auf die Lizenzierung durch den Kunden, danach Store-Release",
    "final-stage": "In der finalen Entwicklungsphase",
    publishing: "Wird in den Stores veröffentlicht",
  },

  expertise: {
    eyebrow: "kompetenzen",
    title: "Was ich in ein Mobile-Team einbringe",
    items: [
      {
        title: "Plattformübergreifende Apps",
        body: "Produktive Flutter-Apps für Android und iOS, von Grund auf entwickelt, mit sauberer, skalierbarer Codestruktur und responsiver UI.",
        tags: ["Flutter", "Dart", "Responsive UI"],
      },
      {
        title: "Architektur & State",
        body: "Wartbare App-Architektur mit GetX, BLoC/Cubit oder Provider, basierend auf Repository Pattern, Clean Architecture und MVVM.",
        tags: ["GetX", "BLoC", "Clean Architecture"],
      },
      {
        title: "Echtzeit & Integrationen",
        body: "REST-APIs, Pusher und WebSockets für Live-Bestellstatus, dazu Firebase Auth, FCM, Karten & Geolokalisierung, Datei-Uploads und Zahlungen.",
        tags: ["REST", "Pusher", "Firebase", "Maps"],
      },
      {
        title: "Release & Teamführung",
        body: "Release-Vorbereitung und Veröffentlichung bei Google Play und im App Store, verbunden mit Teamleitung, Aufgabenverteilung und Liefersteuerung.",
        tags: ["Play Store", "App Store", "Teamleitung"],
      },
    ],
  },

  experience: {
    eyebrow: "werdegang",
    title: "Berufserfahrung",
    summary:
      "Flutter-Entwickler mit Erfahrung in der Entwicklung mobiler Apps von Grund auf, der Integration von REST-APIs und der Release-Vorbereitung für Google Play und den Apple App Store. Praxis mit Flutter, Dart, GetX und Echtzeitkommunikation über Pusher sowie Erfahrung in der Leitung von Entwicklerteams von der Umsetzung bis zur Auslieferung.",
    educationLabel: "ausbildung",
    languagesLabel: "sprachen",
    items: [
      {
        role: "Flutter-Entwickler & Technischer Teamleiter",
        note: "ehemals LiveTech",
        period: "Feb. 2024 – heute",
        location: "Remote",
        points: [
          "Entwicklung und Wartung plattformübergreifender Mobile-Apps mit Flutter und Dart.",
          "Entwicklung von Apps von Grund auf, inklusive Codestruktur, Architektur und State-Management mit GetX.",
          "Integration von REST-APIs und Echtzeit-Updates mit Pusher für Abläufe zwischen Kunden- und Fahrer-Apps.",
          "Vorbereitung von Releases und Veröffentlichung bei Google Play und im Apple App Store.",
          "Leitung eines 7-köpfigen Teams: Aufgabenverteilung, Fortschrittskontrolle und Koordination der technischen Umsetzung.",
        ],
        tags: ["Flutter", "Dart", "GetX", "Pusher", "REST APIs"],
      },
      {
        role: "Softwareentwickler",
        note: "",
        period: "Jan. 2022 – Dez. 2024",
        location: "Syrien",
        points: [
          "Mitarbeit an Softwareentwicklung und Umsetzung in mehreren Projekten.",
          "Leitung eines 6-köpfigen Teams, Koordination der Aufgabenverteilung und Überwachung des Projektfortschritts.",
          "Unterstützung bei der Organisation der Entwicklung, Umsetzung von Features und Verfolgung der Anforderungen bis zur Auslieferung.",
        ],
        tags: ["Teamleitung", "Auslieferung"],
      },
    ],
    education: {
      degree: "Bachelor in Informationstechnik",
      school: "Universität Damaskus",
      detail: "Schwerpunkt: Künstliche Intelligenz · Abschluss Sep. 2026",
    },
    languages: ["Arabisch: Muttersprache", "Englisch: gute Kenntnisse im Berufsalltag"],
  },

  skills: {
    eyebrow: "toolkit",
    title: "Technische Fähigkeiten",
    groups: [
      { group: "Sprachen", items: ["Dart"] },
      { group: "Mobile", items: ["Flutter", "Responsive UI", "Plattformübergreifend", "Android-/iOS-Release"] },
      { group: "State-Management", items: ["GetX", "BLoC / Cubit", "Provider"] },
      { group: "Architektur", items: ["Repository Pattern", "Clean Architecture", "MVVM"] },
      {
        group: "APIs & Integrationen",
        items: ["REST APIs", "JSON", "Pusher", "WebSockets", "Firebase Auth", "FCM", "Datei-Uploads", "Karten / Geolokalisierung", "Zahlungen"],
      },
      { group: "Tools", items: ["Git", "GitHub", "Postman"] },
    ],
  },

  contact: {
    eyebrow: "kontakt",
    title: "Sie planen eine App?",
    titleAccent: "Lassen Sie sie uns bauen.",
    body: "Verfügbar für Remote-Positionen und ausgewählte Freelance-Projekte. Am schnellsten erreichen Sie mich per E-Mail oder WhatsApp.",
    copy: "E-Mail kopieren",
    copied: "Kopiert ✓",
    whatsapp: "WhatsApp",
    resume: "Lebenslauf herunterladen",
  },

  footer: {
    built: "Erstellt mit Next.js.",
    top: "nach oben",
  },

  project: {
    home: "Start",
    work: "Projekte",
    breadcrumb: "Navigationspfad",
    role: "Rolle",
    platform: "Plattform",
    apps: "Apps",
    category: "Kategorie",
    technology: "Technologie",
    market: "Markt",
    status: "Status",
    explore: "{n} Screens ansehen",
    mainScreenAlt: "Hauptscreen von {name}",
    overviewEyebrow: "überblick",
    overviewTitle: "Über das Projekt",
    featuresEyebrow: "kernfunktionen",
    featuresTitle: "Was die App kann",
    screensEyebrow: "screens",
    screensTitle: "Einblick in die App",
    screensHint: "Tippen Sie auf einen Screen für die Vollansicht. Mit den Pfeiltasten blättern.",
    next: "nächstes projekt",
    chooseApp: "App auswählen",
    openScreen: "Screen „{title}“ öffnen",
    close: "Schließen",
    prev: "Vorheriger Screen",
    nextScreen: "Nächster Screen",
  },

  notFound: {
    title: "Seite nicht gefunden",
    body: "Die gesuchte Seite existiert nicht.",
    back: "Zur Startseite",
  },

  projects: {
    yalla: {
      tagline: "Super-App für Fahrten, Essen und Paketlieferung",
      intro:
        "Eine Multi-Service-Super-App, die Taxifahrten, Essensbestellungen und Paketlieferungen in einem Erlebnis vereint, ergänzt durch eine eigene Fahrer-App, die jede Auftragsart annimmt und ausführt.",
      overview: [
        "Yalla besteht aus zwei verbundenen Flutter-Apps. Fahrgäste buchen Taxis, bestellen Essen und versenden Pakete über einen einzigen Startbildschirm mit Wallet, Live-Tracking und Benachrichtigungen.",
        "Fahrer gehen online, erhalten Fahrt- und Lieferanfragen in der Nähe, folgen der Route zur Abholung und Zustellung und behalten Einnahmen, Wallet und Aktivitäten im Blick.",
      ],
      role: "Flutter-Entwickler",
      platforms: "Android & iOS",
      highlights: ["2 verbundene Apps", "3 Services in einer App", "Helles & dunkles Design"],
      features: [
        { title: "Ein Start, drei Services", body: "Taxi, Essen und Pakete über einen arabischen RTL-Startbildschirm mit Angeboten und Wallet-Guthaben." },
        { title: "Live-Tracking von Fahrt & Bestellung", body: "Fahrgäste verfolgen Taxi oder Essensbestellung auf der Karte von der Anfrage bis zur Ankunft." },
        { title: "Auftragsfluss für Fahrer", body: "Online/Offline-Schalter, Anfragen in der Nähe, aktiver Auftrag und eine Lieferroute Schritt für Schritt." },
        { title: "Wallet & Einnahmen", body: "In-App-Wallet für Fahrgäste, dazu Einnahmen, Wallet und Aktivitätsverlauf für Fahrer." },
        { title: "Fahrzeugtypen", body: "Fahrgäste wählen vor der Bestätigung die passende Fahrzeugklasse." },
        { title: "Helles & dunkles Design", body: "Beide Apps bieten ein ausgefeiltes helles und dunkles Erscheinungsbild." },
      ],
      apps: {
        rider: {
          label: "Fahrgast-App",
          screens: [
            "Onboarding", "Start", "Essen bestellen", "Taxi-Route", "Live-Taxi-Tracking", "Paketlieferung",
            "Wallet", "Bestellverfolgung", "Fahrzeugtypen", "Profil", "Benachrichtigungen", "Start (hell)",
          ],
        },
        driver: {
          label: "Fahrer-App",
          screens: [
            "Start", "Online auf der Karte", "Anfragen in der Nähe", "Aktiver Auftrag", "Einnahmen", "Wallet",
            "Aktivität", "Benachrichtigungen", "Profil", "Essenslieferung", "Lieferroute", "Start (dunkel)",
          ],
        },
      },
    },
    "cargox-driver": {
      tagline: "Fahrer-App für Fracht-Langstrecken",
      intro:
        "Eine Flutter-Fahrer-App für eine Frachtplattform in Saudi-Arabien. Fahrer erhalten Frachtangebote, führen Fahrten von der Abholung bis zur Zustellung durch, chatten mit Kunden und verwalten ihre Wallet.",
      overview: [
        "Ich habe CargoX Driver von Grund auf mit Flutter und Dart entwickelt, die Codebasis strukturiert und das State-Management mit GetX umgesetzt.",
        "Die App deckt den gesamten Ablauf für Fahrer ab: Login per Telefonnummer mit OTP, eine Live-Karte als Startseite, Angebote mit Annahme- und Ablehnungsstatus, Fahrtdurchführung mit Gedrückthalten zum Starten, Kundenchat und Wallet. Ich habe sie für das Release vorbereitet und bei Google Play veröffentlicht.",
      ],
      role: "Flutter-Entwickler (von Grund auf)",
      platforms: "Android (Google Play) · iOS",
      highlights: ["Von Grund auf entwickelt", "Bei Google Play veröffentlicht", "4 Sprachen"],
      features: [
        { title: "Login per Telefon + OTP", body: "Schnelles Onboarding mit Telefonnummer und zeitlich begrenztem Bestätigungscode." },
        { title: "3D-Live-Karte", body: "Die Position des Fahrers auf einer 3D-Karte, mit Hinweis auf individuelle Fahrten, die auf den Start warten." },
        { title: "Angebots-Pipeline", body: "Alle, offene, angenommene und abgelehnte Angebote mit Preis, ETA, Route und Sendungsdetails." },
        { title: "Fahrtdurchführung", body: "Routenvorschau, Entfernung und ETA, Gedrückthalten zum Starten, Reiseplan und Frachtdetails bis zur Zustellung." },
        { title: "Kundenchat", body: "Nachrichten zwischen Fahrer und Kunde während der Fahrt, mit Lesebestätigungen." },
        { title: "Wallet & Mehrsprachigkeit", body: "Guthabenübersicht und Auszahlungen, auf Englisch, Arabisch, Chinesisch und Urdu." },
      ],
      apps: {
        driver: {
          label: "Fahrer-App",
          screens: [
            "Telefon-Login", "OTP-Bestätigung", "Live-Karte", "Seitenmenü", "Angebote", "Fahrtdetails",
            "Halten zum Starten", "Fahrt zugestellt", "Kundenchat", "Wallet", "Sprachen",
          ],
        },
      },
    },
    aazer: {
      tagline: "Gesundheits-App für Patienten, Kliniken und Beratungen",
      intro:
        "Eine Gesundheits-App für Patienten: Ärzte, Kliniken und Apotheken finden, vertrauenswürdige medizinische Artikel lesen, die eigene Krankenakte verwalten und an Beratungsanrufen teilnehmen.",
      overview: [
        "Aazer bietet Patienten einen zentralen Ort für ihre Gesundheit. Sie können Fachärzte und bestbewertete Kliniken durchsuchen, Favoriten speichern und nach Themen sortierte medizinische Artikel lesen.",
        "Beratungen erscheinen als Vollbild-Anruf, sogar aus der Benachrichtigungsleiste. Ein vollständiges medizinisches Konto enthält Termine, Medikamente, Erinnerungen, Befunde und Rezepte, und die App unterstützt helles und dunkles Design auf Englisch und Arabisch.",
      ],
      role: "Flutter-Entwickler",
      platforms: "Android & iOS",
      highlights: ["Beratungsanrufe", "Helles & dunkles Design", "Zweisprachig EN / AR"],
      features: [
        { title: "Versorgung finden", body: "Kliniken und Ärzte suchen, Fachrichtungen durchstöbern und nach Ärzten, Kliniken und Apotheken filtern." },
        { title: "Medizinische Artikel", body: "Ein hervorgehobenes Karussell und beliebte Artikel mit Themen-Tags und Lesezeichen." },
        { title: "Beratungsanrufe", body: "Vollbild-Anrufoberfläche mit Annehmen und Ablehnen, auch direkt aus der Benachrichtigung." },
        { title: "Medizinisches Konto", body: "Krankenakte, Termine, Medikamente, Erinnerungen, Befunde und Rezepte." },
        { title: "Gesundheitshilfe", body: "Patienten können andere unterstützen oder diskret selbst Hilfe anfragen." },
        { title: "Designs & Sprachen", body: "Helles und dunkles Design mit Sprachwechsel zwischen Englisch und Arabisch." },
      ],
      apps: {
        patient: {
          label: "Patienten-App",
          screens: [
            "Start", "Top-Ärzte & Hilfe", "Ärzte, Kliniken & Apotheken", "Medizinische Artikel", "Medizinisches Konto",
            "Beratungsanruf", "Anruf-Benachrichtigung", "Start (dunkel)", "Artikel (dunkel)", "Einstellungen (dunkel)",
          ],
        },
      },
    },
    "madar-ex": {
      tagline: "Versandplattform mit Kunden- und Fahrer-App",
      intro:
        "Eine Plattform für Sendungszustellung in Saudi-Arabien, umgesetzt als zwei verbundene, arabisch-first Apps. Kunden beauftragen und verfolgen Sendungen, Fahrer finden, bepreisen und übernehmen Aufträge in der Nähe.",
      overview: [
        "In der Kunden-App sehen Nutzer verfügbare Fahrer auf der Karte, prüfen Fahrzeug und Bewertung, wählen Start- und Zielpunkt und kontrollieren Route und Preis vor dem Absenden. Jede Bestellung lässt sich Schritt für Schritt verfolgen.",
        "Die Fahrer-App öffnet mit einem Dashboard für Aufträge, Einnahmen und Wallet-Guthaben. Eine Karte zeigt Sendungen in der Nähe, sortierbar nach Preis, und jeder Auftrag hat eine Schnellvorschau sowie vollständige Details zu Absender, Paketbeschreibung und Gewicht.",
      ],
      role: "Flutter-Entwickler",
      platforms: "Android & iOS",
      highlights: ["2 verbundene Apps", "Arabisch-first (RTL)", "Disposition per Karte"],
      features: [
        { title: "Fahrer auf der Karte", body: "Kunden sehen verfügbare Fahrer in ihrer Nähe und können Profil und Bewertung öffnen." },
        { title: "Route & Sofortpreis", body: "Orte auf der Karte wählen und Route und Preis vor dem Absenden erhalten." },
        { title: "Tracking Schritt für Schritt", body: "Eine Zeitleiste von Bestellt und Abgeholt bis Unterwegs, mit der Route auf der Karte." },
        { title: "Bestellverlauf", body: "Bestellungen nach Status filtern: alle, in Zustellung, offen und zugestellt." },
        { title: "Fahrer-Dashboard", body: "Heutige und abgeschlossene Aufträge, Gesamteinnahmen, Wallet-Guthaben und Auszahlungen." },
        { title: "Karte mit Aufträgen", body: "Sendungen rund um den Fahrer, nach Preis sortierbar, mit Schnellvorschau und Bewerbung." },
      ],
      apps: {
        customer: {
          label: "Kunden-App",
          screens: ["Splash", "Fahrer in der Nähe", "Fahrerdetails", "Ort wählen", "Route & Preis", "Bestellverfolgung", "Bestellverlauf"],
        },
        driver: {
          label: "Fahrer-App",
          screens: ["Dashboard", "Auftragskarte", "Auftragsvorschau", "Auftragsdetails", "Fahrerprofil"],
        },
      },
    },
    rassah: {
      tagline: "Mitspieler finden und lokale Sport- & Spielrunden beitreten",
      intro:
        "Eine Social-App, mit der man Mitspieler in der Nähe findet und an echten Aktivitäten teilnimmt, etwa Fußball, Padel, Volleyball, Basketball und Baloot-Abende.",
      overview: [
        "Rassah bringt Menschen zusammen, die spielen wollen. Nutzer entdecken Runden in ihrer Umgebung als Liste oder auf der Karte, sehen Gastgeber und Teilnehmer und sichern sich mit wenigen Taps einen Platz.",
        "Jeder kann Gastgeber sein. Für eine neue Runde braucht es ein Titelbild, die Aktivität, einen Titel, Datum, Uhrzeit, die Zahl der benötigten Spieler und einen Preis. Profile schaffen Vertrauen durch Bewertungen, veranstaltete Runden und Abschlussquote.",
        "Rassah entstand für denselben Kunden wie Madar EX.",
      ],
      role: "Flutter-Entwickler",
      platforms: "Android & iOS",
      highlights: ["Entdecken per Karte", "Veranstalten oder mitmachen", "Vertrauen & Bewertungen"],
      features: [
        { title: "In der Nähe entdecken", body: "Standortbasierter Feed mit Filtern für heute, in der Nähe und beliebt, plus Wochenend-Highlights." },
        { title: "Karte mit Live-Runden", body: "Nach Aktivität farbcodierte Pins mit einer Liste der nächstgelegenen Runden." },
        { title: "Rundendetails", body: "Ort, Entfernung, Uhrzeit, Dauer, freie Plätze, Bewertung des Gastgebers und Teilnehmer." },
        { title: "Beitritt mit einem Tap", body: "Sofort beitreten und den eigenen Status direkt aktualisiert sehen." },
        { title: "Runde erstellen", body: "Titelbild, Aktivität, Termin, benötigte Spieler und Preis in einem Formular." },
        { title: "Vertrauenswürdige Profile", body: "Verifiziert-Abzeichen, Bewertung, veranstaltete Runden, Abschlussquote und Lieblingsaktivitäten." },
      ],
      apps: {
        app: {
          label: "Mobile App",
          screens: [
            "Splash", "Onboarding", "Login", "Entdecken", "Rundenkarte", "Rundendetails",
            "Beigetreten", "Erstellen: Aktivität", "Erstellen: Details", "Profil",
          ],
        },
      },
    },
    raf: {
      tagline: "Multi-Vendor-Marktplatz für Parfüm und Beauty",
      intro:
        "Eine zweisprachige Multi-Vendor-Shopping-App für den Oman. Kunden stöbern in Shops und Produkten, wählen Größen, bezahlen in Omanischen Rial und verfolgen jede Bestellung.",
      overview: [
        "RAF bündelt viele Händler in einer Arabisch-first-Storefront. Nutzer stöbern in Kategorien wie Parfüm, Gesichtspflege und Beauty-Geräte, besuchen die Shops einzelner Händler, suchen und sortieren Produkte und speichern Favoriten auf einer Wunschliste.",
        "Der Checkout läuft in klaren Schritten vom Warenkorb über die Zahlungsart bis zur Bestellübersicht, inklusive Mehrwertsteuer, Versandkosten und Rabattcodes. Kunden verfolgen den Status jeder Bestellung, setzen die Lieferadresse auf der Karte, hinterlegen ein Bankkonto für Erstattungen und wählen, welche Benachrichtigungen sie erhalten. Die gesamte App funktioniert auf Arabisch und Englisch.",
      ],
      role: "Flutter-Entwickler",
      platforms: "Android & iOS",
      highlights: ["Multi-Vendor-Marktplatz", "Zweisprachig AR / EN", "Für den Oman gebaut (OMR)"],
      features: [
        { title: "Händler-Shops", body: "Jeder Händler hat eine Shopseite mit Bewertung, Standort, Produktanzahl, Kategorien und eigener Suche." },
        { title: "Produktoptionen", body: "Größen, Menge, Verfügbarkeit, Spezifikationen und Bewertungen, plus Schnellkauf direkt aus der Liste." },
        { title: "Checkout in Schritten", body: "Zahlungsart und Bestellübersicht mit Mehrwertsteuer, Versand und Rabattcodes vor dem Bezahlen." },
        { title: "Bestellverfolgung", body: "Bestellhistorie mit Statusanzeige und eine Detailseite mit Lieferadresse, Artikeln und Summen." },
        { title: "Lieferung per Karte", body: "Kunden setzen ihre Lieferadresse auf der Karte und können nach Gebieten und Straßen suchen." },
        { title: "Benachrichtigungen & Erstattungen", body: "Benachrichtigungen nach Typ, Einstellungen pro Kategorie und ein Bankkonto für Erstattungen." },
      ],
      apps: {
        customer: {
          label: "Shopping-App",
          screens: [
            "Splash", "Login", "Konto erstellen",
            "Kategorien", "Händler-Shop", "Suche",
            "Produktdetails", "Größe & Menge", "Spezifikationen", "Schnellkauf", "Zum Warenkorb hinzugefügt", "Wunschliste",
            "Warenkorb", "Lieferort", "Zahlungsart", "Bestellübersicht",
            "Meine Bestellungen", "Bestelldetails", "Bankkonto für Erstattungen", "Benachrichtigungen", "Benachrichtigungseinstellungen",
            "Produkt (Englisch)", "Warenkorb (Englisch)", "Benachrichtigungen (Englisch)",
          ],
        },
      },
    },
  },
};

export default de;
