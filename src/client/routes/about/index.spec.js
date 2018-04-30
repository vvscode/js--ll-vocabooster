import { equal } from 'assert';
import index from './index';

describe('About/index', () => {
  it('contains action', () => equal(typeof index, 'function'));
  it('action returns object', () => {
    const result = index();
    expect(result.title).toBeDefined();
    equal(typeof result.component, 'function');
  });
  it('action().componnet returns React.Component', () => {
    expect(index().component()).toMatchSnapshot();
  });
});
