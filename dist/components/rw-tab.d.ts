import type { Components, JSX } from "../types/components";

interface RwTab extends Components.RwTab, HTMLElement {}
export const RwTab: {
  prototype: RwTab;
  new (): RwTab;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
