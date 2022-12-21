import { newE2EPage } from '@stencil/core/testing';

describe('rw-radio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rw-radio></rw-radio>');

    const element = await page.find('rw-radio');
    expect(element).toHaveClass('hydrated');
  });
});
