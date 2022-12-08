import type { Components, JSX } from "../types/components";

interface RwOutlinedButton extends Components.RwOutlinedButton, HTMLElement {}
export const RwOutlinedButton: {
  prototype: RwOutlinedButton;
  new (): RwOutlinedButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
