import '../helpers/common';

describe('thanks', () => {
  describe('with email', () => {
    before(() => {
      return browser.url('http://localhost:9000/hvala/?email=true');
    });

    it('should contain expected text', () => {
      return browser.getText('p').then((text) => {
        text.length.should.equal(2);
        text[0].should.contain('Tvoje pitanje je poslano.');
        text[1].should.contain('Odgovor ćeš dobiti na email.');
      })
    });
  });

  describe('without email', () => {
    before(() => {
      return browser.url('http://localhost:9000/hvala/?email=false');
    });

    it('should contain expected text', () => {
      return browser.getText('p').then((text) => {
        text.length.should.equal(2);
        text[0].should.contain('Tvoje pitanje je poslano.');
        text[1].should.contain('čekati objavu odgovora.');
      })
    });
  });

  describe('default', () => {
    before(() => {
      return browser.url('http://localhost:9000/hvala/');
    });

    it('should contain expected text', () => {
      return browser.getText('p').then((text) => {
        text.length.should.equal(2);
        text[0].should.contain('Tvoje pitanje je poslano.');
        text[1].should.contain('čekati objavu odgovora.');
      })
    });
  });
});
