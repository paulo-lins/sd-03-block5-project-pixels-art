// Set initial color to black
sessionStorage.setItem('color', '#000000')

// Get each pallete position
const pallete1 = document.querySelectorAll(".color")[0]
const pallete2 = document.querySelectorAll(".color")[1]
const pallete3 = document.querySelectorAll(".color")[2]
const pallete4 = document.querySelectorAll(".color")[3]

// Set collors initially
pallete1.style.backgroundColor = 'black';
pallete2.style.backgroundColor = 'red';
pallete3.style.backgroundColor = 'blue';
pallete4.style.backgroundColor = 'grey';

// Color selector
pallete1.addEventListener('click', function(event) {
  sessionStorage.setItem('color', 'black')
})
pallete2.addEventListener('click', function(event) {
  sessionStorage.setItem('color', '#FF0000')
})
pallete3.addEventListener('click', function(event) {
  sessionStorage.setItem('color', '#0000FF')
})
pallete4.addEventListener('click', function(event) {
  sessionStorage.setItem('color', '#808080')
})

// Set initial pixel colors to white
for (let i = 0; i < pixelSize; i++) {
  getPixel[i].style.backgroundColor = '#FFFFFF';
}

// Pixel detection
const getPixel = document.querySelectorAll(".pixel");
const pixelSize = document.querySelectorAll(".pixel").length;

for (let i = 0; i < pixelSize; i++) {
  getPixel[i].addEventListener('click', function(event) {
    getPixel[i].style.backgroundColor = sessionStorage.color;
  })
}

// Clear all