import { newSpecPage } from '@stencil/core/testing';
import { RwTab } from '../rw-tab';

describe('rw-tab', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RwTab],
      html: `<rw-tab></rw-tab>`,
    });
    expect(page.root).toEqualHtml(`
      <rw-tab>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rw-tab>
    `);
  });
});
