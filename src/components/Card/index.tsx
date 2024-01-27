import * as React from 'react';

import { CardType } from 'types/cardTypes';

import { CardContainer, CardSerie, ContainerInside, CardImage, Information, Status, TopoTitle } from './styles';

function Card(props: CardType) {
  const {
    type,
    serie,
    name,
    image,
    status,
  } = props;

  return (
    <CardContainer className={type}>
      <ContainerInside>
        <CardSerie>
          <span>{serie}</span>
        </CardSerie>
        <TopoTitle>
          <span>{name}</span>
        </TopoTitle>
        <CardImage>
          <img src={`temp/${image}.jpeg`} alt={name} />
        </CardImage>
        {status.map((item, index) => (
          <Status key={index}>
            <span>{item.label}:</span>
            <span>{item.value}</span>
          </Status>
        ))}
        <Information>
          <span>i</span>
        </Information>
      </ContainerInside>
    </CardContainer>
  );
}

export default Card;