import type { Components, JSX } from "../types/components";

interface RwPadding extends Components.RwPadding, HTMLElement {}
export const RwPadding: {
  prototype: RwPadding;
  new (): RwPadding;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
