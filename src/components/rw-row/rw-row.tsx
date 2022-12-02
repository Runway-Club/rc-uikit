import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'rw-row',
  styleUrl: 'rw-row.css',
  shadow: true,
})
export class RwRow {
  @Prop() centered = false;
  @Prop() stretch = false;
  @Prop() rtl: boolean = false;

  render() {
    var styleClasses = {
      centered: this.centered,
      stretch: this.stretch,
      row: true,
      rtl: this.rtl,
    };
    return (
      <div class={styleClasses}>
        <slot></slot>
      </div>
    );
  }
}
