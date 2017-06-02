import { PeerReviewPage } from './app.po';

describe('peer-review App', () => {
  let page: PeerReviewPage;

  beforeEach(() => {
    page = new PeerReviewPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
