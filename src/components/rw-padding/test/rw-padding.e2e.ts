import { newE2EPage } from '@stencil/core/testing';

describe('rw-padding', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rw-padding></rw-padding>');

    const element = await page.find('rw-padding');
    expect(element).toHaveClass('hydrated');
  });
});
