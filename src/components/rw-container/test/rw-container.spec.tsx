import { newSpecPage } from '@stencil/core/testing';
import { RwContainer } from '../rw-container';

describe('rw-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RwContainer],
      html: `<rw-container></rw-container>`,
    });
    expect(page.root).toEqualHtml(`
      <rw-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rw-container>
    `);
  });
});
