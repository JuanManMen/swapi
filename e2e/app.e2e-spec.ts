import { SwresourcePage } from './app.po';

describe('swresource App', () => {
  let page: SwresourcePage;

  beforeEach(() => {
    page = new SwresourcePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
