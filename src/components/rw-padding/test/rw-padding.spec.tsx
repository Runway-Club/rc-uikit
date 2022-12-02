import { newSpecPage } from '@stencil/core/testing';
import { RwPadding } from '../rw-padding';

describe('rw-padding', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RwPadding],
      html: `<rw-padding></rw-padding>`,
    });
    expect(page.root).toEqualHtml(`
      <rw-padding>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rw-padding>
    `);
  });
});
