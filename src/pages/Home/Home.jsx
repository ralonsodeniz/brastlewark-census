import React from 'react';

import {
  BannerSvg,
  HeaderContainer,
  HeaderDescription,
  HeaderTitle,
  HeaderLink,
} from './Home.styles';

const HomePage = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Wellcome to Brastlewark</HeaderTitle>
      <BannerSvg />
      <HeaderDescription>
        This is Brastlewark, home of fierce Gnomes. Since people is not very talky around here this
        app will help you to know its inhabitants better. You can search using the filters to find
        the proffesional you need, your former school friend... Have fun!
      </HeaderDescription>
      <HeaderLink to="/citizens">Lets start the search!</HeaderLink>
    </HeaderContainer>
  );
};

export default HomePage;
