import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'rw-center',
  styleUrl: 'rw-center.css',
  shadow: true,
})
export class RwCenter {
  @Prop() type: string = 'vertical';
  render() {
    let styleClasses = {
      verticalCenter: this.type === 'vertical' || !this.type,
      horizontalCenter: this.type === 'horizontal',
    };
    return (
      <div class={styleClasses}>
        <slot></slot>
      </div>
    );
  }
}
