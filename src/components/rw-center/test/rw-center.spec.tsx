import { newSpecPage } from '@stencil/core/testing';
import { RwCenter } from '../rw-center';

describe('rw-center', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RwCenter],
      html: `<rw-center></rw-center>`,
    });
    expect(page.root).toEqualHtml(`
      <rw-center>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rw-center>
    `);
  });
});
