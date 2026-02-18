---
title: Suche
description: Suchfunktion für Inhalte der Plattform
---

# Suche

Die Suchfunktion durchsucht alle Inhalte der Plattform.

Die Suche ist erreichbar über:

- URL: `https://(domain-name)/search/`
- Lupensymbol in der Navigation

## Funktionsweise

Während der Eingabe werden automatisch Vorschläge für passende Suchbegriffe angezeigt. Die Vorschläge können direkt angeklickt werden.

## Bereichssuche 

Ohne Einschränkung werden alle Bereiche der Webseite durchsucht. Bei einer hohen Anzahl von Ergebnissen kann die Suche auf einen oder mehrere Bereiche (z.B. `Formulare`) eingeschränkt werden.

## Suchoperatoren

Die Suchfunktion unterstützt folgende Operatoren:

| Operator | Funktion | Beispiel |
|----------|----------|----------|
| (Standard) | UND-Verknüpfung: Alle Begriffe müssen vorkommen | `formular reservation` |
| `"Satz mit Wortlaut"` | Der eingeschlossene Satz muss genau in dieser Wortreihenfolge vorkommen | `"formular mit reservation"` |
| `or` | ODER-Verknüpfung: Mindestens ein Begriff muss vorkommen | `formular or reservation` |
| `-` | Negation: Nachfolgender Begriff wird ausgeschlossen | `formular -reservation` |

Natürlich wird die Negation bei Wörtern mit Bindestrich z.B. Kopf-an-Kopf-Rennen nicht angewendet.

!!! info "Kombination von Operatoren"
    Operatoren können kombiniert werden, um komplexere Suchabfragen zu erstellen.

