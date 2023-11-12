# 4.1 Definition von Seitenbereichen

## Ziel

In dieser Dokumentation wird erläutert, wie Seitenbereiche definiert werden können, um die Struktur und Organisation einer Webseite zu verbessern.

## Was sind Seitenbereiche?

Seitenbereiche helfen dabei, den Code einer Webseite zu organisieren und zu strukturieren. Sie gruppieren zusammengehörige Elemente und erleichtern so die Verwaltung, den Zugriff und die Wartung des Codes.

## Warum Seitenbereiche verwenden?

Die Verwendung von Seitenbereichen bietet mehrere Vorteile:
- **Übersichtlichkeit:** Der Code wird leichter lesbar, da verwandte Elemente zusammen gruppiert sind.
- **Wartbarkeit:** Änderungen an einem Bereich wirken sich nur auf diesen aus, was die Wartung erleichtert.
- **Strukturierte Hierarchie:** Seitenbereiche ermöglichen eine klare Hierarchie, was die Entwicklungsarbeit vereinfacht.

## Beispielcode

### HTML
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meine Webseite</title>
</head>
<body>

    <header>
        <h1>Meine Webseite</h1>
        <nav>
            <!-- Navigationslinks -->
        </nav>
    </header>

    <main>
        <section id="intro">
            <!-- Einführungsinhalte -->
        </section>

        <section id="content">
            <!-- Hauptinhalt der Seite -->
        </section>
    </main>

    <footer>
        <!-- Footer-Inhalte -->
    </footer>

</body>
</html>
