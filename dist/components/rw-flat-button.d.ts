import type { Components, JSX } from "../types/components";

interface RwFlatButton extends Components.RwFlatButton, HTMLElement {}
export const RwFlatButton: {
  prototype: RwFlatButton;
  new (): RwFlatButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
