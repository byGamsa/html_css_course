# 5.1 Hyperlink

## Ziel

Diese Dokumentation erklärt, wie Hyperlinks in HTML erstellt werden und welche Attribute dabei verwendet werden können.

## Was ist ein Hyperlink?

Ein Hyperlink ist ein Element, das es ermöglicht, von einer Webseite zu einer anderen zu springen, sei es innerhalb der gleichen Webseite oder zu einer externen Webseite.

## Beispielcode für einen einfachen Hyperlink

```html
<a href="https://www.example.com">Besuche Beispiel-Website</a>
```

# 5.2 URI und URL

## Ziel

Diese Dokumentation gibt einen Überblick über URI (Uniform Resource Identifier) und URL (Uniform Resource Locator) und ihre Bedeutung in der Webentwicklung.

## URI vs. URL

- **URI (Uniform Resource Identifier):**
  - Eine Zeichenfolge, die eine eindeutige Identifikation oder Adresse für eine Ressource darstellt.
  - Besteht aus URL und URN (Uniform Resource Name).

- **URL (Uniform Resource Locator):**
  - Spezifischer Typ der URI.
  - Definiert die genaue Adresse einer Ressource im Internet.

## Beispiel

- **URI:**
  - `urn:example:book:12345` (URN-Beispiel)

- **URL:**
  - `https://www.example.com/page1` (URL-Beispiel)

## Verwendung in der Webentwicklung

- **URI:**
  - Verwendet in allgemeineren Kontexten zur Identifikation von Ressourcen.

- **URL:**
  - Häufig verwendet, um auf Webseiten, Bilder, Dokumente usw. zuzugreifen.

---
**Hinweis:** Diese Datei dient als Einführung in URI und URL und soll Entwicklerinnen und Entwicklern ein grundlegendes Verständnis vermitteln.

# 5.3 Attribute des <a>-Elements

## Ziel

Diese Dokumentation erläutert die verschiedenen Attribute des HTML `<a>`-Elements, das für Hyperlinks (Querverweise) verwendet wird.

## Attribute

1. ## `href`:
   - Definiert die URL der verlinkten Ressource.
   ```html
   <a href="https://www.example.com">Besuche Beispiel-Website</a>
    ```

2. ## `target`:

Bestimmt, wie der Link geöffnet wird (z.B., in einem neuen Tab oder Fenster).

```html
<a href="https://www.example.com" target="_blank">Öffne in neuem Tab</a>
```

3. ## `title`:

Zeigt einen Tooltip mit dem angegebenen Text an, wenn der Benutzer über den Link schwebt.

```html
<a href="https://www.example.com" title="Beschreibung">Link mit Tooltip</a>
```

4. ## `download`-Attribut

Das `download`-Attribut in HTML ermöglicht das Herunterladen der verlinkten Ressource. Hier ein Beispiel:

```html
<a href="https://www.example.com/document.pdf" download>PDF herunterladen</a>
```