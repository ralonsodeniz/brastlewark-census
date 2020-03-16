import React from 'react';
import { shallow, render } from 'enzyme';

import Card from './Card';
import { CardContainer } from './Card.styles';

describe('Card Component tests', () => {
  let wrapper;
  const mockCallBack = jest.fn();

  beforeEach(() => {
    const mockProps = {
      name: '',
      imageUrl: '',
      height: 0,
      onClick: mockCallBack,
    };

    wrapper = shallow(<Card {...mockProps} />);
  });

  test('expect Card to match shallow snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('expect CardContainer to match render snapshot to check styles', () => {
    expect(render(<CardContainer />)).toMatchSnapshot();
  });

  test('expect Card to executes on click the function passed as props', () => {
    wrapper.find(CardContainer).simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
