import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  describe('render()', () => {
    it('renders the app', () => {
      expect(wrapper.find({ 'data-testid': 'userTable' })).toHaveLength(1);
      expect(wrapper.find({ 'data-testid': 'projectTable' })).toHaveLength(1);
    });
  });
});