let arra = ["assests/Screenshot (51).png", "assests/Screenshot (53).png", "assests/Screenshot (56).png"];
let sliderimg = document.querySelector(".sliderimages");
let prev = document.querySelector(".prev")
let next = document.querySelector(".next ")
let i = 0;

function updateSliderImage() {
    sliderimg.src = arra[i];
    sliderimg.style.opacity = 1;  // support line for fading
    sliderimg.style.transform = "scale(1)"; // support line for fading
}

function fadeOutImage() {     //for fading automatically when image changes accorfimg to set interval
    sliderimg.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    sliderimg.style.opacity = 0.1;
    sliderimg.style.transform = "scale(0.9)";
    setTimeout(() => {
        updateSliderImage();
    }, 500);
}

function slideImage() {  // for sliding images when user does it from next or prev buttons
    sliderimg.style.transform = "translateX(-100%)";
    setTimeout(() => {
        updateSliderImage();
        sliderimg.style.transform = "translateX(0)";
    }, 200);
}

next.addEventListener("click", () => {
    sliderimg.innerHTML = `<img src=${arra[i]}>`
    i++;
    if (i > arra.length - 1) {
        i = 0;
    }
    sliderimg.src = arra[i];
    slideImage();
})

prev.addEventListener("click", () => {
    sliderimg.innerHTML = `<img src=${arra[i]}>`
    i--;
    if (i < 0) {
        i = arra.length - 1;
    }
    sliderimg.src = arra[i];
    slideImage();
});

updateSliderImage();

setInterval(() => {
    i++;
    if (i > arra.length - 1) {
        i = 0;
    }
    sliderimg.src = arra[i];
    fadeOutImage();
}, 5000);



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove("show")
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// Function to generate a random hex color
function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to handle button click
function changeBackgroundColor() {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
}

// Event listener for the button
const changeColorButton = document.getElementById('changeColorButton');
changeColorButton.addEventListener('click', changeBackgroundColor);

const images = ['assests/Screenshot (72).png', 'assests/Screenshot (69).png', 'assests/Screenshot (70).png', 'assests/Screenshot (71).png'];
let currentIndex = 0;  //counter

function changeImage(offset) {
  currentIndex = (currentIndex + offset + images.length) % images.length;
  document.getElementById('imageDisplay').src = images[currentIndex];
  document.getElementById('imageCounter').innerText = currentIndex + 1;
}