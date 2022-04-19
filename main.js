let otazky = [
  {
    poradi: 1,
    dotaz: "Co je ikonická hračka z 80. let?",
    obrazek: "obrazky/moncicak.jpg",
    moznosti: ["Kočičák", "Mončičák", "Opičák"],
    spravnaOdpoved: 1
  },
  {
    poradi: 2,
    dotaz: "Jaké je Matějovo nejoblíbenější ovoce?",
    obrazek: "obrazky/ovoce.jpg",
    moznosti: ["Kokos","Melounek","Jahoda","ani jedna z možností"],
    spravnaOdpoved: 2
  },
  {
    poradi: 3,
    dotaz: "Pro úspěšné absolvování kurzu je potřeba...",
    obrazek: "obrazky/pivo.jpg",
    moznosti: ["umět Javascript","chodit po kurzu do hospody"],
    spravnaOdpoved: 0
  }
]



// definování globálních proměnných:
i = 0;
let otazka = otazky[i];
let obsah, moznostiElement, seznamMoznosti, indexMoznosti, obraz



// vygenerování první otázky na UI:
zobrazOtazku(otazka); //definována níže
zobrazMoznosti(otazka); //definována níže



function zobrazOtazku(otazka) {
  let otazkaElement = document.getElementById("otazka");
  otazkaElement.textContent = otazka.dotaz;

  let poradiElement = document.getElementById("poradi");
  poradiElement.textContent = "Otázka " + otazka.poradi;

  let obrazekElement = document.createElement("img");
  obrazekElement.className = "foto";
  obrazekElement.setAttribute("id","obrazek");
  obrazekElement.src = otazka.obrazek;

  seznamMoznosti = document.createElement("ul");
  seznamMoznosti.setAttribute("id", "odpovedi");

  // vypropagování na UI:
  moznostiElement = document.getElementById("moznosti");
  moznostiElement.appendChild(seznamMoznosti);
  obraz = document.getElementById("obraz");
  obraz.appendChild(obrazekElement);
}



function zobrazMoznosti(otazka) {
  indexMoznosti = 0;
  otazka.moznosti.forEach(moznost => {
    let moznostElement = document.createElement("li");
    moznostElement.textContent = moznost;
    moznostElement.dataset.odpoved = indexMoznosti++;
    moznostElement.className = "moznost";

    // vypropagování možností na UI:
    seznamMoznosti.appendChild(moznostElement);
  });
  // přiřazení eventů ke kliknutí na odpověď:
  let moznosti = document.querySelectorAll(".moznost");
  moznosti.forEach((moznost) => {
    moznost.addEventListener("click", poKliknuti)
  })
}


// vygenerování následující otázky:
let kliknuteOdpovedi = []; 
let moznost;

function poKliknuti(udalost) {
  //zaznamenání vybrané odpovědi do pole:
  moznost = udalost.target;
  let indexVybraneOdpovedi = parseInt(moznost.dataset.odpoved);
  kliknuteOdpovedi.push(indexVybraneOdpovedi);

  //nová iterace pole otázek:
  skryjPredchoziOtazku(); // definována níže
  otazka = otazky[++i]; //přejde na další otázku
  //rozhodování, co se bude dít po skrytí předchozí otázky:
  if (kliknuteOdpovedi.length < 3) {
    zobrazOtazku(otazka);
    zobrazMoznosti(otazka);
  } else {
    vyhodnoceni(); //definována níže
    zobrazVysledky(); //definována níže
  }
}

function skryjPredchoziOtazku () {
  moznostiElement.removeChild(seznamMoznosti);
  let obrazekElement = document.querySelector(".foto");
  let obraz = document.getElementById("obraz");
  obraz.removeChild(obrazekElement);
}

// přepnutí ze zobrazení kvízu na zobrazení výsledků:
function zobrazVysledky(otazka) {
  document.querySelector(".kviz").classList.add("skryty");
  document.querySelector(".vysledek").classList.remove("skryty");
}

// vygenerování hodnocení:
function vyhodnoceni() {
  let a = 0;
  let pocetSpravnychOdpovedi = 0;

  otazky.forEach(otazka => {
    // vypropagování otázky ve vyhodnocení:
    let nadpis = document.createElement("h3");
    nadpis.textContent = otazka.poradi + ". " + otazka.dotaz;

    //dílčí hodnocení za jednotlivé otázky:
    let hodnoceni = document.createElement("p");

    if (kliknuteOdpovedi[a] == otazka.spravnaOdpoved) {
      hodnoceni.textContent = "To je správně."
      hodnoceni.className = "hodnoceni";
      pocetSpravnychOdpovedi++;
      } else {
        hodnoceni.textContent = "Správná odpověď: " + otazka.moznosti[otazka.spravnaOdpoved];
    }

    let text = document.createElement("p");
    text.textContent = "Tvoje odpověd: " + otazka.moznosti[kliknuteOdpovedi[a]];

    // vypropagování dílčího hodnocení na UI:
    let vysledekObsah = document.querySelector(".vysledek__obsah");
    vysledekObsah.appendChild(nadpis);
    vysledekObsah.appendChild(text);
    vysledekObsah.appendChild(hodnoceni);

    //přejde k hodnocení další otázky:
    a++;
  })

  // sourhnné hodnocení:
  let vysledek = `Správně ${pocetSpravnychOdpovedi} ze ${otazky.length} otázek. Úspěšnost ${Math.floor(pocetSpravnychOdpovedi / otazky.length * 100)} %.`

  // vypropagování souhrnného hodnocení:
  let uspesnost = document.querySelector(".uspesnost");
  uspesnost.textContent = vysledek;
}