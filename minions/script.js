/**
 * Created by dmiethe on 31.03.2017.
 */
var ausgabe = document.getElementById("ausgabe");
var getInformationButton = document.getElementById("getInformationButton");
var tableBody = document.getElementById("tableBody");
var meinArray;
var aendern;

var von = document.getElementById("von");
var bis = document.getElementById("bis");
var beschreibung = document.getElementById("beschreibung");
var ort = document.getElementById("ort");
var checkBoxen = document.getElementsByName("minions")

getInformationButton.addEventListener('click', function () {
    fetch('server.php?action=getInformation', {
        method: 'get',
    })
        .then(response=>response.json())
        .then(antwort => {
            meinArray = antwort;
            tableBody.innerHTML = "";
            for (let i in meinArray){
                zeichneTableRow(meinArray[i],i);
            }
            for (let button of document.getElementsByClassName('buttons')){
                button.addEventListener('click', event =>{
                    aendern = event.target.id;
                    von.value = meinArray[aendern].Beginn;
                    bis.value = meinArray[aendern].Dauer;
                    beschreibung.value = meinArray[aendern].Thema;
                    ort.value = meinArray[aendern].Ort;
                    checkBoxen.forEach(function (checkBox){
                        if(meinArray[aendern].Minions.toString().includes(checkBox.value)){
                            checkBox.checked = true;
                        }else {
                            checkBox.checked = false;
                        }
                        console.log(checkBox)
                    })
                });
            }
        })
        .catch(err => console.log(err.message));
});

function zeichneTableRow(termin,stelle) {
    let quellText = "<tr>";
    quellText += "<td>"+termin.Beginn+"</td>";
    quellText += "<td>"+termin.Dauer+"</td>";
    quellText += "<td>"+termin.Thema+"</td>";
    quellText += "<td>"+termin.Minions+"</td>";
    quellText += "<td>"+termin.Ort+"</td>";
    quellText += "<td><button type='button' class='buttons' id='"+stelle+"'>Ändern</button></td>";
    quellText += "</tr>";
    tableBody.innerHTML += quellText;
}

function werteUebernehmen(stelle) {
}