export function ChangePage(page) {
    const app = document.getElementById("app");
    app.innerHTML = "";
    app.appendChild(page());
  }