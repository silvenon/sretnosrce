import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.should();
chai.use(chaiAsPromised);

chaiAsPromised.transferPromiseness = browser.transferPromiseness;
