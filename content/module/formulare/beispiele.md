---
title: Beispiele Formulare (Formcode)
description: Sammlung von Beispielen in Formcode für Formulare
---

# Sammlung Beispiele Formcode

Hier ist eine Sammlung von Formcode-Schnipseln als Beispiele für unterschiedliche Formulardefinitionen. Die Beispiele sind allgemein gehalten und können je nach Anforderungen einfach kopiert und angepasst werden.

!!! tip "Code einfach kopieren"
    Der Code in den grauen Boxen kann einfach kopiert werden, indem auf das Symbol oben rechts in der Box geklickt wird.

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
AHV-Nummer = # ch.ssn
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

## Hundesteuer

```ini
# Angaben zum Hund
Hundename * = ___
Mikrochip-Nummer * = chip-nr
Geburtsdatum des Hundes * = YYYY.MM.DD
In Besitz des Hundes seit * = YYYY.MM.DD
```

## Reservation

```ini
# Kontaktangaben
Organisation = ___
Funktion = ___
Vorname *= ___
Nachname *= ___
Adresszusatz = ___
Strasse und Nr. *= ___
PLZ *= ___/^[0-9]+$
Ort *= ___
Telefon *= ___
Telefon 2 (optional) = ___

# Reservationsdetails
Anlass *= ___
Anzahl Personen = ___
Garderoben =
    (x) Keine Garderobe
    ( ) 1 Garderobe
    ( ) 2 Garderoben
Tribüne *=
    (x) nein
    ( ) ja (50.00 CHF)
Matchuhr *=
    (x) nein
    ( ) ja
Alkoholverkauf (reiner Ausschank ausgenommen) *=
    (x) nein
    ( ) ja
        Wenn ja, für Verkauf verantwortliche Person *=
            (x) Personalien bei den Kontaktangaben angegeben
            ( ) Eine andere Person
                Name, Adresse, PLZ / Ort = ...

# Preiskategorie
Kategorie (Ermässigung auf Selbstkosten) *=
    ( ) Lokale Vereine, gemeinnützige Organisationen (100%)
    ( ) Lokale andere Organisationen, natürliche & juristische Personen (25%)
    ( ) Auswärtige Organisationen, natürliche & juristische Personen

# Bemerkungen
Bemerkungen = ...

# Grundlagen
Die Reservationszeit gilt ab Sportanlagenöffnung bis -schliessung (inkl. Garderobennutzung) *=
    [ ] Akzeptiert

Anlagenbenützungsverordnung *=
    [ ] Ich akzeptiere die Anlagenbenützungsverordnung
<< [Anlagenbenützungsverordnung](https://www.TODO-URL.ch) >>

Benützungsordnung *=
    [ ] Ich akzeptiere die Benützungsordnung
<< [Benützungsordnung](https://www.TODO-URL.ch) >>
```

Die URL `https://www.TODO-URL.ch` erstzen durch den Link auf das entsprechende Dokument.

## Fischereipatent

```ini
# Personalien LizenzinhaberIn
Vorname *= ___
Name *= ___
Strasse *= ___
Hausnummer *= ___
PLZ *= ___
Ort *= ___
E-Mail *= @@@
Geburtsdatum *= YYYY.MM.DD
SaNa-Nummer *= ___/^\d{3}-\d{4}-\d{4}/\d{3}-\d$
Bemerkung = ...

# Lizenztyp
Lizenztyp * =
    (x) Jahrespatent (150.00 CHF)
```

Eine SaNa-Nummer ist der offizielle Schweizer Sachkundenachweis für die Fischerei:  Standard-Format: XXX-XXXX-XXXX/XXX (z. B. 015-9605-7721/001).
