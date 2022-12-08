import { r as registerInstance, h } from './index-471923a8.js';

const rwPaddingCss = "";

const RwPadding = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.padding = '5px';
  }
  render() {
    return (h("div", { style: { padding: this.padding } }, h("slot", null)));
  }
};
RwPadding.style = rwPaddingCss;

export { RwPadding as rw_padding };
