let textDotazu = {
    otazka: 'Kde jsme byli na výletě?'
}
let zneniOtazky = document.createElement('span');
    zneniOtazky.className = 'otazka';
    zneniOtazky.innerHTML = textDotazu.otazka;

let dotaz = document.querySelector('.otazka');
    dotaz.appendChild(zneniOtazky);   


let fotky = ['obrazky/makovahora.JPG', 'obrazky/konopiste.JPG', 'obrazky/krivoklat.JPG'];

    
let text1 = ['Maková hora', 'Novy zamek', 'Jiny zamek'];     
let text2 = ['Sezamová hora', 'Konopiště', 'Podobny zamek'];
let text3 = ['Psí hora', 'Stary zamek', 'Krivoklat'];           
    
function dalsiStrana() {
    let fotoKvizu = document.createElement('img');
    fotoKvizu.className = 'foto';
    fotoKvizu.src = fotky[0];

    
    let kviz = document.querySelector('.foto');
    kviz.appendChild(fotoKvizu);
    
    fotky.shift();

let cisloVolby1 = document.createElement('span');
    cisloVolby1.className = 'volba1';
    cisloVolby1.innerHTML = text1[0];
    text1.shift();

let cisloVolby2 = document.createElement('span');   
    cisloVolby2.className = 'volba2';
    cisloVolby2.innerHTML = text2[0];
    text2.shift();

let cisloVolby3 = document.createElement('span');   
    cisloVolby3.className = 'volba3';
    cisloVolby3.innerHTML = text3[0];
    text3.shift();   


let volba1 = document.querySelector('.volba1');
   volba1.appendChild(cisloVolby1);

let volba2 = document.querySelector('.volba2');
   volba2.appendChild(cisloVolby2);

let volba3 = document.querySelector('.volba3');
   volba3.appendChild(cisloVolby3);    


}

 