import { browser, element, by } from 'protractor';

export class CodeBlogPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ancb-root h1')).getText();
  }
}
