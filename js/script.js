"use strict";

const hexCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];



function getRandomHexCode() {
  const randomIndex = Math.floor(Math.random() * hexCodes.length);
  return hexCodes[randomIndex];
}

function getRandomColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += getRandomHexCode();
  }
  return color;
}
 
function changeBackgroundColor() {
  const color = getRandomColor(); 
  document.body.style.backgroundColor = color;
  document.getElementById('hexCode').textContent = color;
}

const button = document.querySelector('button');
button.addEventListener('click', changeBackgroundColor);