import { MyAngularPage } from './app.po';

describe('my-angular App', function() {
  let page: MyAngularPage;

  beforeEach(() => {
    page = new MyAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
