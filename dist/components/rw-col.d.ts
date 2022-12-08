import type { Components, JSX } from "../types/components";

interface RwCol extends Components.RwCol, HTMLElement {}
export const RwCol: {
  prototype: RwCol;
  new (): RwCol;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
