---
title: Formulare
description: Aktuelle Änderungen und neue Funktionen von admin.digital
---

# Formulare

Online- Formulare werden zur Erfassung von Informationen benötigt, die zur Abwicklung eines Online- Prozesses notwendig sind. Durch Kunden ausgefüllte Formulare werden automatisch als Tickets in den Ticket- Schalter eingebunden und bilden die Grundlage von digitalen Prozessen.

!!! tip "Code einfach kopieren"
    Der Code in den grauen Boxen kann einfach kopiert werden, indem auf das Symbol oben rechts in der Box geklickt wird.

## Formulare erstellen und bearbeiten
Formulare können durch berechtigte Benutzer einfach erstellt werden. Die Übersicht aller Formulare findet sich über den Menupunkt `Verwaltung` > `Formulare` (URL `./forms`).

## Definition von Formularen

Mit Form Code ist es möglich, Formulare für Online- Dienstleistungen direkt in der Plattform mit einer Formularsprache (Syntaxt) zu erstellen. Ziel dieser Syntax ist es, Formulare direkt im Web zu erstellen – **ohne** JavaScript-, HTML- oder Python-Code schreiben zu müssen. Wie bei Markdown soll die Syntax zudem **gut lesbar für Menschen** sein.

## Syntax und Felder

Jedes Feld besteht aus:

* einer **Bezeichnung (Label)**
* optional einem `*` für **Pflichtfeld**
* einem `=` als Trenner
* einer **Felddefinition**

(Die Bezeichnung darf beliebigen Text enthalten, ausser `*` und `=` enthalten.)

### Pflichtfeld

```
Mein Pflichtfeld * =
```

### Optionales Feld

```
Mein optionales Feld =
```

### Beispiel: Textfeld

```
Mein Textfeld = ___
```

### Kommentare

Kommentare können unterhalb eines Feldes mit gleicher Einrückung eingefügt werden:

```
Mein Textfeld = ___
<< Erklärung zu meinem Feld >>
```

(Alle Zeichen sind erlaubt, ausser `>>`.)

---

### Komplexes Beispiel

```
Lieferung * =
    (x) Ich möchte eine Lieferung
        Alternative Adresse =
            (x) Nein
            ( ) Ja
                Strasse = ___
                << Strasse >>
                Ort = ___
        << Alternative >>
    ( ) Ich hole es ab
<< Lieferung >>

Kommentar = ...
<< Kommentar >>
```

---

### Fieldsets

Felder können in **Fieldsets** gruppiert werden.

```
# Fieldset 1
Ich gehöre zu Fieldset 1 = ___

# Fieldset 2
Ich gehöre zu Fieldset 2 = ___
```

Wenn kein Fieldset definiert ist, gehören die Felder zu keinem Fieldset. Ein leeres Fieldset beendet die Gruppierung:

```
# Fieldset 1
Ich gehöre zu Fieldset 1 = ___

# ...
Ich gehöre zu keinem Fieldset = ___
```

---

### Verfügbare Feldtypen

---

#### Textfeld

Genau drei Unterstriche:

```
Ich bin ein Textfeld = ___
```

#### Mit Längenbegrenzung

```
Ich bin begrenzt = ___[50]
```

#### Mit Regex-Validierung

```
Nur Zahlen = ___/^[0-9]+$
```

#### Kombination

```
Begrenzt und nur Zahlen = ___[4]/^[0-9]+$
```

Vereinfachte Variante:

```
___/^[0-9]{0,4}$
```

Hinweis: `^` und `$` sind nicht zwingend, werden jedoch dringend empfohlen.

---

#### Textarea

Drei Punkte:

```
Ich bin eine Textarea = ...
```

Mit definierter Zeilenanzahl:

```
Textarea mit 10 Zeilen = ...[10]
```

---

#### Passwort

Drei Sterne:

```
Passwort = ***
```

---

#### E-Mail

Drei @:

```
E-Mail = @@@
```

---

#### URL

```
URL = http://
URL = https://
```

Ob `http` oder `https` hat keinen Einfluss auf die Validierung.

---

#### Video-Link

