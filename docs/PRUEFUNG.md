# Prüfung des Website-Entwurfs

Stand: 28. Oktober 2026.

## Erfolgreich geprüft

- `npm run check`: 14 Astro-Dateien, keine Fehler, Warnungen oder Hinweise.
- `npm run build`: statischer Build mit Startseite, Impressum-Entwurf, Datenschutz-Entwurf, 404-Seite, robots.txt und Sitemap.
- Interne Links, Zielseiten, Fragment-IDs und eingebundene Bild-/Script-/Stylesheet-Dateien im gebauten HTML: keine fehlenden Ziele.
- Genau eine H1 pro HTML-Seite, Alternativtexte sowie Breiten- und Höhenangaben für beide Bilder.
- Desktop-Ansicht und mobile Vorschau im Browser visuell geprüft.
- Responsive Layoutbreiten von 320, 390, 600, 768, 1024 und 1440 Pixeln geprüft: kein horizontaler Dokumentüberlauf. Die Vorschau verwendete Iframes mit diesen Breiten; klassische Browser-Scrollbars verringern die innere Inhaltsbreite entsprechend.
- Beispielauswahl per Klick und rechter Pfeiltaste; Auswahlzustand und Antwort wechseln korrekt.
- Mobiles Menü öffnet; Escape schließt das Menü und setzt den Fokus auf den Schalter zurück.
- FAQ öffnet per nativer HTML-Interaktion. Beim Öffnen einer weiteren Antwort schließt die zuvor offene Antwort.
- Kontaktadresse ist im Entwurf kein aktiver Mailto-Link. Der manuelle Kopierhinweis greift, wenn die Clipboard-API im lokalen HTTP-Kontext nicht verfügbar ist.
- Die HTML-Dateien enthalten keine externen Script-, Bild- oder Stylesheet-Ladequellen. Webfonts werden ebenfalls lokal ausgeliefert.
- Entwurfsstatus: `noindex, nofollow`, robots.txt mit `Disallow: /`, leere Sitemap. Canonical verwendet die tatsächliche Vorschau-Adresse.
- Die vorübergehende Layout-Prüfseite wurde entfernt und ist nicht im Build enthalten.

Die JavaScript-Blöcke der Startseite umfassen zusammen rund 1,4 kB unkomprimierten Code. Die eigentlichen Inhalte werden statisch ausgeliefert.

## Grenzen und nächste Schritte

Dies ist kein vollständiges Barrierefreiheitsgutachten und kein Test auf physischen Geräten in sämtlichen Browsern. Die automatische Clipboard-Kopie ist im endgültigen HTTPS-Kontext zu prüfen. E-Mail-Versand, Empfang, produktive Domain sowie vollständige Rechtstexte können erst nach ihrer Einrichtung abschließend geprüft werden. Die Reihenfolge für die Freigabe steht in der README.
