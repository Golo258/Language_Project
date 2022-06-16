const ang_IMAGES = document.querySelectorAll(".gallery img");
const jump_OUT = document.querySelector(".jump--out");
const jump_CLOSE = document.querySelector(".jump--out__close");
const jumpOUT_IMG = document.querySelector(".jump--out__img");
const arrowLEFT = document.querySelector(".jump--out__arrow--left");
const arrowRIGHT = document.querySelector(".jump--out__arrow--right");
// po kliknieciu używamy funkcji
let currentIMG__INDEX;

const show_NEXT_IMG = () => {
  if (currentIMG__INDEX === ang_IMAGES.length - 1) {
    currentIMG__INDEX = 0;
  } else {
    currentIMG__INDEX++;
  }
  jumpOUT_IMG.src = ang_IMAGES[currentIMG__INDEX].src;
};

const show_PREVIOUS_IMG = () => {
  if (currentIMG__INDEX === 0) {
    currentIMG__INDEX = ang_IMAGES.length - 1;
  } else {
    currentIMG__INDEX--;
  }
  jumpOUT_IMG.src = ang_IMAGES[currentIMG__INDEX].src;
};

const img_LEAVE = () => {
  jump_OUT.classList.add("dissapearOnScreen");
  setTimeout(() => {
    jump_OUT.classList.add("hidden");
    jump_OUT.classList.remove("dissapearOnScreen");
    ang_IMAGES.forEach((image) => {
      image.setAttribute("tabindex", 1);
    });
  }, 400);
};

ang_IMAGES.forEach((img, index) => {
  const show_Image = (event) => {
    jump_OUT.classList.remove("hidden");
    jumpOUT_IMG.src = event.target.src;
    currentIMG__INDEX = index;
    ang_IMAGES.forEach((image) => {
      image.setAttribute("tabindex", -1);
    });
  };
  img.addEventListener("click", show_Image);

  img.addEventListener("keydown", (event) => {
    if (event.code === "Enter" || event.keyCode === 13) {
      show_Image(event);
    }
  });
});

jump_CLOSE.addEventListener("click", img_LEAVE);
arrowRIGHT.addEventListener("click", show_NEXT_IMG);
arrowLEFT.addEventListener("click", show_PREVIOUS_IMG);

document.addEventListener("keydown", (event) => {
  if (!jump_OUT.classList.contains("hidden")) {
    if (event.code === "ArrowRight" || event.keyCode === 39) {
      show_NEXT_IMG();
    }
    if (event.code === "ArrowLeft" || event.keyCode === 37) {
      show_PREVIOUS_IMG();
    }
    if (event.code === "Escape" || event.keyCode === 27) {
      img_LEAVE();
    }
  }
});

jump_OUT.addEventListener("click", (event) => {
  if (event.target === jump_OUT) {
    img_LEAVE();
  }
});
