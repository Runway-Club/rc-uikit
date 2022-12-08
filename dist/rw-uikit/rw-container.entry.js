import { r as registerInstance, h } from './index-471923a8.js';

const rwContainerCss = ".elevated{box-shadow:var(--main-shadow);background-color:var(--color-base);padding:var(--padding-standard);font-family:var(--font-family);display:inline-block}.rounded{border-radius:var(--border-md)}";

const RwContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.width = '';
    this.height = '';
    this.type = 'elevated';
    this.color = 'base';
    this.rounded = true;
  }
  render() {
    let styleClasses = {
      elevated: this.type === 'elevated',
      outlined: this.type === 'outlined',
      flat: this.type === 'flat',
      primary: this.color === 'primary',
      base: this.color === 'base' || !this.color,
      success: this.color === 'success',
      warn: this.color === 'warn',
      danger: this.color === 'danger',
      black: this.color === 'black',
      rounded: this.rounded,
    };
    return (h("div", { class: styleClasses, style: { width: this.width, height: this.height } }, h("slot", null)));
  }
};
RwContainer.style = rwContainerCss;

export { RwContainer as rw_container };
