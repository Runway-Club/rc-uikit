import type { Components, JSX } from "../types/components";

interface RwContainer extends Components.RwContainer, HTMLElement {}
export const RwContainer: {
  prototype: RwContainer;
  new (): RwContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
