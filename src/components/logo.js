export function Logo(){
    document.getElementById("app").style.fontFamily = "Inter";
  return El({
    element: "div",
    className:
      "flex justify-center border-none mx-auto gap-2 h-[63px] w-[231px] mt-[394px] ",
    children: [
      El({
        element: "div",
        className:
          " border-none rounded-full bg-black flex items-center justify-center h-[59px] w-[59px]",
        children: [
          El({
            element: "img",
            src: "./src/assets/image/logo.png",
            className: " w-[27px] mx-auto h-[40px]",
          }),
        ],
      }),
      El({
        element: "h4",
        className: "font-semibold	self-center font-bold	text-5xl/[63px]",
        innerText: "Shoea",
      }),
    ],
  });
}