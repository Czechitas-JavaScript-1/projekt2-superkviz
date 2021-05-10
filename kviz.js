
    
let otazky = [
    {
        otazka: 'Kde jsme byli na výletě?',
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
        otazka: 'Kde jsme byli na výletě?',
        obrazek: 'obrazky/konopiste.JPG',
        odpovedi: [
            'Žleby',
            'Konopiště',
            'Žinkovy'
        ],
        spravnaOdpoved: [
            'Konopiště'
        ]

    },
    {
        otazka: 'Kde jsme byli na výletě?',
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



function dalsiStrana() {

    document.querySelector('.otazka').innerHTML = otazky[0].
    otazka;

    document.querySelector('img').src = otazky[0].obrazek;
    
    volba1.innerHTML = otazky[0].odpovedi[0];

        if(otazky[0].odpovedi[0] === otazky[0].spravnaOdpoved) {
            pocitej();
        } 
    
    volba2.innerHTML = otazky[0].odpovedi[1];

        if(otazky[0].odpovedi[1] ===  otazky[0].spravnaOdpoved ) {
            pocitej();
        }
    
    volba3.innerHTML = otazky[0].odpovedi[2];

        if(otazky[0].odpovedi[2] ===  otazky[0].spravnaOdpoved ) {
            pocitej();
        }

    otazky.shift()
}

volba1.addEventListener("click", pocitej);
volba2.addEventListener("click", pocitej);
volba3.addEventListener("click", pocitej);


let pocitadlo = document.querySelector('.pocitadlo');
let pocet = 0;
function pocitej() {
    pocet++;
    pocitadlo.innerHTML = pocet;
}
 



