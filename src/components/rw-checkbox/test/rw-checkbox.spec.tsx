import { newSpecPage } from '@stencil/core/testing';
import { RwCheckbox } from '../rw-checkbox';

describe('rw-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RwCheckbox],
      html: `<rw-checkbox></rw-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <rw-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rw-checkbox>
    `);
  });
});
