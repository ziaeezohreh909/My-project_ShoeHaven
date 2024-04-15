import { PageOneOnboarding } from "../templates/onboarding/onboarding-page1";
import { TwoPageOnboarding } from "../templates/onboarding/onboarding-page2";
import Navigo from "navigo";
import { ChangePage } from "../utils/change-page";
import { StartSlider } from "../templates/onboarding/sliderpages";
import { Home } from "../pages/home";

export const router = new Navigo();

router
  .on("/", () => {
    ChangePage(PageOneOnboarding);
  })
  .on("/onboarding-page2", () => {
    ChangePage(TwoPageOnboarding);
  })
  .on("/sliderpages", () => {
    ChangePage(StartSlider);
  })
  .on("/Home", () => {
    ChangePage(Home);
  });
