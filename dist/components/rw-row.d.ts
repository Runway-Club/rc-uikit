import type { Components, JSX } from "../types/components";

interface RwRow extends Components.RwRow, HTMLElement {}
export const RwRow: {
  prototype: RwRow;
  new (): RwRow;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
