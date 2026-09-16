---
title: Headless CMS
description: Inhalte und Formulare über die Open Data API in Websites, Apps und weitere Anwendungen einbinden
---

# Headless CMS (Webservice API)

Mit einem Headless CMS pflegt die Redaktion Inhalte an einem zentralen Ort und kann sie auf verschiedenen Kanälen verwenden. So erscheinen beispielsweise dieselben Meldungen auf dem Gemeindeportal und in einer Gemeinde-App. Wie die Inhalte dort dargestellt werden, kann jede Anwendung selbst bestimmen.

## Open Data API

Die Open Data API ist die Schnittstelle, über die andere Anwendungen Inhalte von admin.digital abrufen können. Eine Gemeinde-App kann damit zum Beispiel aktuelle News und Veranstaltungen übernehmen, ohne dass diese nochmals erfasst werden müssen.

Damit unterstützt die Schnittstelle auch [Open Government Data](/module/open-government-data/): Öffentliche Verwaltungsdaten werden für andere Angebote und Projekte nutzbar.

### Einstiegspunkte und Inhalte

Die Übersicht der verfügbaren Inhalte ist über die Website-Adresse mit dem Zusatz `/api/` erreichbar, beispielsweise in der [API-Übersicht der Gemeinde Ebikon](https://www.ebikon.ch/api/). Von dort führen Links zu den einzelnen Bereichen. Welche Inhalte angeboten werden, hängt von den eingesetzten Modulen und veröffentlichten Daten der jeweiligen Website ab.

Die API von Ebikon bietet folgende Einstiegspunkte:

| Inhalt | API-Adresse | Verfügbare Informationen |
| --- | --- | --- |
| Veranstaltungen | [/api/events](https://www.ebikon.ch/api/events) | Termine mit Beschreibung, Veranstaltungsort, Veranstalter und Kategorien |
| News | [/api/news](https://www.ebikon.ch/api/news) | Aktuelle Meldungen und ihre Inhalte |
| Themen | [/api/topics](https://www.ebikon.ch/api/topics) | Themenseiten und ihre Gliederung |
| Personen | [/api/people](https://www.ebikon.ch/api/people) | Veröffentlichte Angaben wie Name, Funktion und Kontaktdaten |
| Ressourcen | [/api/resources](https://www.ebikon.ch/api/resources) | Angebote aus dem Reservationsbereich, einschliesslich Verweisen auf externe Angebote |
| Formulare | [/api/forms](https://www.ebikon.ch/api/forms) | Verfügbare Formulare mit Beschreibung, Gruppierung und Link zum Online-Formular |

Auch Verzeichnisse können über die Schnittstelle bereitgestellt werden. Ihre Inhalte und Adressen unterscheiden sich je nach Website. Für die Anbindung ist deshalb die API-Übersicht der jeweiligen Website massgebend.

### Inhalte gezielt abrufen

Anwendungen können gezielt die Inhalte abrufen, die sie benötigen. Veranstaltungen lassen sich beispielsweise nach Suchbegriff, Zeitraum, Ort oder Kategorie auswählen. So kann eine Gemeinde-App nur die kommenden Konzerte anzeigen. Auch News und Themen lassen sich nach Stichworten durchsuchen. Die verfügbaren Auswahlmöglichkeiten sind in der API-Übersicht aufgeführt.

### Formulare über die API nutzen

Die API unterstützt auch Formulare. Damit kann beispielsweise eine Gemeinde-App die verfügbaren Online-Dienstleistungen anzeigen und unterstützte Formulare direkt an admin.digital übermitteln.

Die Schnittstelle stellt dazu Informationen zum Formular und seinen Eingabefeldern bereit. Bei einer Einreichung prüft admin.digital die Angaben und erstellt bei Erfolg ein [Service Ticket](/module/service-ticketing/). Die Verwaltung kann die Anfrage anschliessend im gewohnten Ablauf bearbeiten.

Formulare anderer Anbieter werden über ihren hinterlegten Link aufgerufen. Einreichungen sind nur innerhalb eines allfälligen Anmeldezeitraums möglich. Formulareingaben, die eine zwingende Online-Zahlung auslösen, werden über die API nicht unterstützt.

### Authentifizierung und Rate Limits

**Öffentliche Inhalte können ohne Anmeldung abgerufen werden.** Das gilt auch für die öffentliche Formularübersicht und die verfügbaren Angaben zu den Eingabefeldern. Die Anzahl der Abfragen innerhalb eines bestimmten Zeitraums ist jedoch begrenzt. Wird eines dieser sogenannten **Rate Limits** erreicht, muss die Anwendung vor weiteren Abfragen warten.

**Für das Einreichen von Formularen muss sich die angebundene Anwendung ausweisen.** Diese Authentifizierung erfolgt über einen API-Zugangsschlüssel mit der entsprechenden Berechtigung. Der Schlüssel wird in den Einstellungen der Plattform erstellt. Mit einem gültigen, authentifizierten Zugang entfallen auch die oben beschriebenen Abfragelimits.

## Vorteile

- Inhalte einmal pflegen und auf mehreren Kanälen verwenden
- Gemeinde-Apps, Informationsangebote und weitere Anwendungen mit aktuellen Daten versorgen
- Formulare aus externen Anwendungen in die bestehenden Verwaltungsprozesse einbinden
