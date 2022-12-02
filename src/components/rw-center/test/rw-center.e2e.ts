import { newE2EPage } from '@stencil/core/testing';

describe('rw-center', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rw-center></rw-center>');

    const element = await page.find('rw-center');
    expect(element).toHaveClass('hydrated');
  });
});
