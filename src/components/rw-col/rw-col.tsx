import { Component, h } from '@stencil/core';

@Component({
  tag: 'rw-col',
  styleUrl: 'rw-col.css',
  shadow: true,
})
export class RwCol {
  render() {
    let styleClasses = {
      col: true,
    };
    return (
      <div class={styleClasses}>
        <slot></slot>
      </div>
    );
  }
}
