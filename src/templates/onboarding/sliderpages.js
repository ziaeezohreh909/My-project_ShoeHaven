import { El } from "../../utils/EL";
import { router } from "../../routes/router";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const slides = [
  {
    text: "We provide high quality products just for you",
    src: "./src/assets/image/slideshow1.png",
  },
  {
    text: "Your satisfaction is our number one periority",
    src: "./src/assets/image/slideshow2.png",
  },
  {
    text: "Let’s fulfill your fashion needs with shoearight now!",
    src: "./src/assets/image/slideshow3.png",
  },
];
export const slider = (slide) => {
  return El({
    element: "div",
    className: "swiper-slide w-full flex flex-col",
    children: [
      El({
        element: "div",
        className: "w-full overflow-hidden",
        children: [
          El({
            element: "img",
            className: "w-full h-full",
            src: slide.src,
          }),
        ],
      }),
      El({
        element: "div",
        className: "w-full flex items-center justify-center",
        children: [
          El({
            element: "span",
            className:
              "w-full px-4 py-12 text-center text-black text-[28px] font-semibold mx-1",
            innerText: slide.text,
          }),
        ],
      }),
    ],
  });
};
const configSwiper = () => {
  let swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    allowTouchMove: false,
  });
};
export const StartSlider = () => {
  // document.getElementById("app").style.fontFamily = "Inter";
  setTimeout(configSwiper, 0);
  return El({
    element: "div",
    id: "first-slider",
    className:
      "w-full h-screen pb-4 flex flex-col items-center justify-end justify-between transition ease-linear duration-500 transform",
    children: [
      El({
        element: "div",
        className: "w-full swiper",
        children: [
          El({
            element: "div",
            className: "swiper-wrapper mb-10",
            children: [...slides.map((item) => slider(item))],
          }),
          El({
            element: "div",
            className: "swiper-pagination",
          }),
        ],
      }),
      El({
        element: "div",
        className: "w-full text-center mt-7 px-4",
        children: [
          El({
            element: "button",
            className: "w-full bg-black p-4 text-white rounded-full",
            children: "Next",
            eventListener: [
              {
                event: "click",
                callback: (e) => {
                  const swiper = document.querySelector(".swiper").swiper;
                  swiper.slideNext();
                  if (e.target.innerText === "Get Started") {
                    router.navigate("/Home");
                  }
                  swiper.activeIndex == 2
                    ? (e.target.innerText = "Get Started")
                    : null;
                },
              },
            ],
          }),
        ],
      }),
    ],
  });
};
