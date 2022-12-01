import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'rw-outlined-button',
  styleUrl: 'rw-outlined-button.css',
  shadow: true,
})
export class RwOutlinedButton {
  @Prop() type: string;
  @Prop() text: string;
  @Prop() custom: boolean;

  // @Listen('click')
  // onHandleClickEvent(ev) {}

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
    return (
      <button part="core" class={styleClasses}>
        {this.custom ? <slot /> : this.text}
      </button>
    );
  }
}
