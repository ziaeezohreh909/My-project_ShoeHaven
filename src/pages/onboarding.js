import { PageOneOnboarding } from "../templates/onboarding/onboarding-page1.js";
import { TwoPageOnboarding } from "../templates/onboarding/onboarding-page2.js";
import { ThreePageOnboarding } from "../templates/onboarding/onboarding-page3.js";
import { FourPageOnboarding } from "../templates/onboarding/onboarding-page4.js";
import { FivePageOnboarding } from "../templates/onboarding/onboarding-page5.js";

export function Onboarding() {
  document.getElementById("app").style.fontFamily = "Inter";
  const board = document.createElement("div");
  // PageOneOnboarding()
  // TwoPageOnboarding();
  // ThreePageOnboarding();
  // FourPageOnboarding();
  board.appendChild(ThreePageOnboarding());
  return board;
}
