import React, { useState, useCallback } from 'react';

import SearchBox from '../../components/SearchBox/SearchBox';
import CardList from '../../components/CardList/CardList';

import {
  CitizensContainer,
  CitizensTitle,
  SearchBoxesContainer,
  NameSearchContainer,
  ProffesionSearchContainer,
  CitizensListContainer,
} from './Citizens.styles';

const Citizens = () => {
  const [state, setState] = useState({
    gnomeName: '',
    profession: '',
  });

  const { gnomeName, profession } = state;

  const onHandleSearch = useCallback(event => {
    const { name, value } = event.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  }, []);

  return (
    <CitizensContainer>
      <CitizensTitle>Find your gnome</CitizensTitle>
      <SearchBoxesContainer>
        <NameSearchContainer>
          <SearchBox
            id="name"
            name="name"
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
      </SearchBoxesContainer>
      <CitizensListContainer>
        <CardList items={[{}]} />
      </CitizensListContainer>
    </CitizensContainer>
  );
};

export default Citizens;
