---
title: Digitale Siegel
description: Rechtsgültige elektronische Siegel nach ZertES für amtliche Dokumente
---

# Digitale Siegel

Mit **Digitalen Siegeln** können amtliche Dokumente rechtsgültig digital gesiegelt werden. Dadurch werden **Herkunft**, **Integrität** und **Authentizität** eines Dokuments nachweisbar.

Die Verwendung elektronischer Siegel ist im Bundesgesetz über die elektronische Signatur (**ZertES**) geregelt. In admin.digital werden Siegel über den Signing Service von **Swisscom** erstellt.

## Urheberschaft und Unveränderbarkeit

Amtliche Dokumente werden zunehmend digital verschickt oder publiziert. Mit einem elektronischen Siegel kann sichergestellt werden, dass ein Dokument von der angegebenen Organisation stammt und seit dem Anbringen des Siegels nicht verändert wurde.

## Prozess und Sicherheit

Der Siegelungsprozess stellt erhöhte Anforderungen an die Sicherheit:

- Die Berechtigung zur Siegelung ist auf Administratorinnen und Administratoren beschränkt.
- Für die Siegelung wird zusätzlich ein **YubiKey** verlangt.

## Nachvollziehbarkeit

Bei jeder Siegelung werden Prüfungen im Hintergrund durchgeführt. Zusätzlich wird ein digitaler Fingerabdruck des Dokuments über eine verschlüsselte Verbindung an Swisscom Trust Services übermittelt.

Für die Nachvollziehbarkeit werden permanent aufgezeichnet:

- Anfrage-ID an Swisscom
- YubiKey-Token
- Zeitstempel
- auslösender Benutzer
- Fingerabdruck der Datei vor der Siegelung
- Fingerabdruck der Datei nach der Siegelung

Auch wenn die Datei später gelöscht wird, kann weiterhin geprüft werden, ob eine bestimmte Datei im System gesiegelt wurde.
