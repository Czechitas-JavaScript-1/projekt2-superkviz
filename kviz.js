
    
let otazky = [
    {
        otazka: 'Kde jsme byli na výletě?',
        obrazek: 'obrazky/makovahora.JPG',
        odpovedi: [
            'Maková hora',
            'Sezamová hora',
            'Psí hora'
        ],
        spravnaOdpoved: 1
    },
    {
        otazka: 'Kde jsme byli na výletě?',
        obrazek: 'obrazky/konopiste.JPG',
        odpovedi: [
            'Žleby',
            'Konopiště',
            'Žinkovy'
        ],
        spravnaOdpoved: 2

    },
    {
        otazka: 'Kde jsme byli na výletě?',
        obrazek: 'obrazky/krivoklat.JPG',
        odpovedi: [
            'Krivoklat',
            'Sovinec',
            'Veveří'
        ],
        spravnaOdpoved: 1
        
    },
    {
    otazka: 'Kde jsme byli na výletě?',
    obrazek: 'obrazky/valdek.JPG',
    odpovedi: [
        'Vlčtejn',
        'Šelmberg',
        'Valdek'
    ],
    spravnaOdpoved: 3
    }
]




function dalsiStrana() {

    document.querySelector('.otazka').innerHTML = otazky[0].
    otazka;

   
    document.querySelector('.foto').innerHTML = otazky[0].obrazek;

    document.querySelector('.volba1').innerHTML = otazky[0].odpovedi[0];
    
    document.querySelector('.volba2').innerHTML = otazky[0].odpovedi[1];
    
    document.querySelector('.volba3').innerHTML = otazky[0].odpovedi[2];

    otazky.shift();
}

 