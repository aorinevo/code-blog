import { CodeBlogPage } from './app.po';

describe('code-blog App', function() {
  let page: CodeBlogPage;

  beforeEach(() => {
    page = new CodeBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ancb works!');
  });
});
