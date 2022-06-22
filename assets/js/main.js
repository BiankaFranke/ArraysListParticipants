console.log('It Works');

let output = [];
let teilnehmerOutput = document.querySelector('#teilnehmerOutput');
let anzahlOutput = document.querySelector('#anzahlTeilnehmer');

let hinzufügen = (event) => {
    let input = document.querySelector('#teilnehmerInput').value;
    output.push(input)

    teilnehmerOutput.innerHTML = output.join('<br>');
    
    let length = output.length;
    anzahlOutput.innerText = length;
}

let rückgängig = (event) => {
    let length = output.length;
    let lastItem = output.slice(0, length-1);

    teilnehmerOutput.innerHTML = lastItem.join('<br>');

    output = lastItem;

    if (length == 0) {
        anzahlOutput.innerText = '0';
    } else {
        anzahlOutput.innerText = length - 1;
    };
}