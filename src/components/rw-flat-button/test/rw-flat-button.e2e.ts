import { newE2EPage } from '@stencil/core/testing';

describe('rw-flat-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rw-flat-button></rw-flat-button>');

    const element = await page.find('rw-flat-button');
    expect(element).toHaveClass('hydrated');
  });
});
