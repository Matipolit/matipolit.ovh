window.addEventListener("load", (_) => {
  const themeForm = document.getElementById("themeForm");
  const catppuccinRadio = document.getElementById("themeRadioCatppuccin");
  const gruvboxRadio = document.getElementById("themeRadioGruvbox");

  const themeButton = document.getElementById("themeButton");
  const themeSettings = document.getElementById("themeSettings");

  const shinyList = document.querySelectorAll(".shiny");

  const cookies = document.cookie;

  const theme = "catppuccin";
  if (cookies.includes("theme")) {
    theme = cookies.split("theme=")[1].split(";")[0];
  }

  console.log("Theme: " + theme);
  setTheme(theme);

  if (theme == "catppuccin") {
    catppuccinRadio.checked = true;
  } else {
    gruvboxRadio.checked = true;
  }

  for (let i = 0; i < shinyList.length; i++) {
    const shinyElement = shinyList[i];
    shinyElement.addEventListener("mousemove", (event) => {
      const { x, y } = shinyElement.getBoundingClientRect();
      shinyElement.style.setProperty("--x", event.clientX - x);
      shinyElement.style.setProperty("--y", event.clientY - y);
    });
  }

  let visible = false;

  themeButton.addEventListener("click", (event) => {
    if (visible) {
      themeSettings.style.visibility = "hidden";
      visible = false;
    } else {
      themeSettings.style.visibility = "visible";
      visible = true;
    }
  });

  themeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(themeForm);
    setTheme(formData.get("theme"));
  });
});

function setTheme(themeName) {
  const root = document.querySelector(":root");
  const d = new Date();
  d.setTime(d.getTime() + 100 * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();

  if (themeName === "catppuccin") {
    document.cookie = "theme=catppuccin;" + expires + ";SameSite=Strict";
    root.style.setProperty("--color-dark", "#cad3f5");
    root.style.setProperty("--bg-color-dark", "#24273a");
    root.style.setProperty("--link-color-dark", "#f0c6c6");
    root.style.setProperty("--link-hover-color-dark", "#8aadf4");
    root.style.setProperty("--shiny-color-dark", "#5b607866");
    root.style.setProperty("--card-background-color-dark", "#363a4f");
    root.style.setProperty("--border-color-dark", "#6e738d");

    root.style.setProperty("--color", "#4c4f69");
    root.style.setProperty("--background-color", "#eff1f5");
    root.style.setProperty("--link-color", "#7287fd");
    root.style.setProperty("--link-hover-color", "#1e66f5");
    root.style.setProperty("--card-background-color", "#ccd0da");
    root.style.setProperty("--border-color", "#9ca0b0");
    root.style.setProperty("--shiny-color", "#7c7f9366");
  } else if (themeName === "gruvbox") {
    document.cookie = "theme=gruvbox;" + expires + ";SameSite=Strict";
    root.style.setProperty("--color-dark", "#ebdbb2"); // Light beige
    root.style.setProperty("--bg-color-dark", "#282828"); // Dark gray
    root.style.setProperty("--link-color-dark", "#85a598"); // Blue
    root.style.setProperty("--link-hover-color-dark", "#fabd2f"); // Yellow
    root.style.setProperty("--shiny-color-dark", "#92837466"); // Transparent gray
    root.style.setProperty("--card-background-color-dark", "#3c3836"); // Dark brownish gray
    root.style.setProperty("--border-color-dark", "#665c54"); // Medium brownish gray

    root.style.setProperty("--color", "#3c3836"); // Dark brown
    root.style.setProperty("--background-color", "#fbf1c7"); // Light yellowish beige
    root.style.setProperty("--link-color", "#d65d0e"); // Orange
    root.style.setProperty("--link-hover-color", "#b57614"); // Darker orange
    root.style.setProperty("--card-background-color", "#d5c4a1"); // Beige
    root.style.setProperty("--border-color", "#bdae93"); // Medium beige
    root.style.setProperty("--shiny-color", "#a8998466"); // Transparent beige
  }
}
