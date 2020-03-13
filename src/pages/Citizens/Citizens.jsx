import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectLoadingData,
  selectGnomesData,
  selectGnomeNameSearchField,
  selectProfessionSearchField,
} from '../../redux/selectors/dataSelectors';
import filterGnomes from '../../helpers/filterGnomes';

import CardList from '../../components/CardList/CardList';
import SearchBoxCombo from '../../components/SearchBoxCombo/SearchBoxCombo';

import {
  CitizensContainer,
  CitizensTitle,
  SearchBoxesContainer,
  CitizensListContainer,
} from './Citizens.styles';

const selectCitizensData = createStructuredSelector({
  loadingData: selectLoadingData,
  gnomesData: selectGnomesData,
  gnomeNameSearchField: selectGnomeNameSearchField,
  professionSearchField: selectProfessionSearchField,
});

const Citizens = () => {
  const { loadingData, gnomesData, gnomeNameSearchField, professionSearchField } = useSelector(
    selectCitizensData,
    shallowEqual
  );

  const filteredGnomes = filterGnomes(gnomesData, gnomeNameSearchField, professionSearchField);

  return (
    <CitizensContainer>
      <CitizensTitle>Find your gnome</CitizensTitle>
      <SearchBoxesContainer>
        <SearchBoxCombo />
      </SearchBoxesContainer>
      <CitizensListContainer>
        <CardList items={filteredGnomes} loading={loadingData} />
      </CitizensListContainer>
    </CitizensContainer>
  );
};

export default Citizens;
