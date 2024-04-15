export function Loginpage() {
  const divContainer = document.createElement("div");
  divContainer.classList.add(
    "flex",
    "flex-col",
    "sm:w-full",
    "sm:h-screen",
    "relative"
  );
  const logo = document.createElement("img");
  logo.src = "./src/assets/image/logo-black.png";
  logo.classList.add("w-[54px]", "h-[81px]", "mx-auto", "mt-[132px]");
  const text = document.createElement("h4");
  text.innerText = "Login to Your Account";
  text.classList.add("mx-auto", "mt-[50px]", "font-semibold", "text-2xl");

  const divٍEmail = document.createElement("div");
  divٍEmail.classList.add(
    "items-center",
    "px-2",
    "mt-[30px]",
    "rounded-md",
    "flex",
    "sm:w-[380px]",
    "mx-auto",
    "bg-gray-100",
    "h-[37px]",
    "justify-items-start",
    "gap-2"
  );
  const imgEmail = document.createElement("img");
  imgEmail.src = "./src/assets/image/Email.svg";
  const inputEmail = document.createElement("input");
  inputEmail.setAttribute("type", "email");
  inputEmail.setAttribute("placeholder", "Email");
  inputEmail.classList.add(
    "rounded-md",
    "bg-gray-100",
    "mx-auto",
    "w-[350px]",
    "h-[37px]"
  );
  divٍEmail.append(imgEmail, inputEmail);

  const divٍPass = document.createElement("div");
  divٍPass.classList.add(
    "items-center",
    "px-2",
    "mt-[20px]",
    "rounded-md",
    "flex",
    "sm:w-[380px]",
    "mx-auto",
    "bg-gray-100",
    "h-[37px]",
    "justify-items-start",
    "gap-2"
  );
  const imgpass = document.createElement("img");
  imgpass.src = "./src/assets/image/lock.svg";
  const inputpass = document.createElement("input");
  inputpass.setAttribute("type", "text");
  inputpass.setAttribute("placeholder", "Password");
  inputpass.classList.add(
    "rounded-md",
    "bg-gray-100",
    "mx-auto",
    "w-[350px]",
    "h-[37px]"
  );
  divٍPass.append(imgpass, inputpass);

  const divCheckBox = document.createElement("div");
  divCheckBox.classList.add(
    "flex",
    "gap-1",
    "mx-auto",
    "mt-[30px]",
    "items-center"
  );
  const imgBox = document.createElement("img");
  imgBox.src = "./src/assets/image/checkbox.svg";
  const textBox = document.createElement("p");
  textBox.innerText = "Remember me";
  divCheckBox.append(imgBox, textBox);

  const btn = document.createElement("button");
  btn.innerText = "Sign in";
  btn.classList.add(
    "w-[95vw]",
    "bg-gray-500",
    "mt-[50px]",
    "text-white",
    "rounded-full",
    "h-[40px]",
    "mx-auto",
    "text-center",
    "items-center"
  );

  divContainer.append(logo, text, divٍEmail, divٍPass, divCheckBox, btn);
  return divContainer;
}
