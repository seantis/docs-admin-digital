---
title: Neuerungen
description: Aktuelle Änderungen und neue Funktionen von admin.digital
---

# Neuerungen

!!! tip "Komplettes Changelog"
    Entwickler:innen können hier das komplette technische Changelog nachlesen: [CHANGES.md auf GitHub](https://github.com/OneGov/onegov-cloud/blob/master/CHANGES.md)
---
## 2026.18
*Veröffentlicht am 27.03.2026*

### Neuerungen

#### Allgemein
- CORS-Header für GET- und HEAD-Anfragen hinzugefügt

#### ElectionDay
- Verbesserte Fehlermeldungen in der API (u.a. für Authentifizierungs- und Serverfehler)
- Unterstützung für eCH-0252 V2.0.0 hinzugefügt
- Verbesserte Fehlermeldung bei nicht unterstütztem DOI
- Wahlen vom gleichen Datum werden beim Import nicht mehr gelöscht, sondern nur noch Wahlen innerhalb desselben Wahlverbunds

#### PAS
- Zertifikatsnutzung bei API-Anfragen aktiviert

### Behobene Fehler

#### Allgemein
- Fehlerhafte `href="False"`-Ausgabe in der Veranstaltungs-Ticket-Ansicht behoben
- Fehlende `connect-src`-Direktive für den Plausible-Analysedienst ergänzt

#### PAS
- Einheitliches Dropdown für die Spesenerfassung
---

## 2026.17
*Veröffentlicht am 26.03.2026*

### Neuerungen

#### Allgemein
- Erstellungsdatum zu Veranstaltungs-Export hinzugefügt
- Fehlermeldung bei verschachtelten Felddefinitionen in Formularen (werden aktuell nicht unterstützt)
- Breadcrumbs in Suchergebnissen für mehr Kontext hinzugefügt
- Neuer Callback zur Anpassung des Login-Verhaltens

#### Agency
- Ladeverhalten für API-Abfragen optimiert (Performance-Verbesserung)

#### ElectionDay
- Verbesserte Fehlermeldungen in der API (u.a. für Authentifizierungs- und Serverfehler)
- Unterstützung für eCH-0252 V2.0.0 hinzugefügt
- Verbesserte Fehlermeldung bei nicht unterstütztem DOI
- Wahlen vom gleichen Datum werden beim Import nicht mehr gelöscht, sondern nur noch Wahlen innerhalb desselben Wahlverbunds

#### Feriennet
- Zwei neue Empfängergruppen für den Versand: «Organisatoren ohne Angebote» und «Benutzer mit Teilnehmenden ohne Wünsche oder Buchungen»

#### Landsgemeinde
- Breadcrumbs in Suchergebnissen hinzugefügt

#### PAS
- SAML2-Login für Parlamentsmitglieder
- Spesenerfassung (Allowances) hinzugefügt

### Behobene Fehler

#### Allgemein
- Fehler beim Filtern von Veranstaltungen nach Quelle (Source-Filter) behoben

#### PAS
- PDF-Export verbessert: Logo hinzugefügt, Seitenränder angepasst
- Fehler bei der KUB-Konfiguration behoben

#### Allgemein (Org)
- Möglicher `KeyError` in der Kaba-Konfiguration behoben
- Seltener Fehler beim automatischen Akzeptieren von Reservations-Tickets behoben
- Absturz in der Ticket-Ansicht bei ungültigem Besitzerfilter behoben
---

## 2026.16
*Veröffentlicht am 18.03.2026*

### Neuerungen

#### ElectionDay
- Verbesserte Fehlermeldungen in der API (u.a. für Authentifizierungs- und Serverfehler)
- Unterstützung für eCH-0252 V2.0.0 hinzugefügt
- Verbesserte Fehlermeldung bei nicht unterstütztem DOI

### Behobene Fehler

#### Landsgemeinde
- Entwürfe waren öffentlich sichtbar und zugänglich – behoben

---

## 2026.15
*Veröffentlicht am 17.03.2026*

### Neuerungen

#### Allgemein
- Veranstaltungs-API-Endpunkt um Filtermöglichkeiten erweitert

---

## 2026.14
*Veröffentlicht am 17.03.2026*

### Neuerungen

#### Agency
- Neue Benutzeroberfläche auf Basis von Foundation 6

#### Allgemein
- HTML-Link zu Personen, Agenturen und Mitgliedschaften in der API hinzugefügt
- Verbesserter Prompt für den Formular-Code-Generator
---
## 2026.13
*Veröffentlicht am 13.03.2026*

### Neuerungen

#### Allgemein
- Maximale Zeichenanzahl für Ticket-Nachrichten erhöht
- Migrations-Links aus den Einstellungen entfernt
- KI-Unterstützung zur Generierung von Formular-Code hinzugefügt
- Formular-Code-Link zeigt neu auf docs.admin.digital

#### ElectionDay
- Anzahl eingegangener Stimmen wird nun explizit importiert und gespeichert (relevant für komplexe Abstimmungen)

### Behobene Fehler

#### Allgemein
- Fehlerhafte Anzeige von beliebigen Dateien in der Fotoalbum-Bildauswahl behoben
- Fehlerhafte Anzeige von beliebigen Dateien im Datei-Picker behoben
- Fehler beim erneuten Veröffentlichen eines zurückgezogenen Anlasses über dessen Ticket behoben
- Leerer Reservations-Export behoben
- Fehler im Formular-Code-Parser beim Escaping von Hilfetexten behoben

#### PAS
- Berechtigungen für den Datei-Download durch Parlamentsmitglieder korrigiert
---
## 2026.12
*Veröffentlicht am 09.03.2026*

### Neuerungen

#### Allgemein
- KI-Unterstützung zur Generierung von Formularcode hinzugefügt
- Link zum Formularcode zeigt neu auf docs.admin.digital
- E-Mail-Benachrichtigung wenn eine Kommission finalisiert wurde

#### Feriennet
- Bezeichnung «Teilnehmer» zu «Fahrgemeinschaftskontakte» geändert und Infopanel zur Erklärung hinzugefügt

#### PAS
- Bezeichnung für Dezimalstunden-Eingabe präzisiert

---

### Behobene Fehler

#### Allgemein
- Fehlendes Grössen-Attribut im Fotoalbum (Rastermodus) behoben
- Möglicher Float-Unterlauf-Fehler bei Suchanfragen behoben

#### PAS
- Zwei kleinere Fehler im Export behoben
---
## 2026.11
*Veröffentlicht am 27.02.2026*

### Neuerungen

#### Allgemein
- Funktion zum Ändern von Benutzernamen für Admins hinzugefügt (nur für Benutzer ohne externen Login-Anbieter, Admin muss YubiKey oder TOTP eingerichtet haben)

#### Feriennet
- Fehlermeldung bei nicht darstellbaren Dateien im Fotoalbum

#### Wab
- Behandlung ungültiger Abstimmungstag-Daten
- Verhinderung von Duplikaten beim Hochladen archivierter Resultate in Entwicklungs- und Staging-Umgebungen

---

### Behobene Fehler

#### Allgemein
- Verbesserte Stabilität bei Benutzer-Session (Fehler durch abgetrennte Benutzerobjekte behoben)
- Korrektur einer invertierten Bedingung in der Reservierungsanzeige

#### Feriennet
- Wunschlisteninformationen werden nun auch ausserhalb der aktiven Wunschlistenphase angezeigt
- Absturz bei fehlendem Attribut (z. B. bei Videos) im Fotoalbum und der Fotoalbum-Übersicht behoben

#### PAS
- Fehler mit Komma im Dateinamen unter Windows behoben
- Adresse passt nun korrekt in den Brief
- Korrekter Wert für Plenarsitzung wird angezeigt
- Werte werden auf zwei Dezimalstellen gerundet
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