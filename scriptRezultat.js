"use strict";

function calculatorImc(imc) {
  let interpretare = "";
  if (imc < 18.5) {
    interpretare = "Subponderal";
  } else if (imc >= 18.5 && imc < 24.9) {
    interpretare = "Greutate normala";
  } else if (imc >= 25 && imc < 29.9) {
    interpretare = "Supraponderal";
  } else {
    interpretare = "Obezitate";
  }

  return interpretare;
}
function interpretorImc(imc) {
  let rezultatInterpretare = "";
  switch (imc) {
    case "Subponderal":
      rezultatInterpretare =
        " Greutatea dumneavoastră este prea mică, recomandam un consult nutritional.";
      break;
    case "Greutate normala":
      rezultatInterpretare = " Greutatea dumneavoastră este normală.";
      break;
    case "Supraponderal":
      rezultatInterpretare =
        "Greutatea dumneavoastră este prea mare! Un IMC mare a fost descoperit ca fiind un factor de risc pentru litiza renală, recomandăm un regim alimentar și activitate fizică.";
      break;
    case "Obezitate":
      rezultatInterpretare =
        "Greutatea corporala este foarte mare! Un IMC mare a fost descoperit ca fiind un factor de risc pentru litiza renală. Este recomandat un consult la un specialist în nutriție .";
      break;
  }
  return rezultatInterpretare;
}

function interpretareApa(consumApa) {
  let interpretareApa = "";
  switch (consumApa) {
    case "0":
      interpretareApa =
        " Cantitatea de apă este foarte mică ceea ce constituie un factor de risc major, este recomandat să consumați 2,5 litri pe zi.";
      break;
    case "1":
      interpretareApa =
        " Cantitatea de apă este foarte mică ceea ce constituie un factor de risc major, este recomandat să consumați 2,5 litri pe zi.";
      break;
    case "1.5":
      interpretareApa =
        " Cantitatea de apă este  mult prea mică ceea ce constituie un factor de risc major, este recomandat să consumați 2,5 litri pe zi.";
      break;
    case " 2":
      interpretareApa =
        " Cantitatea de apă este aproape suficientă, mai puteti adăuga încă 0.5L";
      break;
    case " 2.5":
      interpretareApa = " Cantitatea de apă este suficientă.";
      break;
  }
  return interpretareApa;
}

function interpretareCarbogazoase(carbogazoase) {
  let interpretareCarbogazoase = "";
  switch (carbogazoase) {
    case "da":
      interpretareCarbogazoase =
        " Consumul de băuturi carbogazoase poate influența litiaza renală, atât direct, cât și indirect. Multe băuturi carbogazoase, în special cele de tip cola, conțin acid fosforic, care poate crește excreția urinară de calciu și scădea nivelul de citrat urinar.";
      break;
    case "nu":
      interpretareCarbogazoase =
        " Excelent, este recomandat să se limiteze consumul de băuturi carbogazoase dulci sau de tip cola în cazul persoanelor cu predispoziție la litiază renală.";
  }
}

function interpretareCitrice(citrice) {
  let consumCitrice = "";
  switch (citrice) {
    case "da":
      consumCitrice =
        " Foarte bine, consumul de citrice a fost enumerat în mai multe studii ca fiind un factor protector pentru litiaza renală ";
      break;
    case "nu":
      consumCitrice =
        " Atenție! Consumul de citrice a fost enumerat in mai multe studii ca fiind un factor protector pentru litiaza renală, recomandam inceperea consumului zilnic intre 120-150 ml.";
  }
  return consumCitrice;
}

function interpretareLapte(consumLapte) {
  let interpretareLapte = "";
  switch (consumLapte) {
    case "0":
      interpretareLapte =
        " Atenție! Laptele este o sursă importantă de calciu. Consumul de calciu din alimente poate ajuta la legarea oxalatului în tractul digestiv, ceea ce împiedică absorbția acestuia și reducerea nivelului de oxalat urinar.";
      break;
    case "400":
      interpretareLapte =
        " Persoanele care reduc drastic consumul de calciu alimentar pot avea un risc mai mare de formare a pietrelor, deoarece nivelurile de oxalat urinar cresc atunci când calciul alimentar este insuficient.";
      break;
    case "500":
      interpretareLapte =
        "Consumul de lapte poate ajuta la prevenirea anumitor tipuri de pietre la rinichi, în special calculii de oxalat de calciu, care sunt cel mai frecvent tip.";
      break;
    case "600":
      interpretareLapte =
        "Consumul de lapte poate ajuta la prevenirea anumitor tipuri de pietre la rinichi, în special calculii de oxalat de calciu, care sunt cel mai frecvent tip.";
      break;
  }
  return interpretareLapte;
}

