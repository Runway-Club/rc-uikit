import { EventEmitter } from '../../stencil-public-runtime';
export declare class RwTab {
  type: string;
  text: string;
  custom: boolean;
  buttonclick: EventEmitter<any>;
  onHandleClickEvent(ev: any): void;
  render(): any;
}
