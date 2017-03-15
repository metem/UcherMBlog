import { UcherMBlog.WebAppPage } from './app.po';

describe('ucher-mblog.web-app App', () => {
  let page: UcherMBlog.WebAppPage;

  beforeEach(() => {
    page = new UcherMBlog.WebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
