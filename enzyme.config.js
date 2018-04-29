/* eslint-disable import/first */
import './tempPolyfills';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import 'babel-polyfill';
/* eslint-enable import/first */

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });
