/* eslint-disable prefer-const */
import React from 'react';
import * as Redux from 'react-redux';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import CardList from './CardList';

describe('CardList Component tests', () => {
  let wrapper;
  let store;
  let useEffect;

  const INITIAL_STATE = {
    modal: {
      showModal: false,
      modalData: {
        modalType: '',
        modalProps: {},
      },
    },
    data: {
      loadingData: false,
      gnomeNameSearchField: '',
      professionSearchField: '',
      gnomesData: [],
      error: '',
    },
  };

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };

  store = configureStore([])(INITIAL_STATE);

  useEffect = jest.spyOn(React, 'useEffect');

  jest.spyOn(Redux, 'useDispatch').mockImplementation(() => store.dispatch);

  test('expect CardList to match shallow snapshot', () => {
    const mockProps = {
      items: [],
      loading: false,
    };

    wrapper = shallow(<CardList {...mockProps} store={store} />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('CardList rendering Skeletons', () => {
    test('expect CardList to render 4 CardSkeletons when items is empty array', () => {
      const mockProps = {
        items: [],
        loading: false,
      };

      wrapper = shallow(<CardList {...mockProps} store={store} />);

      const cardSkeletons = wrapper.find('CardSkeleton');
      expect(cardSkeletons).toHaveLength(4);
    });

    test('expect CardList to render 4 CardSkeletons when height is not set', () => {
      const mockProps = {
        items: [
          {
            name: 'John',
            thumbnail: 'placeholder.com',
            id: 1,
          },
        ],
        loading: false,
      };
      wrapper = shallow(<CardList {...mockProps} store={store} />);

      const cardSkeletons = wrapper.find('CardSkeleton');
      expect(cardSkeletons).toHaveLength(4);
    });
  });

  describe('CardList rendering Cards', () => {
    test('expect CardList to have one Card Component with height 125', () => {
      global.innerWidth = 500;
      global.dispatchEvent(new Event('resize'));

      mockUseEffect();
      mockUseEffect();

      const mockProps = {
        items: [
          {
            name: 'John',
            thumbnail: 'placeholder.com',
            id: 1,
          },
        ],
        loading: false,
      };
      wrapper = shallow(<CardList {...mockProps} store={store} />);

      const card = wrapper.find('Card');
      expect(card).toHaveLength(1);
      expect(card.prop('height')).toEqual(125);
    });

    test('expect CardList to have one Card Component with height 250', () => {
      global.innerWidth = 1200;
      global.dispatchEvent(new Event('resize'));

      mockUseEffect();
      mockUseEffect();

      const mockProps = {
        items: [
          {
            name: 'John',
            thumbnail: 'placeholder.com',
            id: 1,
          },
        ],
        loading: false,
      };
      wrapper = shallow(<CardList {...mockProps} store={store} />);

      const card = wrapper.find('Card');
      expect(card).toHaveLength(1);
      expect(card.prop('height')).toEqual(250);
    });

    test('expect CardList to have one Card Component with height 200', () => {
      global.innerWidth = 800;
      global.dispatchEvent(new Event('resize'));

      mockUseEffect();
      mockUseEffect();

      const mockProps = {
        items: [
          {
            name: 'John',
            thumbnail: 'placeholder.com',
            id: 1,
          },
        ],
        loading: false,
      };
      wrapper = shallow(<CardList {...mockProps} store={store} />);

      const card = wrapper.find('Card');
      expect(card).toHaveLength(1);
      expect(card.prop('height')).toEqual(200);
    });

    test('expect CardList to dispatch proper action on click', () => {
      global.innerWidth = 500;
      global.dispatchEvent(new Event('resize'));

      mockUseEffect();
      mockUseEffect();

      const mockProps = {
        items: [
          {
            name: 'John',
            thumbnail: 'placeholder.com',
            id: 1,
          },
        ],
        loading: false,
      };
      wrapper = shallow(<CardList {...mockProps} store={store} />);

      const card = wrapper.find('Card');
      card.simulate('click');
      const actions = store.getActions();
      expect(actions).toEqual([
        {
          payload: {
            modalProps: { id: 1, name: 'John', thumbnail: 'placeholder.com' },
            modalType: 'USER_DETAIL',
          },
          type: 'OPEN_MODAL',
        },
      ]);
    });
  });
});
