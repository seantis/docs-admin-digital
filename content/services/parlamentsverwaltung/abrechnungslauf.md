---
title: Abrechnungslauf
description: Entschädigungen berechnen, prüfen und exportieren
---

# Abrechnungslauf

Ein Abrechnungslauf definiert den Zeitraum (z.B. ein Quartal), für den Entschädigungen der Parlamentarier:innen berechnet und exportiert werden. Pro Zeitraum existiert genau ein Abrechnungslauf. Zeiträume dürfen sich nicht überlappen.

## Anwesenheiten erfassen

Während ein Abrechnungslauf offen ist, können Anwesenheiten erfasst werden. Das Anwesenheitsdatum muss innerhalb eines offenen Abrechnungslaufs liegen.

### Einzelerfassung

Eine Anwesenheit für eine einzelne Person. Felder: Datum, Dauer, Sitzungsart und Kommission (entfällt bei Plenarsitzung). Alle vier Sitzungsarten stehen zur Verfügung. Parlamentarier:innen können nur eigene Anwesenheiten erfassen, Kommissionspräsident:innen zusätzlich für ihre Kommissionsmitglieder.

### Sammelerfassung Kommission

Erfasst Anwesenheiten für alle Mitglieder einer Kommission gleichzeitig. Nach Auswahl der Kommission erscheinen die zugehörigen Mitglieder als Auswahlliste. Die Sitzungsart ist auf **Kommission** oder **Kürzestsitzung** beschränkt. Der Abschluss kann direkt gesetzt werden.

Verfügbar für Administratoren und Kommissionspräsident:innen.

### Sammelerfassung Plenarsitzung

Erfasst Anwesenheiten für alle aktiven Parlamentarier:innen gleichzeitig. Alle Personen sind automatisch vorausgewählt — einzelne können abgewählt werden. Die Sitzungsart ist immer **Plenarsitzung**.

Nur für Administratoren.

### Sammelbearbeitung und -löschung

Anwesenheiten aus einer Sammelerfassung werden als Gruppe gespeichert. Sie können nachträglich gemeinsam bearbeitet oder gelöscht werden.

## Abschluss

Parlamentarier:innen und Kommissionspräsident:innen markieren ihre Anwesenheiten als abgeschlossen, sobald alle Sitzungen erfasst sind. Der Abschluss kann bei der Einzelerfassung oder bei der Sammelerfassung Kommission gesetzt werden.

Nach dem Abschluss:

- Administratoren werden per E-Mail benachrichtigt
- Für diese Person und diesen Zeitraum können keine weiteren Anwesenheiten gebucht werden
- Wird bei einer Sammelerfassung versucht, eine Person mit bestehendem Abschluss erneut zu buchen, wird die gesamte Erfassung abgelehnt

Auf der Detailseite des Abrechnungslaufs ist der Abschlussstatus pro Kommission ersichtlich (z.B. «3/7 abgeschlossen»), inklusive einer Auflistung der noch ausstehenden Mitglieder.

## Abrechnungslauf abschliessen

Sobald alle Kommissionen abgeschlossen sind, kann der Abrechnungslauf geschlossen werden. Danach sind keine Änderungen an den Anwesenheiten mehr möglich.

## Entschädigung

Die Entschädigungen werden auf Basis der konfigurierten Sätze berechnet. Jeder Satz gilt für ein Kalenderjahr und enthält Tarife pro Sitzungsart, differenziert nach Mitglied und Präsident:in.

Zusätzlich wird eine **Teuerungszulage** als prozentualer Aufschlag angewendet. Alle Beträge werden auf 5 Rappen gerundet.

| Sitzungsart | Berechnung |
|-------------|------------|
| Plenarsitzung | Pauschale pro Halbtag |
| Kommission | Grundbetrag bis 2 Stunden, danach pro 30 Minuten |
| Kommission (interkantonal) | Pauschale pro Halbtag |
| Aktenstudium | Tarif pro 30 Minuten |
| Aktenstudium (interkantonal) | Tarif pro Stunde |
| Kürzestsitzung | Tarif pro 30 Minuten |

**Präsidialzulagen** werden separat pro Abrechnungslauf konfiguriert und zur Entschädigung addiert.

## Exporte

Vom Abrechnungslauf aus stehen folgende Exporte zur Verfügung:

**PDF-Exporte:**

- **Abrechnungen nach Partei** — Aufstellung pro Partei mit Einzelanwesenheiten und Zusammenfassung
- **Abrechnungen nach Kommission** — Aufstellung pro Kommission, gruppiert nach Partei
- **Abrechnungen nach Parlamentarier:in** — Persönliche Abrechnung mit Adresse und Gesamtbetrag
- **Alle Parlamentarier:innen (ZIP)** — Alle persönlichen Abrechnungen als ZIP-Archiv

**Excel/CSV-Exporte:**

- **Abschlussliste (XLSX)** — Übersicht aller Parlamentarier:innen mit aggregierten Beträgen plus Detailblatt mit Einzelanwesenheiten
- **Buchungen Abrechnungslauf (XLSX)** — Buchungsjournal für die Lohnverarbeitung
- **KR-Entschädigungen (CSV)** — Export für die Finanzbuchhaltung (FIBU) mit Lohnarten und Kontonummern
