import '../helpers/common';

describe('facts', () => {
  before(() => {
    return browser.url('http://localhost:9000/');
  });

  it('displays a fact', () => {
    return browser.elements('.fact.visible').then((els) => {
      els.value.length.should.equal(1);
    });
  });
});
