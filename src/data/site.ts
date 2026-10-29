/** Central settings. Both release flags intentionally remain false in this draft. */
export const siteConfig = {
  name: 'Martin Horzela',
  email: 'kontakt@martinhorzela.de',
  contactReady: false,
  launchReady: false,
  title: 'Martin Horzela – KI für Handwerk & kleine Unternehmen',
  description: 'Lokale KI, Chatbots und individuelle Software für kleine Unternehmen und Handwerksbetriebe. Martin Horzela begleitet Planung, Umsetzung und Ihr Team.',
  linkedin: 'https://de.linkedin.com/in/martin-horzela-5b6a26103',
  xing: 'https://www.xing.com/profile/Martin_Horzela',
};

const subject = 'KI-Unterstützung für unseren Betrieb';
const body = 'Guten Tag Herr Horzela,\n\nwir möchten prüfen, wie KI uns bei folgender Aufgabe unterstützen kann:\n\nUnser Betrieb:\nUnsere Aufgabe:\nBisherige Arbeitsweise oder Software:\nUnser Ziel:\n\nFreundliche Grüße';
export const contactMailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const services = [
  {
    number: '01', key: 'local', icon: 'server', category: 'LOKALE KI',
    title: 'Ihr Wissen.\nAm richtigen Ort.',
    description: 'Anleitungen, Produktwissen und interne Abläufe leichter finden: Ich entwickle lokal betreibbare KI-Lösungen, die mit ausgewählten Informationen aus Ihrem Unternehmen arbeiten.',
    benefit: 'Für ein Team, das weniger suchen muss.',
    tags: ['Unternehmenswissen', 'Interne Assistenten'],
  },
  {
    number: '02', key: 'chat', icon: 'chat', category: 'KI-ASSISTENTEN & CHATBOTS',
    title: 'Gute Antworten.\nDirekt in Ihrer Anwendung.',
    description: 'Ein Assistent, der Ihr Angebot erklärt und Kunden bei der Auswahl begleitet. Ich integriere KI in Websites, interne Anwendungen und Produktkonfiguratoren.',
    benefit: 'Für Fragen, die sonst immer wieder bei Ihnen landen.',
    tags: ['Kundenservice', 'Produktberatung'],
  },
  {
    number: '03', key: 'code', icon: 'cube', category: 'SOFTWARE & 3D',
    title: 'Ihre Software.\nEinen Schritt weiter.',
    description: 'Bestehende Anwendungen erweitern, Schnittstellen verbinden und 3D-Konfiguratoren mit KI weiterentwickeln. KI-generierten Code prüfe ich fachlich, bevor er Teil der Anwendung wird.',
    benefit: 'Für Ideen, aus denen funktionierende Anwendungen werden.',
    tags: ['Webentwicklung', '3D-Konfiguratoren'],
  },
  {
    number: '04', key: 'team', icon: 'people', category: 'KI IM TEAM',
    title: 'Technik einführen.\nMenschen mitnehmen.',
    description: 'Wir üben an echten Aufgaben aus Ihrem Betrieb: passende Anweisungen formulieren, Ergebnisse prüfen und sinnvolle Arbeitsabläufe entwickeln. Verständlich, auch ohne KI-Vorwissen.',
    benefit: 'Für Mitarbeitende, die selbst weiterkommen.',
    tags: ['Praxisbegleitung', 'Wissen aufbauen'],
  },
] as const;

export const steps = [
  { number: '01', title: 'Verstehen.', text: 'Wir sprechen über Ihren Betrieb, Ihre Abläufe und eine Aufgabe, die Sie konkret entlasten möchten.' },
  { number: '02', title: 'Klein anfangen.', text: 'Wir stecken den ersten Anwendungsfall ab: Was soll die Lösung leisten, welche Daten braucht sie und woran erkennen wir den Nutzen?' },
  { number: '03', title: 'Gemeinsam umsetzen.', text: 'Ich entwickle und integriere. Sie geben Rückmeldung. Zwischenergebnisse prüfen wir an Aufgaben aus Ihrem Alltag.' },
  { number: '04', title: 'Im Alltag anwenden.', text: 'Ihr Team lernt die Lösung kennen. Wir halten fest, wie sie genutzt wird und welche nächsten Schritte sinnvoll sind.' },
] as const;

export const faqs = [
  { question: 'Ist mein Betrieb nicht zu klein für KI?', answer: 'Entscheidend ist die Aufgabe, nicht die Größe Ihres Betriebs. Wiederkehrende Fragen, verstreute Informationen oder häufige Routinearbeiten können ein guter Ausgangspunkt sein. Wir beginnen mit einem überschaubaren Anwendungsfall und prüfen, ob KI dafür sinnvoll ist.' },
  { question: 'Muss die KI auf einem eigenen Server laufen?', answer: 'Nein. Welche Betriebsform passt, hängt von Ihren Daten, der Aufgabe und der vorhandenen Technik ab. Lokaler Betrieb kann sinnvoll sein. Wir klären aber zuerst die Anforderungen und entscheiden dann, welche Lösung zu Ihrem Betrieb passt.' },
  { question: 'Was passiert mit unseren Unternehmensdaten?', answer: 'Vor der Umsetzung legen wir fest, welche Informationen die Anwendung nutzen darf, wer darauf zugreifen kann und wo sie verarbeitet werden. Auch bei einer lokalen Lösung müssen Zugriffe, Aktualisierungen und Sicherungen geplant werden. Pauschale Versprechen ersetzen diese Prüfung nicht.' },
  { question: 'Kann unsere vorhandene Software eingebunden werden?', answer: 'Das prüfen wir gemeinsam. Entscheidend ist, welche Schnittstellen und Zugriffsmöglichkeiten Ihre Software bietet. Je nach Ausgangslage kann eine direkte Integration, eine ergänzende Anwendung oder zunächst ein kleiner Test sinnvoll sein.' },
  { question: 'Braucht mein Team schon KI-Erfahrung?', answer: 'Sie brauchen weder ein fertiges technisches Konzept noch KI-Vorkenntnisse. Wir setzen bei Ihren Aufgaben und dem vorhandenen Wissen an. Zur Einarbeitung gehört auch, Antworten kritisch zu prüfen und die Grenzen der Anwendung zu verstehen.' },
  { question: 'Was kostet das – und wie lange dauert es?', answer: 'Das lässt sich nach einem Blick auf Aufgabe, Daten und vorhandene Systeme seriös einschätzen. Deshalb grenzen wir den ersten Schritt klar ein. Umfang und Aufwand besprechen wir, bevor die Umsetzung beginnt.' },
] as const;
