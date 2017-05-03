/**
 * Created by dmiethe on 31.03.2017.
 */
var ausgabe = document.getElementById("ausgabe");
var getInformationButton = document.getElementById("getInformationButton");
var meinArray = [];
var tableBody = document.getElementById("tabellenBody");
var aendern;
var von = document.getElementById('von');
var bis = document.getElementById('bis');
var beschreibung = document.getElementById('beschreibung');
var ort = document.getElementById('ort');


getInformationButton.addEventListener('click', function () {
    fetch('server.php?action=getInformation', {
        method: 'get',
    })
        .then(response=>response.json())
        // antwort ist die Antwort des Servers nach dem obigen Funktionsaufruf
        .then(antwort => {
            meinArray = antwort;
            //Bei der for in wird der Key bzw. die Stelle im Array zurück
            for (let i in meinArray) {
                zeichneTabellenZeile(meinArray[i], i);
            }

            for (let button of document.getElementsByClassName('buttons')) {
                button.addEventListener('click', event => {
                        aendern = event.target.id;
                        console.log("Klappt an Stelle: " + aendern);
                        von.value = meinArray[aendern].Beginn;
                        bis.value = meinArray[aendern].Dauer;
                        beschreibung.value = meinArray[aendern].Thema;
                        ort.value = meinArray[aendern].Ort;
                    }
                )
            }


        }).catch(err => console.log(err.message));
});

function zeichneTabellenZeile(termin, stelle) {
    let quellText = "<tr>";
    quellText += "<td>" + termin.Beginn + "</td>";
    quellText += "<td>" + termin.Dauer + "</td>";
    quellText += "<td>" + termin.Thema + "</td>";
    quellText += "<td>" + termin.Minions + "</td>";
    quellText += "<td>" + termin.Ort + "</td>";
    quellText += "<td><button type='button' class='buttons' id='" + stelle + "'>Ändern</button></td>";
    quellText += "</tr>";
    tableBody.innerHTML += quellText;
    // document.getElementById(stelle).addEventListener('click', function () {
    //     aendern = stelle;
    //     console.log("Klappt an Stelle: " + stelle);
    // });
    // tableBody.lastElementChild.lastElementChild.lastElementChild.addEventListener('click', werteUebernehmen(stelle));
}

function werteUebernehmen(stelle) {
    aendern = stelle;
    console.log("Klappt");
}