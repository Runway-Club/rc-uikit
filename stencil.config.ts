import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'rw-uikit',
  globalStyle: 'src/global/global.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: '@runway-club/rw-uikit',
      directivesProxyFile: '../ngx-rwc-uikit/projects/ngx-rwc-uikit/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../ngx-rwc-uikit/projects/ngx-rwc-uikit/src/lib/stencil-generated/index.ts',
    }),
  ],
};