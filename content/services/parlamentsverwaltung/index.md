---
title: Parlamentsverwaltung (PAS)
description: Verwaltung von Parlamentarier:innen, Kommissionen, Anwesenheiten und Entschädigungen für den Kantonsrat
---

# Parlamentsverwaltung (PAS)

PAS (Parliamentarian Accounting System) bildet die Anwesenheitserfassung und Entschädigungsabrechnung des Kantonsrats ab. Stammdaten werden aus dem KUB importiert.

## Überblick

- Parlamentarier:innen, Kommissionen und Fraktionen zentral verwalten
- Anwesenheiten pro Sitzung erfassen und abschliessen
- Entschädigungen auf Basis konfigurierter Sätze berechnen
- Abrechnungsläufe durchführen und als Excel/PDF exportieren
- Stammdaten automatisch aus dem KUB importieren

## Konzepte

### Parlamentarier:innen

Jede:r Parlamentarier:in wird mit persönlichen Angaben (Name, Partei, Fraktion, Wahlkreis) sowie Rollen geführt. Die Daten können manuell erfasst oder aus dem KUB importiert werden.

### Kommissionen

Kommissionen bilden die organisatorische Einheit für Sitzungen. Jede Kommission hat Mitglieder, die über Mitgliedschaften zugeordnet werden. Es gibt normale, interkantonale und offizielle Kommissionen.

### Legislaturperioden

Legislaturperioden definieren den zeitlichen Rahmen, in dem Parlamentarier:innen aktiv sind.

### Anwesenheiten

Anwesenheiten dokumentieren die Teilnahme an Sitzungen. Jede Anwesenheit enthält Datum, Dauer und Art:

- **Plenarsitzung** — Sitzung des gesamten Kantonsrats
- **Kommission** — reguläre Kommissionssitzung
- **Aktenstudium** — Vorbereitung von Kommissionsgeschäften
- **Kürzestsitzung** — kurze Verfahrenssitzung

Anwesenheiten können auf drei Arten erfasst werden:

- **Einzelerfassung** — Eine Anwesenheit für eine einzelne Person. Alle vier Sitzungsarten stehen zur Verfügung. Parlamentarier:innen und Kommissionspräsident:innen können diese Variante nutzen.
- **Sammelerfassung Kommission** — Alle Mitglieder einer Kommission werden für eine Sitzung gleichzeitig erfasst. Die Kommission wird ausgewählt, danach erscheinen die zugehörigen Mitglieder als Auswahlliste. Sitzungsart ist auf Kommission oder Kürzestsitzung beschränkt. Verfügbar für Administratoren und Kommissionspräsident:innen.
- **Sammelerfassung Plenarsitzung** — Alle aktiven Parlamentarier:innen werden automatisch vorausgewählt. Einzelne Personen können abgewählt werden. Sitzungsart ist immer Plenarsitzung. Nur für Administratoren.

Sammelerfassungen werden als Gruppe gespeichert und können nachträglich gemeinsam bearbeitet oder gelöscht werden.

### Abschluss

Parlamentarier:innen und Kommissionspräsident:innen markieren ihre Anwesenheiten als abgeschlossen, sobald alle Sitzungen eines Abrechnungslaufs erfasst sind. Nach dem Abschluss werden Administratoren per E-Mail benachrichtigt. Danach können keine weiteren Anwesenheiten für diesen Zeitraum gebucht werden.

### Abrechnungsläufe

Ein Abrechnungslauf definiert einen Zeitraum (z.B. ein Quartal), für den Entschädigungen berechnet werden. Pro Zeitraum existiert genau ein Abrechnungslauf. Der Abschlussstatus pro Kommission ist auf der Detailseite des Abrechnungslaufs ersichtlich.

### Sätze

Die Sätze definieren die Entschädigungstarife pro Jahr, differenziert nach Sitzungsart und Rolle (Mitglied vs. Präsident:in). Zusätzlich wird eine Teuerungszulage als prozentualer Aufschlag angewendet. Alle Beträge werden auf 5 Rappen gerundet.

### Präsidialzulagen

Zusätzliche Entschädigungen für Präsident:in und Vize-Präsident:in des Kantonsrats, die pro Abrechnungslauf konfiguriert werden.

## Datenimport

PAS importiert Stammdaten automatisch aus dem KUB (Kontakte- und Beziehungsverwaltung) des Kantons Zug. Der Import umfasst Parlamentarier:innen, Kommissionen, Mitgliedschaften und Parteien. Ein stündlicher Cronjob synchronisiert die Daten. Jeder Import wird protokolliert und ist über die Importübersicht einsehbar.

## Exporte

- **Abrechnungen nach Parlamentarier:in** — persönliche Abrechnung als PDF
- **Abrechnungen nach Partei** — Aufstellung pro Partei als PDF
- **Abrechnungen nach Kommission** — Aufstellung pro Kommission als PDF
- **Alle Parlamentarier:innen (ZIP)** — alle persönlichen Abrechnungen gebündelt
- **Abschlussliste (XLSX)** — Übersicht und Details aller Anwesenheiten
- **Buchungen Abrechnungslauf (XLSX)** — Buchungsjournal für die Lohnverarbeitung
- **KR-Entschädigungen (CSV)** — Export für die Finanzbuchhaltung (FIBU)

## Berechtigungen

| Rolle | Zugriff |
|-------|---------|
| Administrator:in | Vollzugriff auf alle Funktionen, Abrechnungsläufe und Einstellungen |
| Kommissionspräsident:in | Anwesenheiten der eigenen Kommissionsmitglieder erfassen und abschliessen |
| Parlamentarier:in | Eigene Anwesenheiten erfassen und einsehen |
