# Martin Horzela – Astro-One-Pager

Ein responsiver One-Pager für KI-Unterstützung in kleinen Unternehmen und Handwerksbetrieben. Die Website stellt Martin Horzela, seine Leistungen und die laufende Zusammenarbeit mit Pina-Design vor. Sie führt Besucher über konkrete Anwendungsfälle zu einer Kontaktaufnahme per E-Mail.

Das Projekt ist als bearbeitbarer Astro-Quellcode aufgebaut. Es lässt sich in Claude oder einer normalen Entwicklungsumgebung weiterführen. Die Ausgangsversion ist ein Entwurf: Kontaktadresse, Rechtstexte und Freigaben müssen vor dem öffentlichen Livegang vervollständigt werden.

## Lokal starten

Voraussetzungen sind Node.js entsprechend dem Feld `engines` in `package.json` und npm. Die Abhängigkeiten werden über die mitgelieferte `package-lock.json` reproduzierbar installiert.

```bash
npm ci
npm run dev
```

Die lokale Adresse erscheint im Terminal. Zum Prüfen und Erstellen der statischen Website:

```bash
npm run check
npm run build
npm run preview
```

`check` prüft Astro und TypeScript; `build` erzeugt die auslieferbaren Dateien in `dist/`. `preview` stellt diesen Build lokal bereit. Diese Befehle sind eine Arbeitsanleitung und keine Aussage über bereits durchgeführte Prüfungen.

## Aufbau

| Datei oder Ordner | Aufgabe |
| --- | --- |
| `src/pages/index.astro` | Aufbau und Hauptinhalte des One-Pagers |
| `src/data/site.ts` | Stammdaten, Statusschalter, Leistungen und FAQs |
| `src/styles/global.css` | Farben, Typografie, Layout und responsive Regeln |
| `src/layouts/BaseLayout.astro` | Grundgerüst und Metadaten |
| `src/components/` | Wiederverwendbare Elemente wie Header, Footer, Icons und Beispielauswahl |
| `src/pages/impressum.astro` | Klar markierter Entwurf für das Impressum |
| `src/pages/datenschutz.astro` | Klar markierter Entwurf für Datenschutzangaben |
| `public/images/` | Lokale WebP-Motive in mehreren Größen |
| `astro.config.mjs` | Statischer Build und Website-Adresse |
| `docs/` | Quellen, Inhaltsgrenzen und Bilddokumentation |

## Gestaltungs- und Technikentscheidungen

Die Seite verbindet große, gut lesbare Überschriften mit konkreten Leistungsbeschreibungen und einer ruhigen Bildwelt. Die Inhalte bleiben auch ohne zusätzliche Interaktion zugänglich. Wiederkehrende Kontaktaktionen führen zu einem gemeinsamen Kontaktbereich; es wird kein externes Kontaktformular eingebunden.

Astro erzeugt statisches HTML. Das Styling erfolgt mit normalem CSS, die strukturierten Inhalte verwenden TypeScript. Manrope und DM Sans werden über lokale `@fontsource`-Pakete eingebunden. Für Schriften, Bilder oder Widgets sind beim Seitenaufruf keine externen Dienste vorgesehen. Das Projekt enthält keine vorgesehenen Analytics-, Tracking- oder Marketingintegrationen.

Die Bilder sind KI-generierte Illustrationen. Sie zeigen weder ein verifiziertes Kundenprojekt noch Martins tatsächliche Arbeitsumgebung. Einzelheiten stehen in `docs/BILDER.md`. Das Praxisbeispiel beschreibt laufende Arbeiten; es enthält keine erfundenen Ergebnisse, Kennzahlen oder Kundenstimmen.

## Inhalte bearbeiten

Stammdaten und wiederkehrende Texte möglichst in `src/data/site.ts` ändern. Den Abschnittsaufbau in `src/pages/index.astro` bearbeiten; globale Gestaltung in `src/styles/global.css` anpassen. Bestehende Komponenten weiterverwenden, bevor zusätzliche abstrahierte Systeme eingeführt werden.

Die Vorlage für Claude steht in `CLAUDE.md`. Sie beschreibt die technischen Grenzen und eine passende Arbeitsanweisung. Bei Textänderungen `docs/INHALTE-UND-QUELLEN.md` berücksichtigen: Öffentliche Berufsangaben, Angaben des Auftraggebers und vorgeschlagene Angebotstexte sind unterschiedlich belegt.

## Vor dem öffentlichen Livegang

1. Die endgültige Domain prüfen und `SITE_URL` in der Build-Umgebung setzen. Der Standardwert dient der privaten Vorschau; ein eigener Produktionsbuild benötigt seine tatsächliche Adresse.
2. Das Postfach `kontakt@martinhorzela.de` einrichten und Versand sowie Empfang testen. Danach `contactReady` in `src/data/site.ts` auf `true` setzen, einen neuen Entwurf bauen und den dadurch aktivierten E-Mail-Link testen.
3. Die Entwürfe für Impressum und Datenschutz durch passende, freigegebene Angaben zum tatsächlichen Betreiber und Hosting ersetzen. Auch die Entwurfsbezeichnungen in Title, Meta Description und Seiteninhalt anpassen. Die Entwürfe stellen keine fertigen Rechtstexte dar. Die Rechtseiten können weiterhin `noindex` bleiben; die Sitemap enthält nach Freigabe ausschließlich die Startseite.
4. Leistungsumfang, Ansprechpartnerangaben und die Veröffentlichung des Praxisbeispiels Pina-Design freigeben lassen. Bei Bedarf ein eigenes freigegebenes Porträt ergänzen.
5. `launchReady` zuletzt auf `true` setzen. Dieser Schalter steuert die für den Entwurfsstatus vorgesehenen Robots- und SEO-Einstellungen.
6. Einen neuen Build erstellen und vor Veröffentlichung prüfen. `noindex` und Robots-Regeln sind kein Zugriffsschutz; unveröffentlichte Entwürfe gehören in eine private Vorschau.

Beispiel für einen Build mit der späteren Domain:

```bash
SITE_URL=https://martinhorzela.de npm run build
```

## Prüfung nach Änderungen

Die relevanten Änderungen auf Mobilgeräten und Desktop prüfen. Besonders wichtig sind Navigation, Kontaktaktionen, Tastaturbedienung, sichtbarer Fokus, interne Links und fehlender horizontaler Überlauf. Außerdem Title, Meta Description, eine eindeutige H1, Canonical-Adresse, Alt-Texte und gegebenenfalls strukturierte Daten kontrollieren. Große Bilder sollen passende Größen und ein sinnvolles Ladeverhalten behalten.

Danach `npm run check` und `npm run build` ausführen. Neue externe Dienste, Formulare mit Speicherung oder Tracking erst nach einer ausdrücklichen Entscheidung ergänzen. Zugangsdaten gehören ausschließlich in Umgebungsvariablen und niemals in den Quellcode.
