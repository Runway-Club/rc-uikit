import { newSpecPage } from '@stencil/core/testing';
import { RwElevatedButton } from '../rw-elevated-button';

describe('rw-elevated-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RwElevatedButton],
      html: `<rw-elevated-button></rw-elevated-button>`,
    });
    expect(page.root).toEqualHtml(`
      <rw-elevated-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rw-elevated-button>
    `);
  });
});
