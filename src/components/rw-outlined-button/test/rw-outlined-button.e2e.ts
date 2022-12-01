import { newE2EPage } from '@stencil/core/testing';

describe('rw-outlined-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rw-outlined-button></rw-outlined-button>');

    const element = await page.find('rw-outlined-button');
    expect(element).toHaveClass('hydrated');
  });
});
