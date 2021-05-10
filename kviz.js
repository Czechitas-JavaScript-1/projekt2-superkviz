
    
let otazky = [
   

    {
        otazka: 'Na kterou horu jsme se vydali?',
        obrazek: 'obrazky/makovahora.JPG',
        odpovedi: [
            'Maková hora',
            'Sezamová hora',
            'Psí hora'
        ],
        spravnaOdpoved: [
           'Maková hora'
        ]
    },
    {
        otazka: 'V jakém zámku jsme se procházeli?',
        obrazek: 'obrazky/nebilovy.JPG',
        odpovedi: [
            'Žleby',
            'Nebílovy',
            'Žinkovy'
        ],
        spravnaOdpoved: [
            'Nebílovy'
        ]

    },
    {
        otazka: 'Kolem kterého zámku jsme se toulali?',
        obrazek: 'obrazky/krivoklat.JPG',
        odpovedi: [
            'Krivoklat',
            'Sovinec',
            'Veveří'
        ],
        spravnaOdpoved: [
            'Krivoklat'
        ]
        
    },
    {
        otazka: 'Kde jsme byli na výletě?',
        obrazek: 'obrazky/valdek.JPG',
        odpovedi: [
            'Vlčtejn',
            'Šelmberg',
            'Valdek'
        ],
    
        spravnaOdpoved: [
            'Valdek'
        ]

    }
    
]


let volba1 = document.querySelector('.volba1');
let volba2 = document.querySelector('.volba2');
let volba3 = document.querySelector('.volba3');

volba1.addEventListener("click", pocitej);
volba2.addEventListener("click", pocitej);
volba3.addEventListener("click", pocitej);


let pocitadlo = document.querySelector('.pocitadlo');

function pocitej() {
    
    pocitadlo.innerHTML = 'Správná odpověď je ' + otazky[0].spravnaOdpoved[0];
    
}



function dalsiStrana() {

    document.querySelector('.otazka').innerHTML = otazky[0].
    otazka;

    document.querySelector('img').src = otazky[0].obrazek;
    
    if(otazky[0].odpovedi[0] === otazky[0].spravnaOdpoved[0]) {
        
        console.log(otazky[0].spravnaOdpoved[0]);
        console.log(otazky[0].odpovedi[0])
    }
   

    volba1.innerHTML = otazky[0].odpovedi[0];

    if(otazky[0].odpovedi[1] ===  otazky[0].spravnaOdpoved[1] ) {
        pocitej();
        console.log(otazky[0].spravnaOdpoved[1])
        console.log(otazky[0].odpovedi[1])
    } 
    
    volba2.innerHTML = otazky[0].odpovedi[1];

    if(otazky[0].odpovedi[2] ===  otazky[0].spravnaOdpoved[2] ) {
        pocitej();
    }
    
    volba3.innerHTML = otazky[0].odpovedi[2];



    otazky.shift()
}


 



