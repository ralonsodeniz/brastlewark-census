import React from 'react';
import { shallow } from 'enzyme';

import CardSkeleton from './CardSkeleton';

describe('CardSkeleton Component tests', () => {
  const wrapper = shallow(<CardSkeleton />);

  test('expect Card to match shallow snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
