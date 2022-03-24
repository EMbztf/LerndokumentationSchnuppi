Jetzt kommen wir endlich zur Programmierung an. Für das JavaScript musst Du vier Grundfunktionen programmieren. 
- Eine Funktion, um ein Eintrag zu hinzufügen.
- Eine Funktion, um den Eintrag zu bearbeiten.
- Eine Funktion, um den Eintrag zu löschen.
- Eine Funktion, welche all Deine Einträge beim Laden der Seite anzeigen wird.

### Die Datenspeicherung
Für die Datenspeicherung verwenden wir ```localStorage```. Damit müssen wir keine Back-End Logik implementieren. 
Natürlich darfst für die Datenspeicherung eine Lösung verwenden, die Dir besser gefällt.

> Hier nützliche Links zu localStorage: <br>
> [w3schools](https://www.w3schools.com/jsref/prop_win_localstorage.asp) <br>
> [developer.mozilla](https://developer.mozilla.org/de/docs/Web/API/Window/localStorage)

### Das Hinzufügen 
Du solltest für das Hinzufügen eine Funktion aufrufen sobald, der Benutzer auf den Hinzufüge-Button klickt. Diese Funktion sollte dann ein Formular öffnen. 
Sobald das Formular ausgefüllt und abgeschickt wurde wird ein neuer Eintrag abgespeichert.

### Das Bearbeiten
Für die Bearbeitung wird, sobald der Benutzer auf dem Editierbutton klickt, werden die Daten vom Eintrag in ein neues Formular eingetragen. Sobald das Formular abgeschickt wird dann der bearbeitet Eintrag aktualisiert.

### Das Löschen
Soblad der User auf den Löschbutton klickt, öffnet sich ein Bestätigungsfenster, welches fragt ob er diesen Eintrag wirklich löschen will.

### Das Laden der Daten
Sobald der User die Seite neulädt, wird für jeden einzelnen gespeicherten Eintrag eine neue Zeile in deiner Tabelle hinzugefügt.