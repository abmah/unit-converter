let amount

function getInputFromTextBox() {
  amount = document.getElementById("input-place").value;

}

function convert() {
  document.getElementById("meter-feet").innerText = amount + " meters = " + (amount * 3.281).toFixed(3)
    + " feet | " + amount + " feet = " + (amount / 3.281).toFixed(3) + " meters"

  document.getElementById("liter-galons").innerText = amount + " liters = " + (amount / 3.785).toFixed(3)
    + " galons | " + amount + " galons = " + (amount * 3.785).toFixed(3) + " liters"

  document.getElementById("kilogram-pounds").innerText = amount + " kilogram = " + (amount * 2.205).toFixed(3)
    + " pounds | " + amount + " pounds = " + (amount / 2.205).toFixed(3) + " kilograms"



}

