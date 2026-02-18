---
title: Online Bezahlung
description: Zahlungsprozesse für kostenpflichtige digitale Dienstleistungen
---

# Online Bezahlung

Mit **Online Bezahlung** können kostenpflichtige digitale Dienstleistungen direkt im Prozess bezahlt werden. So lässt sich der Ablauf von der Erfassung bis zur Zahlung digital und ohne Medienbruch abbilden.

## Einsatzbereiche

Online Bezahlung kann je nach Konfiguration in unterschiedlichen Modulen genutzt werden, zum Beispiel:

- **Reservationen**: Bezahlung von kostenpflichtigen Buchungen im Reservationsprozess.
- **Formulare**: Bezahlpflichtige Formulare über Preisangaben und verpflichtende Zahlung.

## Voraussetzungen

- Ein kostenpflichtiger Prozess ist in der Regel über ein [Formular](/module/formulare/) abgebildet.
- Preisangaben und die Zahlungslogik werden über die Formular-Konfiguration gesteuert.

## Zahlungspflicht in Formularen

In Formularen können Optionen (z.B. Radio Buttons / Checkboxes) mit Preisen versehen werden. Wenn eine Zahlung zwingend sein soll, wird dies in der Formular-Definition entsprechend markiert.

- Details und Beispiele: [Formulare – Preisangaben](/module/formulare/#preisangaben)

## Payment Gateway

Damit Zahlungen über das Portal abgewickelt werden können, muss ein Payment Gateway eingerichtet sein. Folgende Zahlungsanbieter stehen zur Verfügung:

- [Datatrans](https://www.datatrans.ch/)
- [Stripe](https://stripe.com/)
- [Worldline Saferpay](https://www.saferpay.com/)

Je nach Zahlungsanbieter und Konfiguration können die verfügbaren Zahlungsmethoden variieren. In der Regel werden jedoch alle gängigen Kreditkarten sowie TWINT unterstützt.
