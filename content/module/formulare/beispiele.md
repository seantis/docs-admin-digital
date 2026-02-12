---
title: Beispiele Formulare (Formcode)
description: Sammlung von Beispielen in Formcode für Formulare
---

# Salmmung Beispiele Formcode für Formulare

Hier ist eine Sammlung von Formcode-Schnipseln als Beispiele für unterschiedliche Formulardefinitionen. Die Beispiele sind allgemein gehalten und können je nach Anforderunen einfach kopiert und angepasst werden.


## Kontaktangaben

```
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

```
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

```
# Richtlinie und Gebührenordnung
Richtlinie und Gebührenordnung *= 
    [ ] Hiermit akzeptiere ich die Richtlinie über die Benützung sowie die Gebührenordnung.
<< [Richtlinien und Gebühren](https://www.TODO-URL.ch) >>
```

Die URL `https://www.TODO-URL.ch` erstzen durch den Link auf das entsprechende Dokument.

## Preise in Kategorien

Rabatte in absoluten Beträgen: 

```
Preiskategorie *= 
    ( ) A - Städtische Vereine, gemeinnützige Organisationen (-200.00 CHF)
    ( ) B - Einheimische Organisationen, natürliche und juristische Personen) (-100.00 CHF)
    ( ) C - Auswärtige Organisationen, natürliche & juristische Personen

```

Rabatte in relativen Beträgen (%): 

```
Preiskategorie *= 
    ( ) A - Städtische Vereine, gemeinnützige Organisationen (100%)
    ( ) B - Einheimische Organisationen, natürliche und juristische Personen (25%)
    ( ) C - Auswärtige Organisationen, natürliche & juristische Personen

```