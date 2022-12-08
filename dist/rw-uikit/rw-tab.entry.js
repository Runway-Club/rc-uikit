import { r as registerInstance, e as createEvent, h } from './index-471923a8.js';

const rwTabCss = ":host{display:block}.tab{width:160px;height:40px;font-size:var(--base-text-size);color:var(--color-base);border-radius:var(--border-lg);font-family:var(--font-family);font-weight:bold;padding:var(--padding-standard);outline:none;border:none}.tab:active{outline:none}.primary{background-color:var(--color-primary);color:var(--color-base)}.primary:hover{background-color:var(--color-base);color:var(--color-primary)}.primary:active{background-color:var(--color-primary);color:var(--color-base)}.success{background-color:var(--color-success);color:var(--color-base)}.success:hover{background-color:var(--color-base);color:var(--color-success)}.success:active{background-color:var(--color-success);color:var(--color-base)}.base{background-color:var(--color-base);color:var(--color-primary)}.base:hover{background-color:var(--color-black);color:var(--color-base);border-color:var(--color-black)}.base:active{background-color:var(--color-base);color:var(--color-primary)}.warn{background-color:var(--color-warn);color:var(--color-base)}.warn:hover{background-color:var(--color-base);color:var(--color-warn)}.warn:active{background-color:var(--color-warn);color:var(--color-base)}.danger{background-color:var(--color-danger);color:var(--color-base)}.danger:hover{background-color:var(--color-base);color:var(--color-danger)}.danger:active{background-color:var(--color-danger);color:var(--color-base)}.black{background-color:var(--color-black);color:var(--color-base)}.black:hover{background-color:var(--color-base);color:var(--color-black)}.black:active{background-color:var(--color-black);color:var(--color-base)}";

const RwTab = class {
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
      tab: true,
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
RwTab.style = rwTabCss;

export { RwTab as rw_tab };