function interpretareMese(nrMese) {
  let interpretareMese = "";
  switch (nrMese) {
    case "1":
      interpretareMese =
        " Numărul de mese zilnice este prea mic, este recomandat să creșteți numărul la 3 mese/zi.";
      break;
    case "2":
      interpretareMese =
        " Numărul de mese zilnice este prea mic, este recomandat să creșteți numărul la 3 mese/zi.";
      break;
    case "3":
      interpretareMese = " Excelent, numărul de mese este corespunzător.";
      break;
    case "4":
      interpretareMese =
        " Numărul recomandat de meste pe zi este de 3 mese principale.";
      break;
  }
  return interpretareMese;
}

function interpretareCantitateLegumeSaptamana(cantitateLegumeSaptamana) {
  let interpretareCantitateLegumeSaptamana = "";
  switch (cantitateLegumeSaptamana) {
    case "1":
      interpretareCantitateLegumeSaptamana =
        " Excelent, consumul de legume este un factor protector pentru litiază.";
      break;
    case "2":
      interpretareCantitateLegumeSaptamana =
        " Excelent, consumul de legume este un factor protector pentru litiază.";
      break;
    case "3":
      interpretareCantitateLegumeSaptamana =
        " Consumul de legume este prea redus este recomandat să creșteți aportul.";
      break;
    case "4":
      interpretareCantitateLegumeSaptamana =
        " Consumul de legume este prea redus este recomandat să creșteți aportul.";
      break;
  }
  return interpretareCantitateLegumeSaptamana;
}

function interpretareCantitateLegumeZi(cantitateLegumeZi) {
  let interpretareCantitateLegumeZi = "";
  switch (cantitateLegumeZi) {
    case "1":
      interpretareCantitateLegumeZi =
        " Consumul de legume este prea redus, este recomandat in jur de 2 portii pe zi.";
      break;
    case "2":
      interpretareCantitateLegumeZi =
        " Excelent, consumul de legume este un factor protector pentru litiaza.";
      break;
    case "3":
      interpretareCantitateLegumeZi =
        " Excelent, consumul minim recomandat este de 2 portii pe zi.";
      break;
  }
  return interpretareCantitateLegumeZi;
}

function interpretareCantitateFructeSaptamana(cantitateFructeSaptamana) {
  let interpretareCantitateFructeSaptamana = "";
  switch (cantitateLegumeZi) {
    case "1":
      interpretareCantitateFructeSaptamana =
        " Excelent, este recomandat să consumați în jur de 3 porții de fructe pe zi.";
      break;
    case "2":
      interpretareCantitateFructeSaptamana =
        " Este recomandat să consumați fructe zilnic.";
      break;
    case "3":
      interpretareCantitateFructeSaptamana =
        " Atenție consumul dumneavoastră de fructe este prea redus, este recomandat să consumați în jur de 3 porții de fructe pe zi.";
      break;
    case "4":
      interpretareCantitateFructeSaptamana =
        " Atenție consumul dumneavoastră de fructe este prea redus, este recomandat să consumați în jur de 3 portii de fructe pe zi .";
      break;
  }
  return interpretareCantitateFructeSaptamana;
}

