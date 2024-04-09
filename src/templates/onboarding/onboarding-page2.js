export function TwoPageOnboarding() {
  const divBackground = document.createElement("div");
  divBackground.classList.add(
    "bg-[url('./src/assets/image/WallpaperDog.png')]",
    "bg-cover",
    "w-full",
    "h-screen"
  );
  const downDiv = document.createElement("div");
  downDiv.classList.add("flex", "flex-col", "px-2",'');
  const welcomeText = document.createElement("h5");
  welcomeText.innerText = "Welcome to 👋";
  const logoText = document.createElement("h4");
  logoText.innerText = "Shoea";
  const text = document.createElement("p");
  text.innerText =
    "The best sneakers & shoes e-commerse app of the century for your fashion needs!";

  downDiv.append(welcomeText, logoText, text);
  divBackground.append(downDiv);
  document.querySelector("#app").append(divBackground);
}
