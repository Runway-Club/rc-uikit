import { newE2EPage } from '@stencil/core/testing';

describe('rw-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rw-row></rw-row>');

    const element = await page.find('rw-row');
    expect(element).toHaveClass('hydrated');
  });
});