function interpretareCantitateCarneSaptamana(cantitateCarneSaptamana) {
  let interpretareCantitateCarneSaptamana = "";
  switch (cantitateCarneSaptamana) {
    case "1":
      interpretareCantitateCarneSaptamana =
        " Atenție, trebuie să limitați aportul de proteine animale. Proteinele animale pot crește nivelul de acid uric și pot reduce citratul urinar, care poate favoriza formarea de pietre.";
      break;
    case "2":
      interpretareCantitateCarneSaptamana =
        " Urmăriți un consum moderat de proteine animale. Pentru majoritatea oamenilor, aceasta înseamnă menținerea aportului de carne la un nivel rezonabil, de obicei în jur de 3-6 uncii de carne pe zi.";
      break;
    case "3":
      interpretareCantitateCarneSaptamana = "";
      break;
    case "4":
      interpretareCantitateCarneSaptamana = "";
      break;
  }
  return interpretareCantitateCarneSaptamana;
}
function interpretareCantitateOuaSaptamana(cantitateOua) {
  let interpretareCantitateOuaSaptamana = "";
  switch (cantitateCarneSaptamana) {
    case "1":
      interpretareCantitateOuaSaptamana =
        " Excelent, este recomandat sa consumati in jur de 1-2 oua maxim pe zi.";
      break;
    case "2":
      interpretareCantitateOuaSaptamana =
        " Este recomandat sa consumati 1-2 oua maxim pe zi.";
      break;
    case "3":
      interpretareCantitateOuaSaptamana =
        " Atentie consumul dumneavoastra de oua este prea mare.Este recomandat sa consumati 1-2 oua maxim pe zi.";
      break;
  }
  return interpretareCantitateOuaSaptamana;
}

function interpretareCantitateSare(cantitateSare) {
  let interpretareCantitateSare = "";
  switch (cantitateSare) {
    case "1":
      interpretareCantitateSare =
        " Consumul de sare este recomandat să fie în mod ideal, la 1.500 de miligrame pe zi pentru persoanele cu risc mai mare de pietre la rinichi sau alte probleme de sănătate. Efect asupra pietrelor la rinichi: aportul ridicat de sodiu poate crește cantitatea de calciu din urină, ceea ce poate duce la formarea de pietre la rinichi de oxalat de calciu.";
      break;
    case "2":
      interpretareCantitateSare =
        " Consumul de sare este recomandat sa fie în mod ideal, la 1.500 de miligrame pe zi pentru persoanele cu risc mai mare de pietre la rinichi sau alte probleme de sănătate. Efect asupra pietrelor la rinichi: aportul ridicat de sodiu poate crește cantitatea de calciu din urină, ceea ce poate duce la formarea de pietre la rinichi de oxalat de calciu.";
      break;
    case "3":
      interpretareCantitateSare =
        " Consumul de sare este recomandat sa fie în mod ideal, la 1.500 de miligrame pe zi pentru persoanele cu risc mai mare de pietre la rinichi sau alte probleme de sănătate. Efect asupra pietrelor la rinichi: aportul ridicat de sodiu poate crește cantitatea de calciu din urină, ceea ce poate duce la formarea de pietre la rinichi de oxalat de calciu";
      break;
    case "4":
      interpretareCantitateSare =
        " Consumul de sare este recomandat sa fie în mod ideal, la 1.500 de miligrame pe zi pentru persoanele cu risc mai mare de pietre la rinichi sau alte probleme de sănătate. Efect asupra pietrelor la rinichi: aportul ridicat de sodiu poate crește cantitatea de calciu din urină, ceea ce poate duce la formarea de pietre la rinichi de oxalat de calciu";
      break;
  }
  return interpretareCantitateSare;
}

