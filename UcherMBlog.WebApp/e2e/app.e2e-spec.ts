import { UchermBlogPage } from './app.po';

describe('ucherm-blog App', () => {
  let page: UchermBlogPage;

  beforeEach(() => {
    page = new UchermBlogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
