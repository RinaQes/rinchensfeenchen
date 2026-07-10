/* ============================================================
   FEENCHEN – Inhalts-Konfiguration
   ------------------------------------------------------------
   Hier trägst du neue Inhalte ein, ohne den restlichen Code
   anfassen zu müssen. Beide Seiten (index.html & zuhause.html)
   lesen diese Liste aus und bauen Listen/Kacheln automatisch.

   WICHTIG:
   - Jeder Eintrag braucht ein Komma am Ende (außer der letzte
     in einer Liste).
   - "icon" ist ein Emoji oder kurzes Symbol.
   - "link" kann ein Link zu deinem PDF, Shop-Produkt o. Ä. sein.
     Solange du noch keinen Link hast, einfach "#" stehen lassen.
   - "zeigeAufStartseite": true  -> erscheint auch in der
     Vorschau auf index.html (nur die ersten paar Einträge).
   ============================================================ */

window.FEENCHEN_CONTENT = {

  /* ---------- Einstellungen für Systeme.io & Netlify ---------- */
  einstellungen: {
    zahlungsmittel: ["PayPal", "Überweisung", "Digistore24"],
    zahlungshinweis: "Zahlung: PayPal, Überweisung oder Digistore24"
  },

  /* ---------- Kostenlose PDFs ---------- */
  kostenlos: [
    {
      titel: "Kleine Atemreise für ruhige Abende",
      info: "PDF · 2 Seiten",
      link: "#",
      zeigeAufStartseite: true
    },
    {
      titel: "Feenchen-Malvorlage „Lichterwald“",
      info: "PDF · 1 Seite",
      link: "#",
      zeigeAufStartseite: true
    },
    {
      titel: "Wochenplaner mit kleinen Mut-Sprüchen",
      info: "PDF · 3 Seiten",
      link: "#",
      zeigeAufStartseite: true
    },
    {
      titel: "Kurzanleitung „Feenchen-Kreis zu Hause gestalten“",
      info: "PDF · 2 Seiten",
      link: "#",
      zeigeAufStartseite: false
    },
    {
      titel: "Mini-Übung „Stille Minute für Kinder“",
      info: "PDF · 1 Seite",
      link: "#",
      zeigeAufStartseite: false
    }
    /* Neuen kostenlosen Eintrag? Einfach ein Objekt wie oben
       hier einfügen (Komma davor nicht vergessen). */
  ],

  /* ---------- Feenchen-Schatz: kostenpflichtige PDFs ---------- */
  schatz: [
    {
      titel: "Mein Mutgeschichten-Buch",
      beschreibung: "Vorlesebuch voller kleiner Abenteuer – als PDF zum Download. Auf Wunsch auch personalisiert mit dem Namen eures Kindes.",
      preis: "9,90 €",
      icon: "📖",
      link: "#",
      zeigeAufStartseite: true
    },
    {
      titel: "Wissensblätter „Innere Ruhe“",
      beschreibung: "Set mit Übungen und Impulsen für mehr Gelassenheit im Alltag.",
      preis: "6,50 €",
      icon: "🧠",
      link: "#",
      zeigeAufStartseite: true
    },
    {
      titel: "Kindertraining „Achtsame Kraft“",
      beschreibung: "Spielerische Übungsreihe für Konzentration und Ruhe – Schritt für Schritt.",
      preis: "12,00 €",
      icon: "🌱",
      link: "#",
      zeigeAufStartseite: true
    },
    {
      titel: "Personalisiertes Kinderbuch",
      beschreibung: "Euer eigenes Buch nach Familienwunsch: mit Namen, Lieblingsmotiven und eigener Geschichte. Fertige Ausgaben gibt es als Download, individuelle Wünsche entstehen in der Wunsch-Werkstatt.",
      preis: "ab 19,90 €",
      icon: "🧚",
      link: "zuhause.html#werkstatt",
      zeigeAufStartseite: true
    },
    {
      titel: "Gute-Nacht-Geschichten-Sammlung",
      beschreibung: "Sieben sanfte Geschichten für den ruhigen Übergang in den Schlaf.",
      preis: "8,90 €",
      icon: "🌙",
      link: "#",
      zeigeAufStartseite: false
    },
    {
      titel: "Familien-Ritual-Karten",
      beschreibung: "24 Karten mit kleinen Ritualen für gemeinsame Momente im Familienalltag.",
      preis: "11,00 €",
      icon: "🍃",
      link: "#",
      zeigeAufStartseite: false
    },
    {
      titel: "Jahreszeiten-Journal",
      beschreibung: "Reflexions- und Achtsamkeitsseiten, die euch durch jede Jahreszeit begleiten.",
      preis: "14,50 €",
      icon: "✨",
      link: "#",
      zeigeAufStartseite: false
    },
    {
      titel: "Der PC-Pflegezauber",
      beschreibung: "Feenchen-Guide für einen klaren Rechner: Beraterpfad in fünf Schritten plus kleines Lexikon aller Tastenkombinationen und Befehle. Mit kostenloser Vorschau.",
      preis: "2,50 €",
      icon: "🔮",
      link: "schaetze/pc-pflegezauber.html",
      zeigeAufStartseite: true
    }
    /* Neues Produkt? Einfach ein Objekt wie oben hier einfügen. */
  ],

  /* ---------- Persönliche Analysen ---------- */
  analysen: [
    {
      titel: "Biorhythmus-Analyse",
      beschreibung: "Eine persönliche Auswertung deiner körperlichen, emotionalen und geistigen Rhythmen – als Orientierung für Alltag und Planung.",
      preis: "ab 14,90 €",
      icon: "🌗",
      link: "#",
      zeigeAufStartseite: true
    },
    {
      titel: "Bedarfsanalyse: Konflikte & Lösungen",
      beschreibung: "Eine einfühlsame Betrachtung einer Konfliktsituation mit konkreten, machbaren Lösungsvorschlägen für deinen Alltag.",
      preis: "ab 19,90 €",
      icon: "🕊️",
      link: "#",
      zeigeAufStartseite: true
    }
    /* Neue Analyse-Art? Einfach ein Objekt wie oben hier einfügen. */
  ],

  /* ---------- Empfehlungen von Herzen ---------- */
  empfehlungen: [
    {
      titel: "Das achtsame Kind",
      typ: "Buch",
      beschreibung: "Liebevolle Anregungen, um Kindern Achtsamkeit spielerisch näherzubringen.",
      link: "#",
      icon: "📚"
    },
    {
      titel: "Insight Timer",
      typ: "App",
      beschreibung: "Kostenlose App mit geführten Meditationen für Groß und Klein.",
      link: "#",
      icon: "🧘"
    },
    {
      titel: "Die Kraft der Wertschätzung",
      typ: "Buch",
      beschreibung: "Ein warmherziger Begleiter für mehr Verbindung in Beziehungen.",
      link: "#",
      icon: "💞"
    }
    /* Neue Empfehlung? Einfach ein Objekt wie oben hier einfügen. */
  ]

};
