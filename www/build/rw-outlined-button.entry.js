import { r as registerInstance, e as createEvent, h } from './index-471923a8.js';

const rwOutlinedButtonCss = ".outlined{border-radius:var(--border-sm);outline:none;border:none;font-size:var(--base-text-size);font-family:var(--font-family);padding:var(--padding-standard);background-color:var(--color-base)}.outlined:active{outline:none}.primary{background-color:var(--color-base);color:var(--color-primary);outline:2px solid var(--color-primary)}.primary:hover{background-color:var(--color-primary);color:var(--color-base)}.success{background-color:var(--color-success);color:var(--color-base)}.success:hover{background-color:var(--color-base);color:var(--color-success)}.success:active{background-color:var(--color-success);color:var(--color-base)}.warn{background-color:var(--color-warn);color:var(--color-base)}.warn:hover{background-color:var(--color-base);color:var(--color-warn)}.warn:active{background-color:var(--color-warn);color:var(--color-base)}.danger{background-color:var(--color-danger);color:var(--color-base)}.danger:hover{background-color:var(--color-base);color:var(--color-danger)}.danger:active{background-color:var(--color-danger);color:var(--color-base)}.base{background-color:var(--color-base);color:var(--color-black)}.base:hover{background-color:var(--color-black);color:var(--color-base)}.base:active{background-color:var(--color-base);color:var(--color-black)}.black{background-color:var(--color-black);color:var(--color-base)}.black:hover{background-color:var(--color-base);color:var(--color-black)}.black:active{background-color:var(--color-black);color:var(--color-base)}";

const RwOutlinedButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.buttonclick = createEvent(this, "buttonclick", 7);
    this.type = undefined;
    this.text = undefined;
    this.custom = undefined;
  }
  onHandleClickEvent(ev) {
    this.buttonclick.emit({ sender: this, event: ev });
  }
  render() {
    let styleClasses = {
      outlined: true,
      primary: this.type === 'primary',
      base: this.type === 'base' || !this.type,
      success: this.type === 'success',
      warn: this.type === 'warn',
      danger: this.type === 'danger',
      black: this.type === 'black',
    };
    console.log(this.type);
    console.log(this.custom);
    return (h("button", { part: "core", class: styleClasses }, this.custom ? h("slot", null) : this.text));
  }
};
RwOutlinedButton.style = rwOutlinedButtonCss;

export { RwOutlinedButton as rw_outlined_button };
