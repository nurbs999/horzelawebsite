# Arbeitsanweisung für Claude

Dieses Projekt ist eine bestehende Astro-Website für Martin Horzela. Zielgruppe sind kleine Unternehmen und Handwerksbetriebe, die KI praktisch einsetzen möchten. Das Ziel ist ein verständlicher, hochwertiger One-Pager mit klarer Kontaktführung. Bestehenden Aufbau weiterentwickeln und konkrete Änderungswünsche umsetzen.

## Technischer Rahmen

- Astro mit statischem Build und TypeScript beibehalten.
- Vorhandenes CSS und vorhandene Komponenten nutzen. Kein Frameworkwechsel, kein neues UI-System und keine zusätzliche Laufzeitbibliothek ohne sachlichen Bedarf.
- JavaScript auf echte Interaktion begrenzen. Statische Inhalte bleiben statisch.
- Schriften und Bilder lokal ausliefern. Keine externen Fonts, eingebetteten Drittanbieterinhalte, Tracker oder Analytics ungefragt ergänzen.
- Mobile Darstellung, Tastaturbedienung, Fokuszustände und reduzierte Bewegung berücksichtigen.
- Secrets ausschließlich über Umgebungsvariablen verwenden; keine Zugangsdaten in Dateien speichern.

## Zuerst relevante Dateien lesen

`README.md` beschreibt Start und Freigabe. `src/data/site.ts` enthält Stammdaten und Statusschalter. `src/pages/index.astro` enthält den One-Pager, `src/styles/global.css` seine Gestaltung. Wiederverwendbare Elemente liegen in `src/components/`, das gemeinsame Grundgerüst in `src/layouts/BaseLayout.astro`. Quellen und Bildgrenzen stehen in `docs/`.

Vor größeren strukturellen Änderungen kurz erklären, was sich ändern soll. Kleine sinnvolle Korrekturen selbstständig durchführen. Keine funktionierenden Bereiche ohne Aufgabenbezug neu bauen, keine Inhalte ohne Grund löschen.

## Inhaltliche Regeln

Deutsch, persönlich und verständlich schreiben. Technische Begriffe erklären, wenn sie für Kunden wichtig sind. Keine erfundenen Kundenstimmen, Zertifikate, Reaktionszeiten, Preise, Garantien oder Erfolgszahlen ergänzen.

Die Zusammenarbeit mit Pina-Design ist ein laufendes Projekt. Die Bildmotive sind Illustrationen und dürfen nicht als echte Projektfotos oder als Porträt von Martin dargestellt werden. Keine pauschalen Zusagen zu Datenschutz, Sicherheit oder Rechtskonformität formulieren.

`contactReady` und `launchReady` zunächst auf `false` belassen. Änderungen daran erfordern die tatsächliche Erledigung der Voraussetzungen aus `README.md`. Rechtstextentwürfe nicht eigenständig als vollständige Angaben ausgeben.

## Prüfen und berichten

Nach relevanten Änderungen `npm run check` und `npm run build` ausführen. Desktop und mobile Ansicht sowie betroffene Interaktionen prüfen. Interne Links, H1, Title, Meta Description, Canonical, Alt-Texte und Bildladeverhalten berücksichtigen. Ergebnisse ehrlich berichten: Was geändert wurde, welche Prüfungen liefen und was offen bleibt. Keine Veröffentlichung auf einer produktiven Domain aus einer allgemeinen Änderungsanweisung ableiten.

## Prompt zum Kopieren

> Arbeite im vorhandenen Astro-Projekt für Martin Horzela weiter. Lies zuerst README.md, CLAUDE.md und die für meinen Wunsch relevanten Dateien. Bewahre das vorhandene Design, die statische Architektur und die lokale Auslieferung aller Assets. Setze folgende Änderung vollständig um: [ÄNDERUNG EINTRAGEN]. Prüfe danach Astro/TypeScript, den Build, mobile und Desktop-Darstellung sowie die betroffenen Links und Interaktionen. Ändere keine Freigabeschalter und veröffentliche nichts, solange ich das nicht ausdrücklich beauftrage. Berichte anschließend knapp über Änderungen, Prüfungen und offene Punkte.
