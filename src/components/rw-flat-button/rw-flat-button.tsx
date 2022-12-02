import { Component, h, Prop, Event, EventEmitter, Listen } from '@stencil/core';

@Component({
  tag: 'rw-flat-button',
  styleUrl: 'rw-flat-button.css',
  shadow: true,
})
export class RwFlatButton {
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
      flat: true,
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
