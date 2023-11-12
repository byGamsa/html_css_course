# HTML-Grundlagen: Historie, Grungerüst, Aufbau, Doctype-Deklarationen und Metadaten

## 3.1 Historie

HTML (Hypertext Markup Language) ist die Standardauszeichnungssprache zur Strukturierung von Inhalten im Web. Die Entwicklung begann in den frühen 1990er Jahren, und seither hat HTML mehrere Versionen durchlaufen. Aktuell (Stand 2022) ist HTML5 die neueste Version, die zahlreiche Verbesserungen und neue Funktionen mit sich bringt.

## 3.2 Grungerüst eines HTML-Dokuments

Ein HTML-Dokument besteht aus einem grundlegenden Gerüst, das die Struktur der Seite definiert. Hier ist ein einfaches Beispiel:

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meine Webseite</title>
</head>
<body>
    <!-- Hier kommt der Inhalt der Webseite -->
</body>
</html>
```

## 3.3 Aufbau von HTML-Seiten

Der Aufbau von HTML-Seiten erfolgt durch verschiedene Elemente wie Überschriften (`<h1>` bis `<h6>`), Absätze (`<p>`), Listen (`<ul>`, `<ol>`, `<li>`), Bilder (`<img>`), Links (`<a>`), usw. Hier ein einfaches Beispiel:

```html
<body>
    <h1>Willkommen auf meiner Webseite</h1>
    <p>Dies ist ein Absatz mit Text.</p>
    <ul>
        <li>Element 1</li>
        <li>Element 2</li>
        <li>Element 3</li>
    </ul>
    <img src="bild.jpg" alt="Beschreibung des Bildes">
    <a href="https://www.beispiel-link.com">Link zu einer anderen Seite</a>
</body>
```

## 3.4 Verwendung von Doctype-Deklarationen

Die Doctype-Deklaration definiert die HTML-Version und ermöglicht dem Browser, die Seite korrekt darzustellen. Sie sollte am Anfang des HTML-Dokuments platziert werden. Hier ist ein Beispiel:

```html
<!DOCTYPE html>
<html lang="en">
<!-- Rest des HTML-Dokuments -->
</html>
```

Die Doctype-Deklaration `<!DOCTYPE html>` gibt die HTML-Version an und ermöglicht es dem Browser, die Seite korrekt darzustellen.

Die `<html lang="en">`-Zeile definiert den HTML-Root und setzt die Sprache auf Englisch. Sie kann auch auf eine andere gewünschte Sprache geändert werden.

## 3.5 Der Head-Bereich: Metadaten

Der `<head>`-Bereich enthält Metadaten, die für die Darstellung und das Verhalten der Seite wichtig sind. Beispiel:

```html
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Beschreibung der Webseite">
    <meta name="keywords" content="HTML, Webentwicklung, Beispiel">
    <meta name="author" content="Ihr Name">
    <title>Titel der Webseite</title>
</head>```

- `<meta charset="UTF-8">`: Definiert die Zeichenkodierung.
- `<meta name="description" content="Beschreibung der Webseite">`: Beschreibt den Inhalt der Webseite.
- `<meta name="keywords" content="HTML, Webentwicklung, Beispiel">`: Schlüsselwörter für Suchmaschinen.
- `<meta name="author" content="Ihr Name">`: Autor der Webseite.
- `<title>`: Definiert den Titel der Webseite.
