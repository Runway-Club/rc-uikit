import { Component, h, Prop, EventEmitter, Event, Listen, State } from '@stencil/core';

@Component({
  tag: 'rw-radio',
  styleUrl: 'rw-radio.css',
  shadow: true,
})
export class RwRadio {
  @Prop() text: string;
  @Prop() custom: boolean;
  @Prop() groupname: string;

  @Event() buttonclick: EventEmitter<any>;

  @State() checked: boolean = false;

  private static groups = {};

  public unCheck() {
    this.checked = false;
  }

  @Listen('click')
  onHandleClickEvent() {
    if (this.checked) { return; }
    if (RwRadio.groups[this.groupname] != undefined) {
      RwRadio.groups[this.groupname]();
    }
    RwRadio.groups[this.groupname] = this.unCheck.bind(this);
    this.checked = true;
  }

  render() {
    let styleContainer = {
      container: true,
    }
    let styleRadio = {
      radio: true,
    }
    let styleChecked = {
      checked: true,
    }
    let styleText = {
      text: true,
    }
    return (
      <div class={styleContainer}>
        {this.checked ? <div class={styleRadio}><div class={styleChecked}></div></div> : <div class={styleRadio}></div>}
        <div class={styleText}>{this.text}</div>
      </div>
    );
  }
}

