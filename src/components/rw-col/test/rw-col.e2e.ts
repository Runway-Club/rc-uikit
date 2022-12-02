import { newE2EPage } from '@stencil/core/testing';

describe('rw-col', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rw-col></rw-col>');

    const element = await page.find('rw-col');
    expect(element).toHaveClass('hydrated');
  });
});
