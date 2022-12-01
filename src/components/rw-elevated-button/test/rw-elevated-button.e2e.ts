import { newE2EPage } from '@stencil/core/testing';

describe('rw-elevated-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rw-elevated-button></rw-elevated-button>');

    const element = await page.find('rw-elevated-button');
    expect(element).toHaveClass('hydrated');
  });
});
