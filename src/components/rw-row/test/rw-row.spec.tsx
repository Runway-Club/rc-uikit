import { newSpecPage } from '@stencil/core/testing';
import { RwRow } from '../rw-row';

describe('rw-row', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RwRow],
      html: `<rw-row></rw-row>`,
    });
    expect(page.root).toEqualHtml(`
      <rw-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rw-row>
    `);
  });
});
