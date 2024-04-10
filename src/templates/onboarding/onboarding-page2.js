export function TwoPageOnboarding() {
  const divBackground = document.createElement("div");
  divBackground.classList.add(
    "bg-[url('./src/assets/image/WallpaperDog.png')]",
    "bg-cover",
    "bg-center",
    "sm:w-full",
    "h-screen",
    "relative",
    "z-0",
    "bg-opacity-75"
  );
  const downDiv = document.createElement("div");
  downDiv.classList.add(
    "flex",
    "flex-col",
    "px-4",
    "absolute",
    "bottom-0",
    "mb-10",
    "text-white",
    "gap-3",
    "font-semibold",
    "font-bold"
  );
  const welcomeText = document.createElement("h5");
  welcomeText.innerText = "Welcome to 👋";
  welcomeText.classList.add("font-bold", "text-3xl");
  const logoText = document.createElement("h4");
  logoText.innerText = "Shoea";
  logoText.classList.add("font-bold", "text-5xl");
  const text = document.createElement("p");
  text.innerText =
    "The best sneakers & shoes e-commerse app of the century for your fashion needs!";
  text.classList.add("font-boldt", "text-xs");

  downDiv.append(welcomeText, logoText, text);
  divBackground.append(downDiv);
  document.querySelector("#app").append(divBackground);
}
