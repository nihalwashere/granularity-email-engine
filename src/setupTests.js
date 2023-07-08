import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const currentPackageInfo = require('../package.json');

jest.doMock('../package.json', () => ({
  ...currentPackageInfo,
  version: '1.2.3',
}));
