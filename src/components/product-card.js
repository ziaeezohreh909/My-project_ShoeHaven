export function ProductCard({ imageURL, name, price }) {
  document.getElementById("app").style.fontFamily = "Inter";
  const divCard = document.createElement("div");
  const divImg = document.createElement("div");
  divImg.classList.add(
    "sm:w-[182px]",
    "sm:h-[182px]",
    "rounded-3xl",
    "bg-[#F3F3F3]"
  );
  const imageBrand = document.createElement("img");
  imageBrand.src = imageURL;
  imageBrand.classList.add("w-[142px]", "h-[142px]", "p-5", "mx-auto");
  divImg.append(imageBrand);
  const nameBrand = document.createElement("p");
  nameBrand.innerText = name;
  nameBrand.classList.add("text-sm", "sm:font-bold", "text-[#152536]","truncate");
  const priceBrand = document.createElement("p");
  priceBrand.classList.add("text-xs", "font-semibold", "text-[#152536]");
  priceBrand.innerText = `$ ${price}.00`;
  divCard.append(divImg, nameBrand, priceBrand);
  return divCard;
}
