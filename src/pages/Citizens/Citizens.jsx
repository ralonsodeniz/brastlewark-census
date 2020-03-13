import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectLoadingData, selectGnomesData } from '../../redux/selectors/dataSelectors';

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
});

const Citizens = () => {
  const { loadingData, gnomesData } = useSelector(selectCitizensData, shallowEqual);

  return (
    <CitizensContainer>
      <CitizensTitle>Find your gnome</CitizensTitle>
      <SearchBoxesContainer>
        <SearchBoxCombo />
      </SearchBoxesContainer>
      <CitizensListContainer>
        <CardList items={gnomesData} loading={loadingData} />
      </CitizensListContainer>
    </CitizensContainer>
  );
};

export default Citizens;
