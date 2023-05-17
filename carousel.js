const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

// Images are from unsplash
let pictures = ['https://img1.goodfon.ru/original/640x480/0/79/moskva-rossiya-moskva-reka.jpg', 'https://img4.goodfon.ru/original/640x480/f/32/reka-moscow-russia-kremlin-moskva-kreml-noch-ogni-gorod.jpg', 'https://wallbox.ru/resize/640x480/wallpapers/main2/201922/oblaka-noc-ogni-reka-otrazenie-moskva-illuminacia-gorod-luna-megapolis-ros.jpg'];

img.src = pictures[0];
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);