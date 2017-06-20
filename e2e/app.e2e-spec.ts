import { DomoboxPage } from './app.po';

describe('domobox App', () => {
  let page: DomoboxPage;

  beforeEach(() => {
    page = new DomoboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
