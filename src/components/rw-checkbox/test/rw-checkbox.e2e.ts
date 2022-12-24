import { newE2EPage } from '@stencil/core/testing';

describe('rw-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rw-checkbox></rw-checkbox>');

    const element = await page.find('rw-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
