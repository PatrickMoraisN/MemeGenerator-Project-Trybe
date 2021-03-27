const memeImageId = '#meme-image-container';

function generateText() {
  const inputValue = document.querySelector('#text-input');
  const memeText = document.querySelector('#meme-text');

  inputValue.addEventListener('keyup', () => {
    memeText.innerText = inputValue.value;
  });
}

function addImg() {
  const imgInput = document.getElementById('meme-insert');
  const inputBtn = document.getElementById('submit');
  const memeImg = document.getElementById('meme-image');

  inputBtn.addEventListener('click', () => {
    memeImg.src = URL.createObjectURL(imgInput.files[0]);
  });
}

function fire() {
  const fireBtn = document.querySelector('#fire');
  const memeContainer = document.querySelector('#meme-image-container');

  fireBtn.addEventListener('click', () => {
    memeContainer.style.border = '3px dashed red';
  });
}

function water() {
  const waterBtn = document.querySelector('#water');
  const memeContainer = document.querySelector(memeImageId);

  waterBtn.addEventListener('click', () => {
    memeContainer.style.border = '5px double blue';
  });
}

function earth() {
  const earthBtn = document.querySelector('#earth');
  const memeContainer = document.querySelector(memeImageId);

  earthBtn.addEventListener('click', () => {
    memeContainer.style.border = '6px groove green';
  });
}

function imgs() {
  const imgsContainer = document.querySelector('.memes');
  const memeImg = document.getElementById('meme-image');

  imgsContainer.addEventListener('click', (event) => {
    memeImg.src = event.target.src;
  });
}

window.onload = () => {
  generateText();
  addImg();
  fire();
  water();
  earth();
  imgs();
};
