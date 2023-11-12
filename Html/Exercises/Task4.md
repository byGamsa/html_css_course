# Aufgabe 6: Zeichenkodierung

Spezifizieren Sie in den Kopfdaten Ihrer HTML-Datei (`index.html`):
- einmal den Zeichensatz `ISO8859-1`
- einmal den Zeichensatz `UTF-8`
- einmal den Zeichensatz `windows-1252`
- einmal den Zeichensatz `ANSI`

Schauen Sie sich in allen Fällen das Ergebnis im Browser an.

**Hinweis:**
- Der Unterschied wird erst bei Verwendung von Sonderzeichen sichtbar.
- Sie können die HTML-Datei auch mit einem der folgenden Programme in den entsprechenden Zeichensatz kodieren:
  - Notepad++ (Windows)
  - iconv (Windows)
  - recode (Linux, Apple)

## Beispiel-Code für `index.html`:

### ISO8859-1
```html
<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="ISO8859-1">
    <title>HTML mit ISO8859-1</title>
</head>

<body>
    <h1>HTML mit ISO8859-1</h1>
    <p>Sonderzeichen: äöüß</p>
</body>

</html>
