import { Collapse } from "bootstrap";

export default class BootstrapUtils {
  public static init() {
    this.initCollapse();
  }

  private static initCollapse() {
    const collapseEls = document.querySelectorAll(".collapse");
    console.log(Collapse);
    for (let i = 0; i < collapseEls.length; i++) {
      return new Collapse(collapseEls[i]);
    }
  }
}
