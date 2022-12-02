import { newE2EPage } from '@stencil/core/testing';

describe('rw-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rw-container></rw-container>');

    const element = await page.find('rw-container');
    expect(element).toHaveClass('hydrated');
  });
});
