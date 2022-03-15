import MicroModal from "micromodal";

function modalTriggers() {
  const triggers = document.querySelectorAll("[data-micromodal-trigger]");
  for (let i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener("click", (e) => e.preventDefault());
  }
}

modalTriggers();

export default MicroModal;
