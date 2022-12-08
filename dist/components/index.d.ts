/* RwUikit custom elements */
export { RwCenter as RwCenter } from '../types/components/rw-center/rw-center';
export { RwCol as RwCol } from '../types/components/rw-col/rw-col';
export { RwContainer as RwContainer } from '../types/components/rw-container/rw-container';
export { RwElevatedButton as RwElevatedButton } from '../types/components/rw-elevated-button/rw-elevated-button';
export { RwFlatButton as RwFlatButton } from '../types/components/rw-flat-button/rw-flat-button';
export { RwOutlinedButton as RwOutlinedButton } from '../types/components/rw-outlined-button/rw-outlined-button';
export { RwPadding as RwPadding } from '../types/components/rw-padding/rw-padding';
export { RwRow as RwRow } from '../types/components/rw-row/rw-row';
export { RwTab as RwTab } from '../types/components/rw-tab/rw-tab';

/**
 * Used to manually set the base path where assets can be found.
 * If the script is used as "module", it's recommended to use "import.meta.url",
 * such as "setAssetPath(import.meta.url)". Other options include
 * "setAssetPath(document.currentScript.src)", or using a bundler's replace plugin to
 * dynamically set the path at build time, such as "setAssetPath(process.env.ASSET_PATH)".
 * But do note that this configuration depends on how your script is bundled, or lack of
 * bundling, and where your assets can be loaded from. Additionally custom bundling
 * will have to ensure the static assets are copied to its build directory.
 */
export declare const setAssetPath: (path: string) => void;

export interface SetPlatformOptions {
  raf?: (c: FrameRequestCallback) => number;
  ael?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
  rel?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
}
export declare const setPlatformOptions: (opts: SetPlatformOptions) => void;
export * from '../types';
