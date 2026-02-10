---
title: Anmeldung
description: Anleitung zur Anmeldung bei admin.digital — Login, Passwort und Zwei-Faktor-Authentifizierung
---

# Anmeldung

!!! warning "Entwurf"
    Diese Seite befindet sich im Aufbau. Inhalte können sich jederzeit ändern.

Diese Anleitung beschreibt, wie Sie sich bei admin.digital anmelden, Ihr Passwort verwalten und die Zwei-Faktor-Authentifizierung einrichten.

## Zugang zur Plattform

admin.digital ist über den Webbrowser erreichbar. Sie benötigen lediglich eine aktive Internetverbindung und einen unterstützten Browser.

<!-- TODO: Exakte URL der Plattform ergänzen (z.B. https://app.admin.digital) -->

!!! info "Unterstützte Browser"
    admin.digital unterstützt die aktuellen Versionen folgender Browser:

    - Google Chrome
    - Mozilla Firefox
    - Microsoft Edge
    - Apple Safari

    <!-- TODO: Mindestversionen und ggf. Einschränkungen prüfen und ergänzen -->

## Anmeldung Schritt für Schritt

### 1. Plattform aufrufen

Öffnen Sie Ihren Webbrowser und navigieren Sie zur Anmeldeseite von admin.digital.

<!-- TODO: Screenshot der Anmeldeseite einfügen -->
<!-- ![Anmeldeseite](../img/anmeldung-startseite.png) -->

### 2. Zugangsdaten eingeben

Geben Sie Ihre E-Mail-Adresse und Ihr Passwort ein, die Sie von Ihrer Verwaltung erhalten haben.

<!-- TODO: Screenshot der Login-Maske einfügen -->
<!-- ![Login-Maske](../img/anmeldung-login.png) -->

### 3. Anmeldung bestätigen

Klicken Sie auf **Anmelden**, um sich auf der Plattform einzuloggen.

<!-- TODO: Screenshot nach erfolgreichem Login einfügen -->
<!-- ![Startseite nach Login](../img/anmeldung-dashboard.png) -->

!!! tip "Angemeldet bleiben"
    Je nach Konfiguration Ihrer Verwaltung können Sie die Option **Angemeldet bleiben** aktivieren. Verwenden Sie diese Option nur auf Geräten, die ausschliesslich von Ihnen genutzt werden.

## Passwortverwaltung

### Passwort ändern

Sie können Ihr Passwort jederzeit in den Kontoeinstellungen ändern.

<!-- TODO: Genauen Pfad zu den Kontoeinstellungen beschreiben -->

1. Melden Sie sich bei admin.digital an.
2. Öffnen Sie die **Kontoeinstellungen**.
3. Wählen Sie **Passwort ändern**.
4. Geben Sie Ihr aktuelles Passwort und anschliessend Ihr neues Passwort ein.
5. Bestätigen Sie die Änderung.

!!! warning "Sicheres Passwort wählen"
    Verwenden Sie ein starkes Passwort mit mindestens 12 Zeichen, das Gross- und Kleinbuchstaben, Zahlen und Sonderzeichen enthält. Verwenden Sie Ihr Passwort nicht für andere Dienste.

### Passwort vergessen

Falls Sie Ihr Passwort vergessen haben, können Sie es über die Anmeldeseite zurücksetzen.

<!-- TODO: Genauen Ablauf der Passwort-Zurücksetzung beschreiben und Screenshots einfügen -->

1. Klicken Sie auf der Anmeldeseite auf **Passwort vergessen**.
2. Geben Sie Ihre registrierte E-Mail-Adresse ein.
3. Sie erhalten eine E-Mail mit einem Link zur Passwort-Zurücksetzung.
4. Folgen Sie dem Link und vergeben Sie ein neues Passwort.

!!! note "Keine E-Mail erhalten?"
    Prüfen Sie Ihren Spam-Ordner. Falls die E-Mail nicht ankommt, wenden Sie sich an Ihre zuständige IT-Stelle oder an den [Support](../kontakt.md).

## Zwei-Faktor-Authentifizierung (2FA)

<!-- TODO: Detaillierte Anleitung zur 2FA-Einrichtung ergänzen, sobald die genauen Abläufe feststehen -->

Die Zwei-Faktor-Authentifizierung bietet zusätzlichen Schutz für Ihr Konto. Nach der Eingabe Ihres Passworts wird ein zweiter Faktor abgefragt.

!!! info "Unterstützte Verfahren"
    admin.digital unterstützt folgende 2FA-Verfahren:

    - **TOTP-App** — z.B. Google Authenticator, Microsoft Authenticator oder Authy
    - **YubiKey** — Hardware-Sicherheitsschlüssel

    <!-- TODO: Genaue Liste der unterstützten Verfahren und Geräte prüfen -->

### TOTP-App einrichten

<!-- TODO: Schritt-für-Schritt-Anleitung mit Screenshots ergänzen -->

1. Öffnen Sie die **Kontoeinstellungen** und wählen Sie **Zwei-Faktor-Authentifizierung**.
2. Wählen Sie **TOTP-App** als Verfahren.
3. Scannen Sie den angezeigten QR-Code mit Ihrer Authenticator-App.
4. Geben Sie den generierten Code ein, um die Einrichtung abzuschliessen.

### YubiKey einrichten

<!-- TODO: Schritt-für-Schritt-Anleitung mit Screenshots ergänzen -->

1. Öffnen Sie die **Kontoeinstellungen** und wählen Sie **Zwei-Faktor-Authentifizierung**.
2. Wählen Sie **Sicherheitsschlüssel (YubiKey)** als Verfahren.
3. Stecken Sie Ihren YubiKey ein und folgen Sie den Anweisungen auf dem Bildschirm.

!!! tip "Backup-Codes"
    Speichern Sie die bereitgestellten Backup-Codes an einem sicheren Ort. Diese können verwendet werden, falls Sie keinen Zugriff auf Ihren zweiten Faktor haben.

## Probleme bei der Anmeldung

| Problem | Lösung |
|---|---|
| Passwort vergessen | [Passwort zurücksetzen](#passwort-vergessen) |
| 2FA-Gerät verloren | Verwenden Sie einen Backup-Code oder wenden Sie sich an den [Support](../kontakt.md) |
| Konto gesperrt | Wenden Sie sich an Ihre zuständige IT-Stelle oder an den [Support](../kontakt.md) |
| Fehlermeldung beim Login | Prüfen Sie Ihre Internetverbindung und versuchen Sie es erneut. Bei anhaltenden Problemen wenden Sie sich an den [Support](../kontakt.md) |

<!-- TODO: Häufige Fehlermeldungen und deren Lösungen ergänzen -->
