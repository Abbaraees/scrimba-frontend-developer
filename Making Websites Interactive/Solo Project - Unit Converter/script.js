/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById('convert-btn')
const meterToFeet = document.getElementById('meter-to-feet')
const literToGallon = document.getElementById('liters-to-gallons')
const kiloToPound = document.getElementById('kilos-to-pounds')

convertBtn.addEventListener('click', function () {
  let unit = Number(document.getElementById('unit').value)
  // convert feet to meters
  meterToFeet.textContent = `
    ${unit} meters = ${(unit * 3.2808).toFixed(3)} feet |
    ${unit} feet = ${(unit * 0.3048).toFixed(3)} meters
  `
  // convert liter to gallon
  literToGallon.textContent = `
    ${unit} liters = ${(unit * 0.2642).toFixed(3)} gallons |
    ${unit} gallons = ${(unit * 3.7854).toFixed(3)} liters
  `
  // convert kilo to pound
  kiloToPound.textContent = `
    ${unit} kilos = ${(unit * 2.20462).toFixed(3)} pounds |
    ${unit} pounds = ${(unit * 0.453592).toFixed(3)} kilos
  `
})
