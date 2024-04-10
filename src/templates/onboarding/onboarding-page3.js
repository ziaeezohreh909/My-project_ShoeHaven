export function ThreePageOnboarding() {
  const divSlideshow = document.createElement("div");
  divSlideshow.classList.add(
    "bg-[url('./src/assets/image/slideshow1.png')]",
    "bg-cover",
    "sm:w-[430px]",
    "h-[70vh]"
  );

  const textDiv = document.createElement("div");
  textDiv.classList.add("text-center", "p-4");
  const title = document.createElement("h4");
  title.innerText = "We provide high quality products just for you";
  title.classList.add("font-bold", "sm:text-2xl");
  textDiv.append(title);

  const lineDiv = document.createElement("div");
  lineDiv.classList.add("flex", "gap-1", "justify-center", "items-center");
  const lineOne = document.createElement("img");
  lineOne.src = "./src/assets/image/pepicons-pop--line-x.svg";
  const lineTwo = document.createElement("img");
  lineTwo.src = "./src/assets/image/pepicons-gray--line-x.svg";
  const lineThree = document.createElement("img");
  lineThree.src = "./src/assets/image/pepicons-gray--line-x.svg";
  lineDiv.append(lineOne, lineTwo, lineThree);

  const btnDiv = document.createElement("div");
  btnDiv.classList.add("flex", "gap-", "justify-center", "items-center");
  const btn = document.createElement("button");
  btn.classList.add(
    "w-[380px]",
    "h-[47px]",
    "border-solid",
    "rounded-3xl",
    "px-12",
    "py-16px",
    "bg-black",
    "text-white",
    "mt-4"
  );
  btn.innerText = "Next";
  btnDiv.append(btn);

  document.querySelector("#app").append(divSlideshow, textDiv, lineDiv, btnDiv);
}
