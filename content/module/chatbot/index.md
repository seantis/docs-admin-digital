---
title: Chatbot (RAG) (BETA)
description: KI-Chatbot mit Retrieval-Augmented Generation auf Basis der Portal-Inhalte
---

# Chatbot (RAG) (BETA)

!!! note "BETA"
	Dieses Modul befindet sich in der Beta-Phase. Funktionen und Verhalten können sich noch ändern.

Digitale Gemeindeportale stehen vor der Herausforderung, grosse Mengen an Informationen aktuell, korrekt und einfach zugänglich bereitzustellen. Genau hier setzt der **Chatbot (RAG)** an. **RAG** steht für *Retrieval-Augmented Generation*. Die Technologie wird insbesondere bei intelligenten Chatbots und Frage-Antwort-Systemen eingesetzt. Im Unterschied zu klassischen KI-Modellen, die ausschliesslich auf ihrem trainierten Wissen basieren, kombiniert ein RAG-System dieses Wissen mit aktuellen, Inhalten aus einem Wissensspeicher.

Ein RAG-System verbindet ein KI-Modell mit aktuellen Inhalten aus einem Wissensspeicher.

## Wie funktioniert das?

- Die Inhalte des Webportals werden als strukturierter Wissensspeicher genutzt.
- Bei einer Frage im Chatbot werden gezielt die relevanten Inhalte des Portals durchsucht.
- Ausschliesslich die gefundenen Informationen des Portals werden in die Antwort integriert.

Dadurch entstehen präzise, kontextbezogene und aktuelle Antworten – inklusive Angabe der genutzten Quellen.

## Technische Implementation

Die technische Architektur integriert mehrere Komponenten in das bestehende Gemeindeportal:

- Ein **Retrieval-Modul** indexiert und durchsucht die Inhalte des Portals effizient.
- Ein **generatives KI-Modell** überführt die gefundenen Informationen in gut verständliche Antworten.

Die Lösung ist an bestehende [Content-Management-Systeme](/module/themen-und-news/) angebunden und nutzt standardisierte Schnittstellen für Datenzugriffe. Neue Inhalte oder Datenquellen werden automatisch als Wissensspeicher integriert.

## Datenschutz und Sicherheit

Datenschutz hat bei der Nutzung von KI-Systemen im öffentlichen Bereich höchste Priorität. Die Lösung orientiert sich an den geltenden datenschutzrechtlichen Vorgaben. Anfragen werden anonym verarbeitet und Gespräche werden nicht gespeichert. Die Datenverarbeitung erfolgt in der Schweiz bei einem Schweizer Cloud-Provider (gemäss [Datenschutzrichtlinie von admin.digital](https://www.admin.digital/datenschutz/)).