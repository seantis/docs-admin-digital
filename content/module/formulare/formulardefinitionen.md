---
title: Formulardefinitionen
description: Schritt-für-Schritt-Anleitung für die Verwendung der Formularfeld-Typen im Form Code von admin.digital
---

# Formulardefinitionen

Diese Anleitung beschreibt die verfügbaren Feldtypen im Form Code von admin.digital und zeigt dir, wie du sie in der «Darstellung Definition» einsetzen kannst.

Die in der «Darstellung Definition» rot markierten Texteinträge werden mit den gewünschten Texten überschrieben.

Für jedes Formularfeld kannst du mit der Auswahl «Option» oder «Pflicht» festlegen, ob eine Eingabe zwingend erforderlich ist. Bei der Wahl des Pflichtfeldes wird ein `*` nach dem Feldtext angezeigt. Wird im Formular kein Pflichtfeld gewählt, erscheint eine Fehleranzeige.

## 1. Allgemein

1. **Titel** -- Definition: `# Titel` -- Erzeugt den Formulartitel.
2. **Text** -- Definition: `Text = ___` -- Wird je für Name, Vorname, Adresse, PLZ, Wohnort verwendet.
3. **Mehrzeilig** -- Definition: `Mehrzeilig = ...` -- Erstellt eine mehrzeilige Eingabe, z.B. für Bemerkungen.
4. **E-Mail** -- Definition: `E-Mail = @@@` -- Erzeugt ein Feld zur Erfassung einer E-Mail-Adresse.
5. **Website** -- Definition: `Webseite = http://` -- Erzeugt ein Feld zur Erfassung einer Website.
6. **Kommentar** -- Definition: `<< Platziere die Feldbeschreibung (auch Markdown) unterhalb des Feldes, immer mit dem gleichen Einzug >>` -- Dient für Erklärungen zur Formularanwendung.

## 2. Kommentar

1. **Kommentar** -- Definition: `<< Platziere die Feldbeschreibung (auch Markdown) unterhalb des Feldes, immer mit dem gleichen Einzug >>` -- Dient für Erklärungen zur Formularanwendung.

## 3. Datum und Zeit

1. **Datum** -- Definition: `Datum = YYYY.MM.DD` -- Erzeugt ein Formularfeld zur Datumsauswahl.
2. **Zeit** -- Definition: `Zeit = HH:MM` -- Erzeugt ein Formularfeld zur Zeitauswahl.
3. **Datum und Zeit** -- Definition: `Datum und Zeit = YYYY.MM.DD HH:MM` -- Erzeugt ein Formularfeld zur Datums- und Zeitauswahl.

## 4. Auswahlmöglichkeiten

1. **Auswahl** -- Erzeugt ein Formularfeld für eine Einfachauswahl. Das gesetzte `x` entspricht der Standardauswahl.

    ```
    Auswahl =
        (x) A
        ( ) B
        ( ) C
    ```

2. **Multiple-Choice** -- Erzeugt ein Formularfeld für mehrere Auswahlen.

    ```
    Multiple-Choice =
        [ ] A
        [ ] B
        [ ] C
    ```

## 5. Dateien

1. **Bild** -- Definition: `Bild = *.jpg|*.png|*.gif` -- Erzeugt ein Formularfeld zum Hochladen von Bildern.
2. **Dokument** -- Definition: `Dokument = *.pdf` -- Erzeugt ein Formularfeld zum Hochladen von Dokumenten.

## 6. Zahlen

1. **Alter** -- Definition: `Alter = 0..150` -- Erzeugt ein Formularfeld zum Erfassen des Alters.
2. **Prozent** -- Definition: `Prozent = 0.00..100.00` -- Erzeugt ein Formularfeld zum Erfassen von Prozenten.

## 7. Erweitert

1. **IBAN** -- Definition: `IBAN = # iban` -- Erzeugt ein Formularfeld zum Erfassen der IBAN Nummer.
2. **AHV Nummer** -- Definition: `AHV Nummer = # ch.ssn` -- Erzeugt ein Formularfeld zum Erfassen der AHV Nummer.
3. **UID Nummer** -- Definition: `UID Nummer = # ch.uid` -- Erzeugt ein Formularfeld zum Erfassen der UID Nummer.
4. **MWST Nummer** -- Definition: `MWST Nummer = # ch.vat` -- Erzeugt ein Formularfeld zum Erfassen der MWST Nummer.
5. **Markdown** -- Definition: `Markdown = <markdown>` -- Erzeugt ein Formularfeld zum Erfassen von Texten in Markdown-Form, z.B. Schlussbemerkungen.
