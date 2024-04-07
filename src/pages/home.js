import { El } from "@/utils/EL";

export function HomePage() {
  return El({
    element: "div",
    className: "bg-blue-300",
    innerText: "welcome to home page",
  });
}
