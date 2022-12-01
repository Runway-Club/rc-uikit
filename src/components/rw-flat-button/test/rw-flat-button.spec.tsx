import { newSpecPage } from '@stencil/core/testing';
import { RwFlatButton } from '../rw-flat-button';

describe('rw-flat-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RwFlatButton],
      html: `<rw-flat-button></rw-flat-button>`,
    });
    expect(page.root).toEqualHtml(`
      <rw-flat-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rw-flat-button>
    `);
  });
});
