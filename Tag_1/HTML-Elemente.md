### Grobe Struktur
Bevor Du mit der Programmierung anfängst, brauchst Du Elemente auf denen Du programmieren kannst. Dafür musst Du als Erstes eine neue HTML-Datei mit folgender Stuktur kreiren:

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>NotenTool</title>
</head>
<body>
    <header>
        <h2>Notentool</h2>
    </header>
    <main>
        <h1>Main</h1>
    </main>
    <footer>
      <p>©NotenTool DataMigration</p> 
    </footer>
</body> 
</html>
```

### Buttons und Tabelle
Wie Du siehst gibt es ein ```head``` Element bei dem Du die Meta-Daten deiner Seite definierst. In diesem Fall sind wurde das Zeichenset und der Titel definiert.

Neben dem ```head``` gibt es auch ein ```body``` Element. Bei diesem wird ein ```header```, ein ```main``` und ein ```footer``` definiert. Im ```header``` kannst Du zum Beispiel den Titel schreiben. Im ```main``` kommt das Wesentliche sprich deine Tabelle, dein Hinzufüge-Button usw. In deinem ```footer``` kannst Du Elemente anzeigen Lassen welche Du unten haben möchtest. Als Beispiel ein Copyright text.

> Hier eine Idee

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NotenTool</title>
</head>
<body>
    <header>
        <h2>Noten Tool</h2>
    </header>
    <main>
        <button>Note hinzufügen</button>
        <table>
            <thead>
              <tr>
                <th scope="col">Fach</th>
                <th scope="col">Thema</th>
                <th scope="col">Note</th>
                <th scope="col">Aktionen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="subjectCell">Mathematik</td>
                <td class="topicCell">Trigonometrie</td>
                <td class="gradeCell">5.5</td>
                <td>
                    <button class="editButton material-icons-outlined">edit</button>
                    <button class="deleteButton material-icons-outlined">delete</button>
                </td>
                </tr>
              <tr>
            </tbody>
        </table>
    </main>
    <footer>
      <p>©NotenTool Data Migration International</p> 
    </footer>
</body> 
</html>
```
> Hier zwei nützliche Links: <br>
> [HTML Buttons](https://www.w3schools.com/tags/tag_button.asp) <br>
> [HTML Tabellen](https://www.w3schools.com/html/html_tables.asp)

### Formular

Natürlich brauchst Du für das Hinzufügen und die Bearbeitung der Daten ein Formular. Hier eine kleines Beispiel für das Hinzufügen von Noten

```html
<form id="addGradeForm" action="">

    <label for="addSubjectSelect">Fach</label>
    <select id="addSubjectSelect" required>
        <option>Mathematik</option>
        <option>Deutsch</option>
        <option>Französisch</option>
        <option>Sport</option>
    </select>

    <br>
    <label for="addTopicInput">Thema</label>
    <input type="text" id="addTopicInput" placeholder="Thema eingeben" maxlength="200" required>
                        
    <br>
    <label for="addGradeInput">Note</label>
    <input type="number" id="addGradeInput" min="1" max="6" placeholder="Note eingeben" required></input>

    <br>
    <input type="submit" class="submitButton" value="Bestätigen"></input>
</form>
```

> Hier zwei nützliche Links: <br>
> [HTML Form](https://www.w3schools.com/html/html_forms.asp) <br>
> [Kontakt Formular](https://www.w3schools.com/howto/howto_css_contact_form.asp)
