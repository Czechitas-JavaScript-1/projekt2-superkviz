let textDotazu = {
    otazka: 'Kde jsme byli na výletě?'
}
let zneniOtazky = document.createElement('span');
    zneniOtazky.className = 'otazka';
    zneniOtazky.innerHTML = textDotazu.otazka;

let dotaz = document.querySelector('.otazka');
    dotaz.appendChild(zneniOtazky);   


let fotky = ['obrazky/makovahora.JPG', 'obrazky/konopiste.JPG', 'obrazky/krivoklat.JPG'];
      
console.log(fotky[0])
     
let text = [
     'Maková hora',
     'Sezamová hora',
     'Psí hora'
    
]     
            
    
function dalsiStrana() {
    let fotoKvizu = document.createElement('img');
    fotoKvizu.className = 'foto';
    fotoKvizu.src = fotky[0];

    let kviz = document.querySelector('.foto');
    kviz.appendChild(fotoKvizu);
    
    

let cisloVolby1 = document.createElement('span');
    cisloVolby1.className = 'volba1';
    cisloVolby1.innerHTML = text[0];


let cisloVolby2 = document.createElement('span');   
    cisloVolby2.className = 'volba2';
    cisloVolby2.innerHTML = text[1];

let cisloVolby3 = document.createElement('span');   
    cisloVolby3.className = 'volba3';
    cisloVolby3.innerHTML = text[2];   


let volba1 = document.querySelector('.volba1');
   volba1.appendChild(cisloVolby1);

let volba2 = document.querySelector('.volba2');
   volba2.appendChild(cisloVolby2);

let volba3 = document.querySelector('.volba3');
   volba3.appendChild(cisloVolby3);    


}

 