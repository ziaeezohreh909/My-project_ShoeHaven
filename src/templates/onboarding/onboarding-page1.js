export function PageOneOnboarding() {
  document.getElementById("app").style.fontFamily = "Inter";
  const logoDiv = document.createElement("div");
  logoDiv.classList.add(
    "flex",
    "justify-center",
    "border-none",
    "mx-auto",
    "gap-2",
    "h-[63px]",
    "w-[231px]",
    "mt-[240px]"
  );
  const imgDiv = document.createElement("div");
  imgDiv.classList.add(
    "border-none",
    "rounded-full",
    "bg-black",
    "flex",
    "items-center",
    "justify-center",
    "h-[59px]",
    "w-[59px]"
  );
  logoDiv.append(imgDiv);
  const imagLogo = document.createElement("img");
  imagLogo.src = "./src/assets/image/logo.png";
  imagLogo.classList.add("w-[27px]", "mx-auto", "h-[40px]");
  imgDiv.append(imagLogo);
  const textLogo = document.createElement("h4");
  textLogo.classList.add(
    "font-semibold",
    "self-center",
    "font-bold",
    "text-5xl/[63px]"
  );
  textLogo.innerText = "Shoea";
  logoDiv.append(textLogo);

  const loadingDiv = document.createElement("div");
  loadingDiv.classList.add("flex", "justify-center", "mx-auto", "mt-64");
  const imgLoading = document.createElement("img");
  imgLoading.src = "./src/assets/image/spinner-atom.png";
  imgLoading.classList.add("w-[48px]", "h-[48px]");
  loadingDiv.append(imgLoading);

  document.querySelector("#app").append(logoDiv, loadingDiv);
}
