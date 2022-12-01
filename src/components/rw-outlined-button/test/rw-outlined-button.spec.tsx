import { newSpecPage } from '@stencil/core/testing';
import { RwOutlinedButton } from '../rw-outlined-button';

describe('rw-outlined-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RwOutlinedButton],
      html: `<rw-outlined-button></rw-outlined-button>`,
    });
    expect(page.root).toEqualHtml(`
      <rw-outlined-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rw-outlined-button>
    `);
  });
});
