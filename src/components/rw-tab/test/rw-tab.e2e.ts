import { newE2EPage } from '@stencil/core/testing';

describe('rw-tab', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rw-tab></rw-tab>');

    const element = await page.find('rw-tab');
    expect(element).toHaveClass('hydrated');
  });
});
