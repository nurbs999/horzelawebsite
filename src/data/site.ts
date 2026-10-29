/** Central settings and portfolio data for Martin Horzela */
export const siteConfig = {
  name: 'Martin Horzela',
  email: 'kontakt@martinhorzela.de',
  contactReady: true,
  title: 'Martin Horzela – 3D, Web & KI-Projekte von A bis Z',
  description: 'Technischer Partner für anspruchsvolle 3D-Konfiguratoren, WebGL, Unreal Engine und maßgeschneiderte KI-Lösungen. Begleitung von der Schätzung bis zur Projektpflege.',
  linkedin: 'https://de.linkedin.com/in/martin-horzela-5b6a26103',
  xing: 'https://www.xing.com/profile/Martin_Horzela',
};

const subject = 'Anfrage zu einem gemeinsamen Projekt';
const body = 'Hallo Martin,\n\nich habe dein Portfolio gesehen und möchte über ein potenzielles Projekt sprechen:\n\nUnser Vorhaben:\nAktueller Stand:\nBesondere Herausforderungen:\n\nBeste Grüße';
export const contactMailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const projects = [
  {
    id: 'pina',
    number: '01',
    badge: 'PRODUKTIV IM DAUEREINSATZ',
    badgeType: 'live',
    title: 'Pina Sonnensegel: 3D-Konfigurator & RAG-Chatbot',
    subtitle: 'Komplexe Geometrie verständlich visualisiert – von der Millimeter-Berechnung bis zur KI-Kundenberatung.',
    image: '/images/pina-konfigurator.jpg',
    liveUrl: 'https://konfigurator.sonnensegel-pina.de',
    client: 'Pina-Design (Sonnensegel & Montagesysteme)',
    tags: ['WebGL & 3D', 'RAG / KI-Chatbot', 'Produktkonfiguration', 'Full-Cycle Betreuung'],
    overview: 'Sonnensegel sind technisch hochkomplex: Masten, Auslenkungen, Zugkräfte und Wandpunkte müssen exakt berechnet werden. Statt trockener Tabellen entstand eine flüssige, interaktive 3D-Welt im Browser, die Kunden durch den gesamten Kaufprozess führt.',
    steps: [
      { step: '01', title: 'Produkt- & Geometrieverständnis', desc: 'Tiefes Einarbeiten in Segelstatik, Montage-Szenarien und Beschlagteile.' },
      { step: '02', title: '100% Eigenentwicklung in WebGL', desc: 'Interaktive 3D-Engine im Browser mit millimetergenauer Echtzeit-Berechnung.' },
      { step: '03', title: 'Maßgeschneidertes RAG-System', desc: 'KI-Chatbot mit Zugriff auf technisches Fachwissen zur direkten Beratung im Tool.' },
      { step: '04', title: 'Release & jahrelange Pflege', desc: 'Kontinuierliche Performance-Optimierung, Wartung und Feature-Erweiterung.' },
    ],
  },
  {
    id: 'gartenplaner',
    number: '02',
    badge: 'IN AKTIVER ENTWICKLUNG',
    badgeType: 'dev',
    title: 'Immersiver Gartenplaner: Vom PC direkt in die VR-Brille',
    subtitle: 'Wunschgarten am Desktop gestalten und mit der VR-Brille 1:1 im eigenen Garten erleben.',
    image: '/images/gartenplaner-vr.jpg',
    liveUrl: '',
    client: 'Eigenentwicklung & Partner',
    tags: ['Unreal Engine', 'Virtual Reality (VR)', 'Echtzeit-3D', 'Architektur & Landschaft'],
    overview: 'Zweidimensionale Pläne machen es Bauherren schwer, räumliche Dimensionen zu begreifen. Dieses Projekt schließt die Lücke: Den Garten am PC frei planen und anschließend mit der VR-Brille direkt vor Ort in Lebensgröße (1:1) begehen, noch bevor der erste Spatenstich getan ist.',
    steps: [
      { step: '01', title: 'Konzeption & Machbarkeitsanalyse', desc: 'Leistungsfähiges Echtzeit-Rendering für anspruchsvolle Pflanzen- und Lichtsimulation.' },
      { step: '02', title: 'Unreal Engine Architektur', desc: 'High-End 3D-Visualisierung mit flüssigen 90+ FPS für ein immersives VR-Erlebnis.' },
      { step: '03', title: '1:1 Skalierung vor Ort', desc: 'Maßstabsgetreue Projektion der Planung direkt in den physischen Garten.' },
      { step: '04', title: 'Schritt zur Marktreife', desc: 'Laufende Weiterentwicklung vom Prototyping hin zum professionellen Planungswerkzeug.' },
    ],
  },
  {
    id: 'next-project',
    number: '03',
    badge: 'IHR PROJEKT',
    badgeType: 'upcoming',
    title: 'Ihr nächstes Leuchtturm-Projekt: Von A bis Z',
    subtitle: 'Kein Code-Monkey, sondern ein Partner, der mitdenkt, realistisch schätzt und liefert.',
    image: '',
    liveUrl: '#kontakt',
    client: 'Gemeinsam mit Ihnen',
    tags: ['3D / WebGL', 'Maßgeschneiderte KI', 'Individuelle Web-Apps', 'End-to-End Partnerschaft'],
    overview: 'Sie haben eine anspruchsvolle Idee für einen 3D-Konfigurator, ein VR-Tool oder eine maßgeschneiderte KI-Anwendung? Ich begleite Sie von der allerersten Aufwandsschätzung bis zum erfolgreichen Betrieb.',
    steps: [
      { step: '01', title: 'Ehrliche Aufwandsschätzung', desc: 'Keine Luftschlösser: klare Roadmap, transparente Meilensteine und echte Machbarkeit.' },
      { step: '02', title: 'Tiefes Geschäftsverständnis', desc: 'Ich verstehe Ihre Kunden und Produkte, bevor die erste Zeile Code geschrieben wird.' },
      { step: '03', title: '100% Hands-on Entwicklung', desc: 'Saubere, wartbare Architektur nach modernen Web-, 3D- und KI-Standards.' },
      { step: '04', title: 'Verlässliche Projektpflege', desc: 'Ich bleibe an Bord, wenn das Projekt live ist – für Updates, Pflege und Skalierung.' },
    ],
  },
] as const;

