import { CodeBlogPage } from './app.po';

describe('code-blog App', () => {
  let page: CodeBlogPage;

  beforeEach(() => {
    page = new CodeBlogPage();
  });

  xit('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
