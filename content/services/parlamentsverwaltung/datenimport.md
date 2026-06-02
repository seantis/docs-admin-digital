---
title: Datenimport (KUB)
description: Automatischer und manueller Import von Stammdaten aus dem KUB
---

# Datenimport (KUB)

PAS importiert Stammdaten aus dem KUB (Kontakte- und Beziehungsverwaltung) des Kantons Zug. Der Import synchronisiert Parlamentarier:innen, Kommissionen, Parteien und deren Mitgliedschaften.

## Automatischer Import

Ein stündlicher Cronjob synchronisiert die Daten automatisch aus der KUB-API. Voraussetzung ist eine gültige API-Konfiguration (Token, Basis-URL, Zertifikatsverzeichnis).

Der Import läuft in zwei Phasen:

1. **Stammdaten**: Personen, Organisationen und Mitgliedschaften werden abgeglichen.
2. **Zusatzdaten**: Personalnummer, Vertragsnummer, Wahlkreis, Adresse und weitere Felder werden pro Person nachgeladen.

Anschliessend werden die Benutzerkonten der Parlamentarier:innen synchronisiert (Erstellung und Aktualisierung).

## Manueller Import

Administratoren können Daten auch manuell über die Weboberfläche importieren. Dazu werden drei JSON-Dateien hochgeladen:

- **Personen** — Parlamentarier:innen mit Grunddaten
- **Organisationen** — Kommissionen, Fraktionen und weitere Gremien
- **Mitgliedschaften** — Zuordnungen zwischen Personen und Organisationen

## Importprotokoll

Jeder Import wird protokolliert. Das Protokoll enthält:

- Zeitpunkt und Art des Imports (automatisch oder manuell)
- Anzahl erstellter, aktualisierter und unveränderter Datensätze
- Status (erfolgreich, fehlgeschlagen, Timeout)

Die Importhistorie ist über **Verwaltung > Importprotokoll** einsehbar.
