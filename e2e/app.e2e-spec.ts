import { AngelAngularAppPage } from './app.po';

describe('angel-angular-app App', () => {
  let page: AngelAngularAppPage;

  beforeEach(() => {
    page = new AngelAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
