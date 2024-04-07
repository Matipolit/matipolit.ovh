window.addEventListener("load", (_) => {
  const shinyList = document.querySelectorAll(".shiny");
   for (let i = 0; i < shinyList.length; i++) {    
    const shinyElement = shinyList[i];
    shinyElement.addEventListener("mousemove", (event) => {
      const { x, y } = shinyElement.getBoundingClientRect();
      shinyElement.style.setProperty("--x", event.clientX - x);
      shinyElement.style.setProperty("--y", event.clientY - y);
    });
  }
});

