# 6. Webseitenelemente einbinden

## 6.1 Einbindung anderer HTML-Seiten

Die Einbindung anderer HTML-Seiten ermöglicht die Wiederverwendung von Code und die Organisation von Inhalten auf mehrere Dateien. Hier ist ein Beispiel, wie dies in HTML erreicht werden kann:

### Beispielcode
```html
<!-- Einbinden der Header-Seite -->
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meine Webseite</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <!-- Einbindung der Header-Seite -->
    <header>
        <!-- Hier wird der Inhalt der Header-Seite eingefügt -->
        <!-- Beispiel: <include src="header.html"></include> -->
    </header>

    <main>
        <!-- Hauptinhalt -->
    </main>

    <footer>
        <!-- Footer-Inhalte -->
    </footer>

</body>
</html>
```

# 6.2 Grafiken und Bilder

Die Einbindung von Grafiken und Bildern ist entscheidend für die visuelle Gestaltung einer Webseite. Hier ist ein Beispiel für die Verwendung des `<img>`-Tags:

### Beispielcode
```html
<!-- Einbinden eines Bildes -->
<img src="bild.jpg" alt="Beschreibung des Bildes" width="300" height="200">
```

# Beispielcode

## Einbindung von Audio und Video

### Einbinden von Audio
```html
<audio controls>
    <source src="audio.mp3" type="audio/mp3">
    Your browser does not support the audio element.
</audio>
```

# Beispielcode: Einbindung von Video und Skripten

## Einbindung von Video

```html
<!-- Einbinden von Video -->
<video width="320" height="240" controls>
    <source src="video.mp4" type="video/mp4">
    Your browser does not support the video element.
</video>
```

# 6.4 Skripte einbinden

Die Einbindung von JavaScript-Dateien erfolgt über das `<script>`-Tag. Hier ist ein Beispiel:

### Beispielcode
```html
<!-- Einbinden eines JavaScript-Skripts -->
<script src="skript.js"></script>
```

Stellen Sie sicher, dass die Pfade zu den Dateien korrekt sind und beachten Sie möglicherweise notwendige Attribute wie async oder defer für die Skript-Einbindung.

## Fazit
Die korrekte Einbindung von Webseitenelementen ist entscheidend für die Funktionalität und das Erscheinungsbild einer Webseite. Die hier gezeigten Beispiele dienen als Richtlinien und können je nach Anforderungen angepasst werden.
