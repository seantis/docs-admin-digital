---
title: Neuerungen
description: Aktuelle Änderungen und neue Funktionen von admin.digital
---

# Neuerungen

!!! tip "Komplettes Changelog"
    Entwickler:innen können hier das komplette technische Changelog nachlesen: [CHANGES.md auf GitHub](https://github.com/OneGov/onegov-cloud/blob/master/CHANGES.md)

---

## 2026.10
*Veröffentlicht am 20.02.2026*

### Neuerungen

#### Allgemein
- MIME-Typ-Validierung bei Datei-Upload-Feldern in Formularen hinzugefügt

#### Feriennet
- Kontaktformular, Fotoalben und Helfen zur Hauptnavigation hinzugefügt

### Behobene Fehler

#### Wab
- Verbessertes Fehlerhandling beim XML-Datei-Upload

---

## 2026.9
*Veröffentlicht am 19.02.2026*

### Neuerungen

#### Feriennet
- Aktualisierung der Startseiten-Vorlage

#### PAS
- Massenoperationen für kürzeste Sitzung hinzugefügt
- Detailverbesserungen basierend auf Rückmeldungen

### Behobene Fehler

#### Allgemein
- Formulardarstellung bei angehängten Dateien korrigiert

#### Feriennet
- Benutzerauswahl bei manueller Buchung wieder korrekt vorbelegt
- Problem mit der Freiwilligenliste behoben: Neu geladene Angebots-Bedarfe konnten nicht zur Liste hinzugefügt werden
---

## 2026.8
*Veröffentlicht am 17.02.2026*

- Keine Änderungen

---

## 2026.7
*Veröffentlicht am 17.02.2026*

### Neuerungen

#### Buchungsplattform Ferienangebote (Pro Juventute)
- Verbesserte Ladegeschwindigkeit der Startseite

---

## 2026.6
*Veröffentlicht am 16.02.2026*

### Neuerungen

#### Allgemein
- Verbesserter Beschreibungstext für Kartenkonfiguration in Verzeichnissen

#### ElectionDay
- Verbesserte Darstellung von Antrag, Gegenantrag und Stichentscheid

### Behobene Fehler

#### Allgemein
- Fehlendes Icon im MwSt.-Einstellungsmenü behoben
- Darstellungsfehler im Dashboard bei nicht verfügbaren Web-Statistiken behoben

#### ElectionDay
- Fehlende Einrückung bei komplexen Abstimmungen ohne Resultate behoben

---

## 2026.5
*Veröffentlicht am 10.02.2026*

### Neuerungen

#### Allgemein
- Suchleiste im Startseiten-Slider und -Video verfügbar
- Reservierungsslots ausserhalb des Buchungsfensters zeigen keine irreführende Verfügbarkeitsanzeige mehr

#### Landsgemeinde
- Suchergebnisse können nach Datumsbereich gefiltert werden

#### Wab
- Ergebnisse von Antrag, Gegenantrag und Stichentscheid bei komplexen Abstimmungen separat dargestellt

### Behobene Fehler

#### Allgemein
- Darstellungsfehler bei Bildern behoben
- Fehler bei Stripe/Datatrans-Zahlungen (Sicherheitsrichtlinien) behoben
- Fehler bei Reservierungssperren ohne gesetzten Grund behoben
- Fehler beim Versand von Ticket-E-Mails behoben

#### Buchungsplattform Ferienangebote (Pro Juventute)
- Darstellungsfehler bei Zeiträumen behoben

---

## 2026.4
*Veröffentlicht am 30.01.2026*

### Neuerungen

#### Allgemein
- Verbesserte Validierung von iFrame-Domains

### Behobene Fehler

#### Allgemein
- Absturz bei der Migration von Verzeichnissen beim Umbenennen von Auswahloptionen behoben

#### PAS
- Validierung der Anwesenheit innerhalb eines Abrechnungslaufs korrigiert
- Korrekte Abschlussverarbeitung der Anwesenheit für Kommissionen sichergestellt

---

## 2026.3
*Veröffentlicht am 29.01.2026*

### Neuerungen

#### Allgemein
- Ressource-Wechsler in der Belegungsansicht hinzugefügt
- Button für Auslastungsstatistiken in der Belegungsansicht hinzugefügt
- Newsletter können nun kopiert werden
- Italienischsprachige Suche (it_ch) unterstützt

#### Buchungsplattform Ferienangebote (Pro Juventute)
- Banner-Funktion hinzugefügt

### Behobene Fehler

#### Allgemein
- Fehlende Zugriffshinweise in Boardlets ergänzt
- Fehler bei Reservierungssperren für nicht teilweise verfügbare Slots behoben

---

## 2026.2
*Veröffentlicht am 23.01.2026*

### Behobene Fehler

#### Allgemein
- Darstellungsfehler bei Bildern (Hintergrundgrösse) behoben
- Fehler beim Laden von Formularen ohne verknüpfte PDF-Datei behoben

---

## 2026.1
*Veröffentlicht am 16.01.2026*

### Neuerungen

#### Allgemein
- Konfigurierbare Web-Analytics-Anbieter (statt freiem Code)
- Umbenennung des Kontaktfelds in der Seitenleiste von Verzeichnissen
- Verbesserte E-Mail-Thread-Gruppierung bei Ticket-Mails
- Angenommene Reservierungen können von Admins nachträglich angepasst werden
- Administrative Reservierungssperren im Belegungskalender
- Beim Löschen von Ressourcen werden archivierte Tickets mit ungültigen Datumsfeldern korrekt behandelt
- Letzter Login der Benutzer wird explizit gespeichert

#### ElectionDay
- Karten- und Gemeindedaten für 2026 hinzugefügt

#### Buchungsplattform Ferienangebote (Pro Juventute)
- Schmale Banner für E-Mails hinzugefügt

#### PAS
- Längere Timeouts für externe API-Aufrufe

### Behobene Fehler

#### Allgemein
- Fehler bei doppeltem E-Mail-Header behoben
- Absturz beim Rechnungsexport mit vielen Ticket-Gruppen behoben
- Fehler beim Schliessen der Seitennavigation behoben
- Darstellungsfehler bei bestimmten Links behoben
- Fehler bei der Bildauswahl behoben

#### ElectionDay
- Gemeinde- und Quartierdaten für 2026 korrigiert

#### Buchungsplattform Ferienangebote (Pro Juventute)
- Reihenfolge der Angebote im Angebots-Widget korrigiert
- Fehler beim „Mehr anzeigen"-Filter behoben

#### PAS
- Performance-Fehler (N+1-Abfrage) behoben