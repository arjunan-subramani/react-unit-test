import React from 'react';
import renderer from 'react-test-renderer';
import Title from '../Title';

describe("Title Component", () => {
  it('should render the component correctly', () => {
    const tree = renderer.create(<Title text="Employees Information" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
