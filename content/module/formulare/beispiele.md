---
title: Beispiele Formulare (Formcode)
description: Sammlung von Beispielen in Formcode für Formulare
---

# Sammlung Beispiele Formcode

Hier ist eine Sammlung von Formcode-Schnipseln als Beispiele für unterschiedliche Formulardefinitionen. Die Beispiele sind allgemein gehalten und können je nach Anforderungen einfach kopiert und angepasst werden.

!!! tip "Code einfach kopieren"
    Der Code in den grauen Boxen kannst du einfach kopieren, indem du auf das Symbol oben rechts in der Box klickst.

## Kontaktangaben

```ini
# Kontaktangaben
Organisation = ___
Vorname *= ___
Nachname *= ___
Adresszusatz = ___
Strasse und Nr. *= ___
PLZ *= ___/^[0-9]+$
Ort *= ___
Geburtsdatum *= YYYY.MM.DD
Telefon *= ___
```

## Rechungsadressen

```ini
Rechnungsadresse = 
    (x) gleich wie Gesuchsteller
    ( ) andere Rechnungsadresse
        Verein/Organisation *= ___
        Vorname *= ___
        Name *= ___
        Adresse *= ___
        PLZ *= ___/^[0-9]+$
        Ort *= ___
        E-Mail *= @@@
```

## Richtlinien und Benutzungsordnung

```ini
# Richtlinie und Gebührenordnung
Richtlinie und Gebührenordnung *= 
    [ ] Hiermit akzeptiere ich die Richtlinie über die Benützung sowie die Gebührenordnung.
<< [Richtlinien und Gebühren](https://www.TODO-URL.ch) >>
```

Die URL `https://www.TODO-URL.ch` erstzen durch den Link auf das entsprechende Dokument.

## Preise in Kategorien

Rabatte in absoluten Beträgen: 

```ini
Preiskategorie *= 
    ( ) A - Städtische Vereine, gemeinnützige Organisationen (-200.00 CHF)
    ( ) B - Einheimische Organisationen, natürliche und juristische Personen) (-100.00 CHF)
    ( ) C - Auswärtige Organisationen, natürliche & juristische Personen

```

Rabatte in relativen Beträgen (%): 

```ini
Preiskategorie *= 
    ( ) A - Städtische Vereine, gemeinnützige Organisationen (100%)
    ( ) B - Einheimische Organisationen, natürliche und juristische Personen (25%)
    ( ) C - Auswärtige Organisationen, natürliche & juristische Personen

```

## Anmeldung Zuzug

```ini
# Personalien
Vorname * = ___
Name * = ___
Ledigname = ___
AHV-Nummer = ___
Geburtsdatum * = YYYY.MM.DD
Konfession = ___

# Adresse neu
Strasse (inkl. Hausnummer) * = ___
PLZ / Ort * = ___
Stockwerk = ___
Anzahl Zimmer = ___

Datum Zuzug * = YYYY.MM.DD
Wohnverhältnis =
    (x) Eigene Wohnung
    ( ) in Gemeinschaft mit
        Wohngemeinschaft mit (Vorname, Nachname) = ___
    ( ) in Untermiete
        Untermiete bei (Vorname, Nachname) = ___

# Vermietung / Hausverwaltung
Name Hausverwaltung = ___
Strasse (inkl. Hausnummer) = ___
PLZ / Ort = ___

# Berufliche Tätigkeit
Beruf = ___
Arbeitgeber = ___
Tätig seit = YYYY.MM.DD

# Kontakt & Bemerkungen
Telefon * = ___
E-Mail * = @@@
Bemerkung = ...
```