import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import useDebounce from '../../helpers/useDebouncer';
import { setGnomeNameSearchField, setProfessionSearchField } from '../../redux/actions/dataActions';

import SearchBox from '../SearchBox/SearchBox';

import {
  NameSearchContainer,
  ProffesionSearchContainer,
  SearchBoxComboContainer,
} from './SearchBoxCombo.styles';

const SearchBoxCombo = () => {
  const [state, setState] = useState({
    gnomeName: '',
    profession: '',
  });

  const dispatch = useDispatch();

  const { gnomeName, profession } = state;

  const debouncedGnomeName = useDebounce(gnomeName, 1500);
  const debouncedProfesion = useDebounce(profession, 1500);

  useEffect(() => {
    dispatch(setGnomeNameSearchField(debouncedGnomeName));
  }, [debouncedGnomeName, dispatch]);

  useEffect(() => {
    dispatch(setProfessionSearchField(debouncedProfesion));
  }, [debouncedProfesion, dispatch]);

  const onHandleSearch = useCallback(event => {
    const { name, value } = event.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  }, []);

  return (
    <SearchBoxComboContainer>
      <NameSearchContainer>
        <SearchBox
          id="gnomeName"
          name="gnomeName"
          label="gnome name"
          value={gnomeName}
          onSearchChange={onHandleSearch}
        />
      </NameSearchContainer>
      <ProffesionSearchContainer>
        <SearchBox
          id="profession"
          name="profession"
          label="gnome profession"
          value={profession}
          onSearchChange={onHandleSearch}
        />
      </ProffesionSearchContainer>
    </SearchBoxComboContainer>
  );
};

export default SearchBoxCombo;
