import { r as registerInstance, h } from './index-471923a8.js';

const rwCenterCss = ".verticalCenter{position:absolute;top:50%;transform:translateY(-50%);width:100%}.horizontalCenter{position:absolute;left:50%;transform:translateX(-50%);height:100%}";

const RwCenter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.type = 'vertical';
  }
  render() {
    let styleClasses = {
      verticalCenter: this.type === 'vertical' || !this.type,
      horizontalCenter: this.type === 'horizontal',
    };
    return (h("div", { class: styleClasses }, h("slot", null)));
  }
};
RwCenter.style = rwCenterCss;

export { RwCenter as rw_center };
