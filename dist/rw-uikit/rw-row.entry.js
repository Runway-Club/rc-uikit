import { r as registerInstance, h } from './index-471923a8.js';

const rwRowCss = ".row{display:flex;flex-direction:row;width:100%}.centered{display:flex;justify-content:center;align-items:center}.stretch{display:flex;align-items:stretch;}.rtl{flex-direction:row-reverse}";

const RwRow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.centered = false;
    this.stretch = false;
    this.rtl = false;
  }
  render() {
    var styleClasses = {
      centered: this.centered,
      stretch: this.stretch,
      row: true,
      rtl: this.rtl,
    };
    return (h("div", { class: styleClasses }, h("slot", null)));
  }
};
RwRow.style = rwRowCss;

export { RwRow as rw_row };
