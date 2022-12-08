import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'rw-container',
  styleUrl: 'rw-container.css',
  shadow: true,
})
export class RwContainer {
  @Prop() width = '';
  @Prop() height = '';
  @Prop() type = 'elevated';
  @Prop() color = 'base';
  @Prop() rounded = true;

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
    return (
      <div class={styleClasses} style={{ width: this.width, height: this.height }}> 
        <slot></slot>
      </div>
    );
  }
}
