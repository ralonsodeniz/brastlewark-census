import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectLoadingData,
  selectGnomesData,
  selectGnomeNameSearchField,
  selectProfessionSearchField,
} from '../../redux/selectors/dataSelectors';
import filterGnomes from '../../helpers/filterGnomes';
import { openModal } from '../../redux/actions/modalActions';
import isMobile from '../../helpers/isMobile';

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
  const dispatch = useDispatch();

  useEffect(() => {
    if (isMobile() && !document.fullscreenElement)
      dispatch(
        openModal({
          modalType: 'MOBILE_FULLSCREEN_LOCK',
        })
      );
  }, [dispatch, isMobile, document.fullscreenElement]);

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
