# Aufgabe 6: Hyperlinks (Querverweise)

## a) Dateiorganisation

Teilen Sie die verschiedenen Unterseiten Ihrer Web-Seite auf verschiedene Dateien auf, z.B.:
- `index.html` für die Hauptseite
- `lebenslauf.html` für den Lebenslauf
- `hobbies.html` für Hobbies

## b) Navigationsmenü

Erstellen Sie in jeder dieser Dateien eine ungeordnete Liste, deren Einträge Hyperlinks auf die zuvor angelegten Dateien sind. Diese Liste soll das Navigationsmenü Ihrer Web-Site sein.

### Beispiel-Code:
```html
<!-- Navigationsmenü in index.html -->
<ul>
  <li><a href="index.html">Startseite</a></li>
  <li><a href="lebenslauf.html">Lebenslauf</a></li>
  <li><a href="hobbies.html">Hobbies</a></li>
</ul>
...
```

## c) Inhaltsverzeichnis mit Hyperlinks

In mindestens einer der Dateien soll ein Inhaltsverzeichnis durch Verwendung einer geordneten Liste erstellt werden. Dabei verweist jeder Listeneintrag per Hyperlink auf die entsprechende Überschrift.

### Beispiel-Code:
```markdown
1. [Einführung](#einführung)
2. [Hauptteil](#hauptteil)
3. [Schlussfolgerung](#schlussfolgerung)
...
```

## Ziel
In dieser Aufgabe sollen Hyperlinks (Querverweise) in eine Webseite eingefügt werden. Es ist besonders wichtig, dass der Hyperlink auf eine externe Webseite zeigt und beim Anklicken in einem neuen Browser-Fenster oder Tab geöffnet wird.

## Umsetzung

### Schritte:
1. **Hyperlink einfügen:**
   - Fügen Sie in Ihre Webseite einen Hyperlink zu einer externen Web-Seite ein.

2. **Ziel des Hyperlinks definieren:**
   - Verwenden Sie eines der Standardattribute, das jedes HTML-Element hat, um das Ziel des Hyperlinks zu definieren.

3. **Neues Browser-Fenster oder Tab:**
   - Stellen Sie sicher, dass die fremde Web-Seite beim Anklicken des Hyperlinks in einem neuen Browser-Fenster oder Tab dargestellt wird.

### Beispiel-Code:
```html
<!-- Beispiel-Hyperlink mit Ziel und Attributen für neues Fenster/Tab -->
<a href="https://www.externeseite.com" target="_blank">Besuche externe Webseite</a>