function interpretareCantitatePaine(cantitatePaine) {
  let interpretareCantitatePaine = "";
  switch (cantitatePaine) {
    case "0":
      interpretareCantitatePaine =
        "Pâinea poate fi o sursă ascunsă de sodiu. Verificați etichetele nutriționale și alegeți pâine cu conținut mai scăzut de sodiu. Dieta generală: Pâinea în sine nu provoacă în mod direct pietre la rinichi, dar tipul și cantitatea de pâine consumată ar trebui să fie considerate ca parte a unei diete echilibrate.";
    case "1":
      interpretareCantitatePaine =
        " Pâinea poate fi o sursă ascunsă de sodiu. Verificați etichetele nutriționale și alegeți pâine cu conținut mai scăzut de sodiu. Dieta generală: Pâinea în sine nu provoacă în mod direct pietre la rinichi, dar tipul și cantitatea de pâine consumată ar trebui să fie considerate ca parte a unei diete echilibrate.";
    case "2":
      interpretareCantitatePaine =
        " Pâinea poate fi o sursă ascunsă de sodiu. Verificați etichetele nutriționale și alegeți pâine cu conținut mai scăzut de sodiu. Dieta generală: Pâinea în sine nu provoacă în mod direct pietre la rinichi, dar tipul și cantitatea de pâine consumată ar trebui să fie considerate ca parte a unei diete echilibrate.";
      break;
    case "3":
      interpretareCantitatePaine =
        " Pâinea poate fi o sursă ascunsă de sodiu. Verificați etichetele nutriționale și alegeți pâine cu conținut mai scăzut de sodiu. Dieta generală: Pâinea în sine nu provoacă în mod direct pietre la rinichi, dar tipul și cantitatea de pâine consumată ar trebui să fie considerate ca parte a unei diete echilibrate.";
      break;
    case "4":
      interpretareCantitatePaine =
        " Atentie! Pâinea poate fi o sursă ascunsă de sodiu. Verificați etichetele nutriționale și alegeți pâine cu conținut mai scăzut de sodiu. Dieta generală: Pâinea în sine nu provoacă în mod direct pietre la rinichi, dar tipul și cantitatea de pâine consumată ar trebui să fie considerate ca parte a unei diete echilibrate.";
      break;
  }
  return interpretareCantitatePaine;
}

const json = localStorage.getItem("form");
const obj = JSON.parse(json);

const greutate = obj.greutate;
const inaltime = obj.inaltime / 100;
const imc = greutate / (inaltime * inaltime);

const consumApa = obj.cantitateApa;
let consumCitrice = obj.consumSucuriNaturale;
let cantitateLapte = obj.cantitateLapte;
let cantitateMese = obj.cantitateMese;
let cantitateLegumeSaptamana = obj.cantitateLegumeSaptamana;
let cantitateLegumeZi = obj.cantitateLegumeZi;
let cantitateFructeSaptamana = obj.cantitateFructeSaptamana;
let cantitateCarneSaptamana = obj.cantitateCarneSaptamana;
let cantitateOua = obj.cantitateOua;
let cantitateSare = obj.cantitateSare;
let cantitatePaine = obj.cantitatePaine;

let interpretareImc = calculatorImc(imc);
let interpretareFinalaImc = interpretorImc(interpretareImc);
let cantitateApa = interpretareApa(consumApa);
let citrice = interpretareCitrice(consumCitrice);
let lapte = interpretareLapte(cantitateLapte);
let mese = interpretareMese(cantitateMese);
let legumeSaptamana = interpretareCantitateLegumeSaptamana(
  cantitateLegumeSaptamana
);
let legumeZi = interpretareCantitateLegumeZi(cantitateLegumeZi);
let fructeSaptamana = interpretareCantitateFructeSaptamana(
  cantitateFructeSaptamana
);
let carneSaptamana = interpretareCantitateCarneSaptamana(
  cantitateCarneSaptamana
);
let oua = interpretareCantitateOuaSaptamana(cantitateOua);
let sare = interpretareCantitateSare(cantitateSare);
let paine = interpretareCantitatePaine(cantitatePaine);
let message = `
  <p><strong>Interpretare Finală IMC:</strong> ${interpretareFinalaImc}</p>
  <p><strong>Cantitate Apă Consum:</strong> ${cantitateApa}</p>
  <p><strong>Consum Citrice:</strong> ${citrice}</p>
  <p><strong>Consum Lapte:</strong> ${lapte}</p>
  <p><strong>Număr Mese:</strong> ${mese}</p>
  <p><strong>Legume Consumat Săptămânal:</strong> ${legumeSaptamana}</p>
  <p><strong>Legume Consumat Zilnic:</strong> ${legumeZi}</p>
  <p><strong>Fructe Consumate Săptămânal:</strong> ${fructeSaptamana}</p>
  <p><strong>Carne Consum Săptămânal:</strong> ${carneSaptamana}</p>
  <p><strong>Ouă Consumate Săptămânal:</strong> ${oua}</p>
  <p><strong>Cantitate Sare:</strong> ${sare}</p>
  <p><strong>Pâine Consum:</strong> ${paine}</p>
`;

// Insert the message into the HTML container
document.getElementById("resultMessage").innerHTML = message;
