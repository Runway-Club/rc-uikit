import { Component, h, Prop, Event, EventEmitter, State, Listen } from '@stencil/core';

@Component({
  tag: 'rw-checkbox',
  styleUrl: 'rw-checkbox.css',
  shadow: true,
})
export class RwCheckbox {
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
    if (RwCheckbox.groups[this.groupname] != undefined) {
      RwCheckbox.groups[this.groupname]();
      RwCheckbox.groups[this.groupname] = this.unCheck.bind(this);
    }
    this.checked = !this.checked;
  }

  render() {
    return (
      <div class="container">
        {this.checked ?
          <div class="checked">
            <span class="material-symbols-outlined">
              done
            </span>
          </div>
          :
          <div class="unChecked">
          </div>
        }
        <div>{this.text}</div>
      </div>
    );
  }

}
