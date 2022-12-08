import type { Components, JSX } from "../types/components";

interface RwCenter extends Components.RwCenter, HTMLElement {}
export const RwCenter: {
  prototype: RwCenter;
  new (): RwCenter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
