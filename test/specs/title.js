import '../helpers/common';

describe('title', () => {
  before(() => {
    return browser.url('http://localhost:9000');
  });

  it('has the expected page title', () => {
    return browser.getTitle().should.eventually.equal('Sretno Srce');
  });
});
