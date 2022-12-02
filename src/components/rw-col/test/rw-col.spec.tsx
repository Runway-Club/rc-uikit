import { newSpecPage } from '@stencil/core/testing';
import { RwCol } from '../rw-col';

describe('rw-col', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RwCol],
      html: `<rw-col></rw-col>`,
    });
    expect(page.root).toEqualHtml(`
      <rw-col>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rw-col>
    `);
  });
});
