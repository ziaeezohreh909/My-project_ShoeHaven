import { router } from "../../routes/router";

export function PageOneOnboarding() {
  document.getElementById("app").style.fontFamily = "Inter";
  const divmain = document.createElement("div");
  setTimeout(() => {
    router.navigate("/onboarding-page2");
  }, 3000);
  const logoDiv = document.createElement("div");
  logoDiv.classList.add(
    "flex",
    "justify-center",
    "items-center",
    "mx-auto",
    "gap-2",
    "h-full",
    "sm:w-full",
    "mt-60"
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
  imagLogo.classList.add("sm:w-[27px]", "mx-auto", "sm:h-[40px]");
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
  loadingDiv.classList.add("flex", "justify-center", "mx-auto");
  const imgLoading = document.createElement("img");
  imgLoading.src = "./src/assets/image/spinner-atom.png";
  imgLoading.classList.add("sm:w-[48px]", "sm:h-[48px]", "mt-52");
  loadingDiv.append(imgLoading);

  divmain.append(logoDiv, loadingDiv);
  return divmain;
}
