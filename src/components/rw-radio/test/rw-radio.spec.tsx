import { newSpecPage } from '@stencil/core/testing';
import { RwRadio } from '../rw-radio';

describe('rw-radio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RwRadio],
      html: `<rw-radio></rw-radio>`,
    });
    expect(page.root).toEqualHtml(`
      <rw-radio>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rw-radio>
    `);
  });
});
