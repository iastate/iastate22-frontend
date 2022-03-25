import MicroModal from "micromodal";

export class Modal {
  private element: HTMLElement;
  private triggers: NodeListOf<HTMLElement>;

  constructor(element: HTMLElement) {
    if (!!element) {
      this.element = element;
      this.triggers = document.querySelectorAll(`[data-micromodal-trigger="${this.element.id}"]`);
      this.init();
    }
  }

  private init() {
    this.moveModalToBottomOfBody();
    this.handleTriggerClicks();
  }

  private moveModalToBottomOfBody() {
    document.body.appendChild(this.element);
  }

  private handleTriggerClicks() {
    for (let i = 0; i < this.triggers.length; i++) {
      this.triggers[i].addEventListener("click", (e) => e.preventDefault());
    }
  }
}

export default function modalsInit() {
  const modals = document.querySelectorAll(".iastate22-modal") as NodeListOf<HTMLElement>;
  for (let i = 0; i < modals.length; i++) {
    new Modal(modals[i]);
  }
  MicroModal.init();
}