export const processPhases = [
  {
    number: '01',
    title: 'Schätzung & Machbarkeit',
    tagline: 'Ehrlich gerechnet statt schöngeredet',
    text: 'Jedes Projekt beginnt mit einer fundierten Analyse: Was ist technisch machbar? Wo lauern Risiken? Sie erhalten eine realistische Aufwandsschätzung und einen verlässlichen Zeitplan.',
  },
  {
    number: '02',
    title: 'Produkt- & Domänenwissen',
    tagline: 'Ihre Branche wirklich verstehen',
    text: 'Code ist nur Mittel zum Zweck. Ich tauche tief in Ihr Produkt, Ihre Fachbegriffe und Kundenbedürfnisse ein. Nur wer das Problem versteht, baut die richtige Lösung.',
  },
  {
    number: '03',
    title: '100% Hands-on Entwicklung',
    tagline: 'WebGL, 3D, KI & modernstes Web',
    text: 'Keine Subunternehmer, keine Weitergabe: Ich entwickle Ihre Anwendung persönlich von Grund auf – wartbar, performant und mit modernster Architektur.',
  },
  {
    number: '04',
    title: 'Release & Deployment',
    tagline: 'Souverän und sicher live gehen',
    text: 'Von der Server-Konfiguration über automatisierte CI/CD-Pipelines bis zum Rollout: Ein reibungsloser Start ohne böse Überraschungen.',
  },
  {
    number: '05',
    title: 'Projektpflege & Partnerschaft',
    tagline: 'Da, wenn es drauf ankommt',
    text: 'Nach dem Launch geht es erst richtig los. Ich begleite Ihr Projekt über Jahre hinweg, pflege Systeme, baue neue Features und integriere neue Technologien wie KI.',
  },
] as const;

export const faqs = [
  {
    question: 'Was unterscheidet Sie von einer klassischen Agentur oder reinen Freelancern?',
    answer: 'Bei mir gibt es keinen Wasserkopf und keine stillen Posten: Sie sprechen direkt mit dem Menschen, der Ihre Software konzipiert, schätzt und selbst programmiert. Ich denke über den Tellerrand des reinen Codings hinaus und übernehme Verantwortung für das gesamte Projekt von A bis Z.',
  },
  {
    question: 'Können Sie auch bestehende 3D- oder Web-Projekte übernehmen und weiterentwickeln?',
    answer: 'Ja. Bei Pina-Design und anderen Projekten habe ich bestehende Systeme analysiert, refaktoriert, mit modernen Technologien (wie WebGL und KI/RAG) erweitert und dauerhaft in die Pflege übernommen.',
  },
  {
    question: 'Wie läuft eine typische Zusammenarbeit ab?',
    answer: 'Wir starten mit einem unverbindlichen Kennenlernen und einer Machbarkeitsprüfung. Anschließend erstelle ich eine detaillierte Schätzung. In kurzen Feedback-Schleifen sehen Sie regelmäßig funktionierende Zwischenstände.',
  },
  {
    question: 'Wie binden Sie KI in bestehende Produkte ein?',
    answer: 'KI muss einen echten Mehrwert bieten – etwa als RAG-Chatbot (Retrieval-Augmented Generation) mit Zugriff auf internes Firmenwissen im Konfigurator oder zur automatisierten Datenverarbeitung. Wir prüfen genau, wo KI Zeit spart und Kunden hilft.',
  },
] as const;
