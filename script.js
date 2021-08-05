const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here

btn_toggle.onclick = () => {
  // your code here\
  const toggle = document.getElementById('toggle')
  if (toggle.innerHTML == "Show Calculation") {
    let sum = 630610743 + Number(length.value)
    author.innerHTML = sum
    toggle.innerHTML = "Show Author"
  } else if (toggle.innerHTML == "Show Author") {
    author.innerHTML = "630610743 Nadtaphong Jandaboot"
    toggle.innerHTML = "Show Calculation"
  }
}

if (toggle.innerHTML == "Search") {
  let UserColor = color(color.value)
  const Change = document.getElementById('#color')
  Text.body.style.color = UserColor
}
// more codes for Search and Reset buttons here
