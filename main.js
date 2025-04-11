import { parcelPluginsInfo } from "./modules/text";
import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const textElements = document.querySelectorAll("[parcelInfo]");
  let index = 0;
  const interval = 30000;
  const animationDuration = 250;

  function updateText() {
    textElements.forEach((p) => {
      p.classList.add("fade-out");

      setTimeout(() => {
        p.textContent = parcelPluginsInfo[index % parcelPluginsInfo.length].description;
        p.classList.remove("fade-out");
        index = (index + 1) % parcelPluginsInfo.length;
      }, animationDuration);
    });
  }

  updateText();
  setInterval(updateText, interval);
});
