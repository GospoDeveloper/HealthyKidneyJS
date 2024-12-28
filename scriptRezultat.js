"use strict";

function calculatorImc(imc) {
  let interpretare = "";
  if (imc < 18.5) {
    interpretare = "Subponderal";
  } else if (imc >= 18.5 && imc < 24.9) {
    interpretare = " Greutate normala";
  } else if (imc >= 25 && imc < 29.9) {
    interpretare = "Supraponderal";
  } else {
    interpretare = "Obezitate";
  }

  return interpretare;
}

const json = localStorage.getItem("form");
console.log(json);
const obj = JSON.parse(json);
console.log(obj);

for (const key in obj) {
  const markup = `<div> <span>${key}:${obj[key]}</span> </div>`;
  document.getElementById("data").innerHTML += markup;
}

const greutate = obj.greutate;
const inaltime = obj.inaltime / 100;
const imc = greutate / (inaltime * inaltime);
console.log(imc);
let interpretareImc = calculatorImc(imc);
console.log(interpretareImc);
