---
title: Neuerungen
description: Aktuelle Änderungen und neue Funktionen von admin.digital
---

# Neuerungen

!!! tip "Komplettes Changelog"
    Entwickler:innen können hier das komplette technische Changelog nachlesen: [CHANGES.md auf GitHub](https://github.com/OneGov/onegov-cloud/blob/master/CHANGES.md)
---
## 2026.34
*Veröffentlicht am 02.07.2026*

### Neuerungen
#### Allgemein
- Hash pro Verzeichniseintrag hinzugefügt (zur Überprüfung der Datenintegrität)
- Speicherung von Signaturanfragen für eine genauere Abrechnung
- Nummernabgleich unterstützt jetzt Präfixe (z.B. "AKK-1234-5678")
- Benutzerdefinierte Kurzlinks hinzugefügt (z.B. https://govikon.ch/@kurzlink)
- Konfigurierte Feiertage werden im Ressourcen-Kalender angezeigt
- Personensuche bei der Personenübersicht hinzugefügt
- Keine Bearbeitungslinks mehr in der Sortieransicht

#### Feriennet
- Banner ersetzt

### Behobene Fehler
#### Allgemein
- Standardsprache für RSS-Feed korrigiert, falls keine Organisationssprache gesetzt ist
- Fehler beim Hochladen behoben, wenn Dateifeld fehlte
- Regression bei der Löschung von Zuteilungsregeln ohne Kandidaten behoben
- Instabile Sortierreihenfolge von zugelassenen iFrame-Domains behoben
- Entfernen von Veranstaltungsfiltern verhindert, die noch verwendet werden
- Sortierfunktion repariert
- Ungültige Jahres-, Status- oder Typangaben bei politischen Geschäften führen nicht mehr zu Fehlern

#### Agency
- Kartenbreite angepasst

#### ElectionDay
- Ungültige Domain-Werte im Archiv-Suchfilter werden ignoriert

#### Feriennet
- Fehlendes Icon beim Rechnungsimport behoben

#### PAS
- Buchungstext angepasst

---
## 2026.33
*Veröffentlicht am 19.06.2026*

### Neuerungen

#### Allgemein
- Ticket-Handler-Codes zeigen jetzt sprechende Anzeigenamen
- E-Mail-Betreff bei Reservierungen enthält neu Ressourcenname, Datum und Angebot (z.B. «Turnhalle – 15.06.2026 – Anfrage»)
- Benachrichtigungszeitpunkt für Ressourcen-Benachrichtigungen konfigurierbar
- Bildgrösse in Formulareingaben wird nach allfälliger Skalierung korrekt aktualisiert

#### ElectionDay
- Verbesserte Fehlermeldungen in der API (u.a. korrekte JSON-Fehler für 401 und 500)
- Unterstützung für eCH-0252 V2.0.0
- Verbesserte Fehlermeldung bei nicht unterstütztem DOI
- Wahlen mit gleichem Datum werden nicht mehr gelöscht – Bereinigung beschränkt sich auf Wahlen innerhalb desselben ElectionCompound

### Behobene Fehler

#### Allgemein
- Absturz bei ungültigem oder gelöschtem Reservierungsslot behoben – es wird nun eine verständliche Fehlermeldung angezeigt
- Möglicher Absturz beim Laden von Personen nach Organisation behoben
---

## 2026.32
*Veröffentlicht am 15.06.2026*

### Neuerungen

#### Allgemein
- Schlüsselwörter (z.B. Synonyme) zu Themen/Seiten hinzufügbar – werden auch in der Suche berücksichtigt
- Interne Kommentarfunktion hinzugefügt
- Führende/nachfolgende Leerzeichen in Personennamensfeldern werden automatisch entfernt
- Verzeichnis: Doppelte Einträge erhalten automatisch ein hochgezähltes Suffix statt einer Fehlermeldung

#### ElectionDay
- SEO und Open Graph für WAB-Anwendungen
- Verbesserte Fehlermeldungen in der API (u.a. korrekte JSON-Fehler für 401 und 500)
- Unterstützung für eCH-0252 V2.0.0
- Verbesserte Fehlermeldung bei nicht unterstütztem DOI
- Wahlen mit gleichem Datum werden nicht mehr gelöscht – Bereinigung beschränkt sich auf Wahlen innerhalb desselben ElectionCompound

#### Landsgemeinde
- Titel vor der Abstimmungsliste hinzugefügt

### Behobene Fehler

#### Allgemein
- Reservierungsformular stürzt bei abgelaufener Sitzung nicht mehr ab
- Darstellung interner Kommentare verbessert
- Scrollverhalten beim Hochscrollen korrigiert
- Fehler bei Formularfeldern ohne Typdefinition wird korrekt gemeldet

#### Agency
- Agenturen ohne Portrait werden beim Link-Check übersprungen (kein Absturz mehr)

#### Landsgemeinde
- Abstimmungen im Entwurfsstatus werden nicht mehr angezeigt

#### PAS
- Parlamentariername wird in E-Mails nicht mehr angezeigt
---

## 2026.31
*Veröffentlicht am 05.06.2026*

### Neuerungen

#### Allgemein
- Stichwörter (z.B. Synonyme) zu Themen/Seiten hinzufügbar – werden auch in der Suche berücksichtigt
- Bezeichnung „Alle News" auf der Startseite in „Alle Beiträge" umbenannt

#### ElectionDay
- Verbesserte Fehlermeldungen in der API (u.a. korrekte JSON-Antworten bei Fehlern)
- Unterstützung für eCH-0252 V2.0.0
- Verbesserte Fehlermeldung bei nicht unterstütztem DOI
- Wahlen am gleichen Datum werden nicht mehr pauschal gelöscht, sondern nur noch Wahlen innerhalb desselben Wahlverbands

#### Winterthur
- Zurück-Button im iFrame für Verzeichnis-Einträge und Veranstaltungen hinzugefügt

### Behobene Fehler

#### Allgemein
- Fehler bei der Veranstaltungs-Suchindexierung nach dem Importieren behoben
- Scrollverhalten beim Drag-and-Drop von Listenelementen korrigiert

#### Onboarding
- Fehler im Gemeinde-Assistenten behoben

#### PAS
- Parlamentariername wird in E-Mails nicht mehr angezeigt

---

## 2026.29
*Veröffentlicht am 28.05.2026*

### Neuerungen

#### PAS
- Zulagen werden in der Übersicht angezeigt

#### Swissvotes
- Neues Design der Seite

### Behobene Fehler

#### Allgemein
- Fehler behoben, bei dem abgebrochene Transaktionen fälschlicherweise Erfolgsmeldungen auslösen konnten

#### PAS
- Sperrung nach Abschluss eines Abrechnungslaufs wird wieder korrekt verhindert
- E-Mail-Inhalt und verwendetes Datum in E-Mails korrigiert
---

## 2026.28
*Veröffentlicht am 22.05.2026*

### Neuerungen

#### Allgemein
- Mandantenspezifische E-Mail-Absender konfigurierbar
- Rechnungspositionen werden nach Erstellungsdatum so   rtiert (stabilere Reihenfolge)

#### Feriennet
- Freiwilligenmeldungen erstellen nun ein Ticket; Status kann im Ticket geändert werden, Mails werden bei Anmeldung und Abschluss versendet

### Behobene Fehler

#### Allgemein
- Darstellung von Tag-Namen korrigiert
- Link-Migrations-Tool korrigiert (korrekte Zählung von URL-Vorkommen pro Feld)
- Suche mit Suchvorschlägen korrigiert

#### PAS
- Anwesenheitsformulare zeigen nur noch aktive Kantonsratsmitglieder an

#### Swissvotes
- Leere Politikbereiche werden korrekt ignoriert

---

## 2026.27
*Veröffentlicht am 15.05.2026*

### Neuerungen

#### Allgemein
- "Täglicher Newsletter"-Checkbox standardmässig aktiviert
- Neue API-Endpunkte für Formulare, Ressourcen, Personen und RIS

#### Feriennet
- Registrierungen von Helfenden erstellen nun ein Ticket; Status kann im Ticket geändert werden, Mails werden bei Anmeldung und Abschluss versendet

#### Landsgemeinde
- Vota innerhalb eines Traktandums werden nach Vota-Nummer sortiert

#### PAS
- Warnmeldung, wenn kein Benutzerkonto einem Parlamentarier zugeordnet ist
- Parlamentarier sehen nur die Kommissionen, denen sie angehören
- Massen-ZIP-Download aller Parlamentarier-PDFs auf der Abrechnungslauf-Exportseite

#### ElectionDay
- Verbesserte Fehlermeldungen in der API (korrekte JSON-Fehler für 401 und 500)
- Unterstützung für eCH-0252 V2.0.0
- Verbesserte Fehlermeldung bei nicht unterstützten DOI
- Beim Import werden nur Wahlen innerhalb desselben ElectionCompound gelöscht, nicht alle Wahlen am gleichen Datum

### Behobene Fehler

#### Allgemein
- Tippfehler in Benutzertexten korrigiert
- Fallback-MIME-Typ für Audiodateien ergänzt

#### PAS
- Kommissionsname wird im Betreff der Abschluss-E-Mail korrekt angezeigt (statt Parlamentariername)
- Datumsposition im Brief korrigiert
---

## 2026.26
*Veröffentlicht am 08.05.2026*

### Neuerungen

#### Allgemein
- Verlinkungen können neu direkt auf oberster Ebene erstellt werden (wie bei Seiten)
- Importierte Veranstaltungen können beim Abrufen einbezogen werden

#### Landsgemeinde
- Abstimmungsergebnisse (Vota) werden in der Tagesordnungspunkt-Ansicht oberhalb des Textes angezeigt

#### PAS
- Zuordnung via ZG-Benutzername ermöglicht
- Benutzerkonten-Synchronisation per Kommandozeile hinzugefügt
- Manuelle Bearbeitungsansichten (Hinzufügen/Bearbeiten/Löschen) entfernt, um Missbrauchsrisiken zu minimieren

#### ElectionDay
- Verbesserte Fehlermeldungen in der API (korrekte JSON-Fehlerantworten für 401 und 500)
- Unterstützung für eCH-0252 V2.0.0 hinzugefügt
- Verbesserte Fehlermeldung bei nicht unterstützten DOI
- Wahlen auf demselben Datum werden nicht mehr pauschal gelöscht, sondern nur noch Wahlen innerhalb desselben Wahlverbunds

### Behobene Fehler

#### Allgemein
- Absturz beim Erstellen des Reservierungs-PDF behoben, wenn keine darstellbaren Felder vorhanden sind
- Verbesserte Zeitanzeige bei wiederkehrenden Veranstaltungen

#### Landsgemeinde
- Entwurfsstatus wird nur noch nach unten weitergegeben (nicht mehr nach oben)

#### PAS
- Falschen Literaltyp korrigiert
- Organisationstyp bei Parlamentarierfunktionen wird nun korrekt gespeichert
- Verlust von Rollenwechseln beim Import von Kommissionsmitgliedschaften behoben
- Kommissionspräsidenten-Ansicht wiederhergestellt

---

## 2026.25
*Veröffentlicht am 29.04.2026*

### Neuerungen

#### PAS
- Filter für Import-Logs nach Benutzer hinzugefügt
- Anzeige des ZG-Benutzernamens auf der Parlamentarier-Ansicht

### Behobene Fehler

#### Allgemein
- Fehlende Übersetzung für «Veranstaltungsfilter-Konfiguration bearbeiten» ergänzt

#### Agency
- Darstellungsfehler bei Personenübersicht in Safari behoben

#### PAS
- Erkennung des Vizepräsidenten korrigiert

#### Winterthur
- Fehler bei der Inline-Suche behoben

---

## 2026.24
*Veröffentlicht am 24.04.2026*

### Neuerungen

#### Allgemein
- Neue Filteroptionen in der API hinzugefügt

### Behobene Fehler

#### Allgemein
- Fehlender Filter für Plenarsitzungen in PAS ergänzt

#### Feriennet
- Fehler behoben, bei dem versteckte Bedarfe angezeigt wurden
- Fehlende Übersetzungen für Gruppencode ergänzt

#### PAS
- Anzeige des ZG-Benutzernamens auf Parlamentarier-Profil korrigiert

---

## 2026.23
*Veröffentlicht am 23.04.2026*

### Neuerungen

#### Allgemein
- Volltextsuche-Filter zu API-Endpunkten hinzugefügt
- Zusätzliche Ticket-Informationen in der Reservierungsübersicht als PDF verfügbar
- Verwaltungsleiste und Einstellungen neu angeordnet: Benutzerhandbuch-Link, neue Kategorie «Module» und kategorisierte Einstellungen
- OneGov API nun auch in Org-Apps verfügbar

#### PAS
- ZG-Benutzername wird gespeichert
- Vergütungen und Anwesenheiten: diverses überarbeitet (Berechtigungen, Paginierung, Filter, Export, Vorlagen)
- Massenbearbeitungen von Einzelbearbeitungen klar getrennt

### Behobene Fehler

#### Allgemein
- Logikfehler bei der Berechnung von Feiertagen (Karfreitag/Ostermontag wurden für die meisten Kantone fälschlicherweise übersprungen) behoben
- Fehler beim Auswählen von Zusatzterminen behoben
- Fehler beim Wiedereröffnen von Tickets behoben
- Fehlende Übersetzung für «Anhang» ergänzt
- Fehler in der Formcode-Einrückungsprüfung behoben
- Fehler im AI-Formcoder (falscher POST-Endpunkt) behoben

#### PAS
- Diverse Korrekturen bei Vergütungen, Anwesenheiten, PDF-Formatierung und E-Mail-Versand

---
## 2026.22
*Veröffentlicht am 10.04.2026*

Keine Änderungen seit dem letzten Release.

---
## 2026.21
*Veröffentlicht am 10.04.2026*

Keine Änderungen seit dem letzten Release.

---
## 2026.20
*Veröffentlicht am 10.04.2026*

Keine Änderungen seit dem letzten Release.

---
## 2026.19
*Veröffentlicht am 10.04.2026*

### Neuerungen

#### Allgemein
- Übergeordnete Ressource für Reservationsressourcen optional hinzufügbar (übergeordnete und untergeordnete Ressourcen blockieren sich gegenseitig, untergeordnete Ressourcen blockieren sich nicht gegenseitig)

#### Feriennet
- Aktualisierte Startseiten-Struktur für neue Instanzen
- Gruppencode optional gemacht – Aktivierung und Deaktivierung im Zeitraum-Formular möglich
- Helfer mit verschiedenen Status als Empfänger für Nachrichten auswählbar

#### PAS
- Stündliche Benutzerkonto-Synchronisation wird neu direkt nach dem Import ausgeführt

#### Übersetzerverzeichnis
- Operationskommentare für Mitglieder sichtbar gemacht

### Behobene Fehler

#### Allgemein
- Absturzrisiko beim mehrfachen Klicken auf «Ablehnen» bei Reservationen oder beim Öffnen in mehreren Tabs behoben
- Kopierfehler in Ansichten mit News-Sammlung behoben
- Darstellung von Personenorganisationen in Suchergebnissen korrigiert

#### Feriennet
- Möglicher Absturz in persönlichen Teilnehmeransichten behoben

#### PAS
- Import robuster gestaltet bei 0 abgerufenen Datensätzen

---

**Hinweis zu den Versionen 2026.20–2026.22:** Keine Änderungen seit dem letzten Release.

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