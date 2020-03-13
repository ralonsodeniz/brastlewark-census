import DATA from '../types/dataTypes';

const INITIAL_STATE = {
  loadingData: false,
  gnomeNameSearchField: '',
  professionSearchField: '',
  gnomesData: [],
  error: '',
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATA.TOGGLE_DATA_LOADING:
      return {
        ...state,
        loadingData: action.payload,
      };
    case DATA.SET_GNOME_NAME_SEARCHFIELD:
      return {
        ...state,
        gnomeNameSearchField: action.payload,
      };
    case DATA.SET_PROFESSION_SEARCHFIELD:
      return {
        ...state,
        professionSearchField: action.payload,
      };
    case DATA.FETCH_API_SUCCESS:
      return {
        ...state,
        gnomesData: action.payload,
        loadingData: false,
        error: '',
      };
    case DATA.FETCH_API_FAILURE:
      return {
        ...state,
        error: action.payload,
        loadingData: false,
        gnomesData: [],
      };
    default:
      return state;
  }
};

export default dataReducer;
