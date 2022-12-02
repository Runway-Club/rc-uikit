import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'rw-padding',
  styleUrl: 'rw-padding.css',
  shadow: true,
})
export class RwPadding {
  @Prop()
  padding: string = '5px';

  render() {
    return (
      <div style={{ padding: this.padding }}>
        <slot></slot>
      </div>
    );
  }
}
