import { r as registerInstance, h } from './index-471923a8.js';

const rwColCss = ".col{display:flex;flex-direction:column;width:100%}.stretch{display:flex;justify-content:stretch;align-items:stretch}";

const RwCol = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    let styleClasses = {
      col: true,
    };
    return (h("div", { class: styleClasses }, h("slot", null)));
  }
};
RwCol.style = rwColCss;

export { RwCol as rw_col };
