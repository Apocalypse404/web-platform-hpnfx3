const slider = document.querySelector(".image-scroll");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", e => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.5;
  slider.scrollLeft = scrollLeft - walk;
});

const progressBar = document.querySelector('.progress-bar');
const audio = document.querySelector('audio');

audio.addEventListener('timeupdate', () => {
  const progress = audio.currentTime / audio.duration;
  progressBar.style.width = `${progress * 100}%`;
});

progressBar.addEventListener('click', (e) => {
  const clickX = e.offsetX;
  const progressBarWidth = progressBar.offsetWidth;
  const progress = clickX / progressBarWidth;
  audio.currentTime = audio.duration * progress;
});

