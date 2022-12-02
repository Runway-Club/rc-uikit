import { Component, Event, EventEmitter, h, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'rw-elevated-button',
  styleUrl: 'rw-elevated-button.css',
  shadow: true,
})
export class RwElevatedButton {
  @Prop() type: string;
  @Prop() text: string;
  @Prop() custom: boolean;

  @Event() buttonclick: EventEmitter<any>;

  @Listen('click')
  onHandleClickEvent(ev) {
    this.buttonclick.emit({ sender: this, event: ev });
  }

  render() {
    let styleClasses = {
      elevated: true,
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
