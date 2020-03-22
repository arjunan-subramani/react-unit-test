import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../App';
import Title from '../Title';

let wrapper;

beforeEach(() => {
	// wrapper = shallow(<App />);
  wrapper = mount(<App />);
  // wrapper = render(<App />);
});

describe("App Component", () => {
  it('It should render Title Component Once', () => {
    expect(wrapper.find(Title)).toHaveLength(1);
  });

  it('should have one <h1> tag', () => {
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});
