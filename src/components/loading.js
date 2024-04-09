import { El } from "../utils/EL";

export function LoadingIcon() {
  return El({
    element: "div",
    className: "flex items-center justify-center h-[59px] w-[59px]",
    children: [
      El({
        element: "img",
        src: "./src/assets/image/spinner-atom.png",
        className: " w-[27px] mx-auto h-[40px]",
      }),
    ],
  });
}