```
Video = video-url
```

YouTube- oder Vimeo-Videos werden eingebettet, andere Links werden normal angezeigt.

---

#### Datum

Format:

```
Datum = YYYY.MM.DD
```

Ein Datum mit Datumsbreich:

```
Zukünftiges Datum = YYYY.MM.DD (+1 days..)
Ab heute = YYYY.MM.DD (today..)
Mindestens zwei Wochen zurück = YYYY.MM.DD (..-2 weeks)
Zwischen 2010 und 2020 = YYYY.MM.DD (2010.01.01..2020.12.31)
```

Intervallgrenzen sind inklusiv.

---

#### Datum mit Uhrzeit

```
Datumzeit = YYYY.MM.DD HH:MM
```

Mit Bereich:

```
YYYY.MM.DD HH:MM (today..)
```

Die Bereichsprüfung betrifft nur das Datum, nicht die Uhrzeit.

---

#### Uhrzeit

```
Uhrzeit = HH:MM
```

---

#### Zahlenfelder

##### Ganzzahl (Integer)

```
0..99
-100..100
```

##### Gleitzahl (Float)

```
0.00..99.00
-100.00..100.00
```

#### Preis

```
Anzahl Briefmarken = 0..30 (1.00 CHF)
```

---

#### Code (Markdown)

```
Beschreibung = <markdown>
```

Derzeit wird nur Markdown unterstützt.

---

#### Datei-Upload

```
Datei = *.*
```

##### Nur bestimmte Dateitypen

```
Bild = *.png|*.jpg|*.gif
Dokument = *.doc
Beliebiges Dokument = *.doc|*.pdf
```

Prüfung erfolgt über Dateiendung und Mimetyp.

##### Mehrfach-Upload

```
Mehrere Dateien = *.* (multiple)
```

---

#### Standardisierte Nummern (python-stdnum)

```
IBAN (optional) = # iban
IBAN (Pflicht) * = # iban
AHV Nummer = # ch.ssn
UID Nummer = # ch.uid
MWST Nummer = # ch.vat
```

Der hinter `#` angegebene Typ muss aus `stdnum` importierbar sein.

Dokumentation:
[https://arthurdejong.org/python-stdnum/doc/1.1/index.html#available-formats](https://arthurdejong.org/python-stdnum/doc/1.1/index.html#available-formats)

---

#### Tieridentifikationsnummer

```
Tieridentifikationsnummer (Mikrochip-Nr.) = chip-nr
```

---

#### Einfachauswahl (Radio Buttons)

```
Geschlecht =
    ( ) Weiblich
    ( ) Männlich
    (x) Keine Angabe
```

Auswahl mit abhängigen Feldern

```
Liefermethode =
    ( ) Abholung
        Abholzeit * = ___
    (x) Adresse
        Strasse * = ___
        Ort * = ___
```

Verschachtelung ist beliebig möglich, jedoch nicht empfohlen.

---

#### Mehrfachauswahl (Checkboxes)

Mehrfachauswahl:

```
Extras =
    [x] Versicherung
    [ ] Hülle
    [x] Ersatzakku
```

Mit Abhängigkeiten:

```
Zusätzliche Beläge =
    [ ] Salami
    [ ] Oliven
    [ ] Sonstiges
        Beschreibung = ___
```

---

#### Preisangaben

Radio Buttons und Checkboxes können Preise enthalten:

```
Grösse =
    ( ) Klein (20 USD)
    (x) Mittel (30 USD)
    ( ) Gross (40 USD)
```

Mit `!` wird Kreditkartenzahlung verpflichtend:

!!! info "Online Bezahlung"
    Details zur Einrichtung und zu unterstützten Zahlungsanbietern sind im Modul **[Online Bezahlung](/module/online-bezahlung/)** beschrieben.

```
Lieferung (5 CHF!)
```

Auch ohne Preisaufschlag möglich:

```
(0 CHF!)
```

---

#### Rabatte

Prozentuale Rabatte sind ebenso möglich:

```
Rabatt =
    (x) Kein Rabatt
    ( ) Sportverein (50%)
    ( ) Schule (100%)
```