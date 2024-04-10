import { PageOneOnboarding } from "../templates/onboarding/onboarding-page1";
import { TwoPageOnboarding } from "../templates/onboarding/onboarding-page2";
import { ThreePageOnboarding } from "../templates/onboarding/onboarding-page3";
import { FourPageOnboarding } from "../templates/onboarding/onboarding-page4";
import { FivePageOnboarding } from "../templates/onboarding/onboarding-page5";
import { ChangePage } from "../utils/change-page";

const router = new Navigator("/");

export function Router() {
  router
    .on("/", () => {
      ChangePage(PageOneOnboarding);
    })
    .on("/onboarding-page2", () => {
      ChangePage(TwoPageOnboarding);
    })
    .on("/onboarding-page3", () => {
      ChangePage(ThreePageOnboarding);
    })
    .on("/onboarding-page4", () => {
      ChangePage(FourPageOnboarding);
    })
    .on("/onboarding-page5", () => {
      ChangePage(FivePageOnboarding);
    });
  router.resolve();
  return router;
}
