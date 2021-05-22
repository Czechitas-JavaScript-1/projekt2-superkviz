
    
let otazky = [
    

    {
        dotaz: 'Na kterou horu jsme se vydali?',
        obrazek: 'obrazky/makovahora.JPG',
        odpovedi: [
            'Maková hora',
            'Sezamová hora',
            'Psí hora'
        ],
        spravnaOdpoved: [
           'Maková hora',
           'Sezamová hora',
            'Psí hora'
        ]
    },
    {
        dotaz: 'V jakém zámku jsme se procházeli?',
        obrazek: 'obrazky/nebilovy.JPG',
        odpovedi: [
            'Žleby',
            'Nebílovy',
            'Žinkovy'
        ],
        spravnaOdpoved: [
            'Nebílovy',
            'Žleby',
            'Žinkovy'
        ]

    },
    {
        dotaz: 'Kolem kterého zámku jsme se toulali?',
        obrazek: 'obrazky/krivoklat.JPG',
        odpovedi: [
            'Krivoklat',
            'Sovinec',
            'Veveří'
        ],
        spravnaOdpoved: [
            'Krivoklat',
            'Sovinec',
            'Veveří'
        ]
        
    },
    {
        dotaz: 'Kde jsme byli na výletě?',
        obrazek: 'obrazky/valdek.JPG',
        odpovedi: [
            'Vlčtejn',
            'Šelmberg',
            'Valdek'
        ],
    
        spravnaOdpoved: [
            'Valdek',
            'Šelmberg',
            'Vlčtejn'
        ]
    },
    {
        dotaz: '',
        obrazek: '',
        odpovedi: [
            '',
            '',
            ''
        ],
    
        spravnaOdpoved: [
            '',
            '',
            ''
        ]
    }
    
]


            function dalsiStrana() {
                
            
                document.querySelector('.otazka').innerHTML = otazky[0].dotaz;

                document.querySelector('img').src = otazky[0].obrazek;

                
                let volba1 = document.querySelector('.volba1');
                let volba2 = document.querySelector('.volba2');
                let volba3 = document.querySelector('.volba3'); 

                let cisloVolby1 = document.createElement('span');
                cisloVolby1.className = 'volba1';
                cisloVolby1.innerHTML = volba1;


            let cisloVolby2 = document.createElement('span');   
                cisloVolby2.className = 'volba2';
                cisloVolby2.innerHTML = volba2;

            let cisloVolby3 = document.createElement('span');   
                cisloVolby3.className = 'volba3';
                cisloVolby3.innerHTML = volba3;   


                volba1.innerHTML = otazky[0].odpovedi[0]; 
                volba2.innerHTML = otazky[0].odpovedi[1];
                volba3.innerHTML = otazky[0].odpovedi[2];

              

            otazky.shift();

     
            let spravneOdpovedi = [

                {
                    jmeno: 'Makova hora',
                    fotka: "obrazky/makovahora.JPG"
                },
                {
                    jmeno: 'Nebilovy',
                    fotka: "obrazky/nebilovy.JPG"
                },
                {
                    jmeno: 'Krivoklat',
                    fotka: "obrazky/krivoklat.JPG"
                }

             ]       

             


             if(otazky.length == 0){
               
        
             
            

             document.querySelector('.otazka').innerHTML = 'Správná odpověď';


    
        

    document.querySelector('img').src = spravneOdpovedi[0].fotka;
    document.querySelector('#odpovedi').innerHTML = spravneOdpovedi[0].jmeno;
     

    
            }

             
                     
           
 }
