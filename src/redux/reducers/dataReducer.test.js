import DATA from '../types/dataTypes';
import dataReducer from './dataReducer';

describe('Data reducer', () => {
  const INITIAL_STATE = {
    loadingData: false,
    gnomeNameSearchField: '',
    professionSearchField: '',
    gnomesData: [],
    error: '',
  };

  test('should return the initial state when undefined', () => {
    expect(dataReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  test('should set loadingData to true', () => {
    expect(
      dataReducer(INITIAL_STATE, {
        type: DATA.TOGGLE_DATA_LOADING,
        payload: true,
      })
    ).toEqual({ ...INITIAL_STATE, loadingData: true });
  });

  test('should update gnomeNameSearchField', () => {
    expect(
      dataReducer(INITIAL_STATE, {
        type: DATA.SET_GNOME_NAME_SEARCHFIELD,
        payload: 'random gnome name',
      })
    ).toEqual({ ...INITIAL_STATE, gnomeNameSearchField: 'random gnome name' });
  });

  test('should update professionSearchField', () => {
    expect(
      dataReducer(INITIAL_STATE, {
        type: DATA.SET_PROFESSION_SEARCHFIELD,
        payload: 'random profession',
      })
    ).toEqual({ ...INITIAL_STATE, professionSearchField: 'random profession' });
  });

  test('should update gnomesData', () => {
    expect(
      dataReducer(INITIAL_STATE, {
        type: DATA.FETCH_API_SUCCESS,
        payload: [
          {
            id: 0,
            name: 'Tobus Quickwhistle',
            thumbnail:
              'http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg',
            age: 306,
            weight: 39.065952,
            height: 107.75835,
            hairColor: 'Pink',
            professions: ['Metalworker', 'Woodcarver', 'Stonecarver', 'Tinker', 'Tailor', 'Potter'],
            friends: ['Cogwitz Chillwidget', 'Tinadette Chillbuster'],
          },
        ],
      })
    ).toEqual({
      ...INITIAL_STATE,
      gnomesData: [
        {
          id: 0,
          name: 'Tobus Quickwhistle',
          thumbnail:
            'http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg',
          age: 306,
          weight: 39.065952,
          height: 107.75835,
          hairColor: 'Pink',
          professions: ['Metalworker', 'Woodcarver', 'Stonecarver', 'Tinker', 'Tailor', 'Potter'],
          friends: ['Cogwitz Chillwidget', 'Tinadette Chillbuster'],
        },
      ],
    });
  });

  test('should update error', () => {
    expect(
      dataReducer(INITIAL_STATE, {
        type: DATA.FETCH_API_FAILURE,
        payload: 'random error',
      })
    ).toEqual({ ...INITIAL_STATE, error: 'random error' });
  });
});
