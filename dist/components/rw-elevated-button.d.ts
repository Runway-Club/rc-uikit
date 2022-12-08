import type { Components, JSX } from "../types/components";

interface RwElevatedButton extends Components.RwElevatedButton, HTMLElement {}
export const RwElevatedButton: {
  prototype: RwElevatedButton;
  new (): RwElevatedButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
