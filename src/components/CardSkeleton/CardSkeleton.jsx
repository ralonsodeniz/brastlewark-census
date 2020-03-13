import React from 'react';

import NoImg from '../../../assets/no-image.webp';

import {
  CardSkeletonContainer,
  CardSkeletonDetailsContainer,
  CardSkeletonImage,
  CardSkeletonDetailsMock,
  CardSkeletonDetailsTitle,
} from './CardSkeleton.styles';

const CardSkeleton = () => {
  return (
    <CardSkeletonContainer>
      <CardSkeletonImage alt="user" src={NoImg} />
      <CardSkeletonDetailsMock>
        <CardSkeletonDetailsContainer>
          <CardSkeletonDetailsTitle />
        </CardSkeletonDetailsContainer>
      </CardSkeletonDetailsMock>
    </CardSkeletonContainer>
  );
};

export default CardSkeleton;
