// /*
// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound
// */

const inputEl = document.querySelector(".input-el")

const btnEl = document.querySelector(".btn-el")

let group1 = document.querySelector(".group-1 p") 
let group2 = document.querySelector(".group-2 p")
let group3 = document.querySelector(".group-3 p")

btnEl.addEventListener('click', function convert() {
    
    let num = inputEl.value;
    
    const metres = inputEl.value * 3.281
    const feet = inputEl.value / 3.281

    const litres = inputEl.value * 0.264
    const gallon = inputEl.value / 0.264

    const kilograms = inputEl.value * 2.204
    const pounds = inputEl.value / 2.204


   group1.innerHTML = `<p> ${num} metres = ${metres.toFixed(3)} | ${num} = ${feet.toFixed(3)} </p>`  
      
   group2.innerHTML = `<p> ${num} litres = ${litres.toFixed(3)} | ${num} = ${gallon.toFixed(3)} </p>`  
   
   group3.innerHTML = `<p> ${num} kilograms = ${kilograms.toFixed(3)} | 
   ${num} = ${pounds.toFixed(3)} </p>` 
   
})


