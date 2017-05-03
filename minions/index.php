<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Minion Kalender</title>
    <style>
        input {
            margin: 5px;
        }

        #formular {
            border-left: solid;
            /*width: 300px;*/
        }

        body > div {
            margin: 5px;
            float: left;
        }
        table {
            border-collapse: inherit;
            border-spacing: inherit;
            border: 1px solid black;
        }
        th{
            border: 1px solid black;
        }
        td{
            border: 1px solid black;
        }
        #ausgabe{
            border: 1px solid black;
            width: 500px;
            height: 300px;
        }
    </style>
</head>
<body>
<h1>Kalender</h1>
<div>
    <h3>Ausgabe Bereich</h3>
    <button type="button" id="getInformationButton">Lade Informationen</button><br>
    <table>
        <thead>
        <tr>
            <th>Von</th>
            <th>Bis</th>
            <th>Beschreibung</th>
            <th>Minions</th>
            <th>Ort</th>
            <th>Ändern</th>
        </tr>
        </thead>
        <tbody id="tableBody">

        </tbody>
    </table>
    <h3>
        Ausgabe:
    </h3>
    <div id="ausgabe">

    </div>
</div>
<div id="formular">
    <h3>Eingabe Bereich</h3>
    <form action="GET" id="form">
        <input type="datetime" class="textfields" id="von" placeholder="Von"><br>
        <input type="datetime" class="textfields" id="bis" placeholder="Bis"><br>
        <input type="text" class="textfields" id="beschreibung" placeholder="Beschreibung"><br>
        <input type="text" class="textfields" id="ort" placeholder="Ort"><br>
        Minions:<br>
        <input type="checkbox" name="minions" value="Stuart">Stuart<br>
        <input type="checkbox" name="minions" value="Bob">Bob<br>
        <input type="checkbox" name="minions" value="Kevin">Kevin<br>
        <button type="button" id="loeschen">Löschen</button>
        <button type="button" id="uebernehmen">Übernehmen</button>
    </form>
</div>
<script src="script.js"></script>
</body>
</html>