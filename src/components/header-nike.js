export function headerNike() {
  const header = document.createElement("div");
  header.classList.add("flex", "gap-3", "sm:w-full", "p-3");
  const nameBrand = document.createElement("h3");
  nameBrand.innerText = "Nike";
  const iconBack = document.createElement("img");
  iconBack.src = "./src/assets/image/back.svg";
  header.append(iconBack, nameBrand);
  return header;
}
