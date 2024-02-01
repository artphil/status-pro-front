import { CardType } from 'types/cardTypes';

import { CardContainer, CardSerie, ContainerInside, CardImage, Status, TopoTitle, CardHeader } from './styles';

function CardBasic(props: CardType) {
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
        <CardHeader>
          <TopoTitle>{name}</TopoTitle>
          <CardSerie>{serie}</CardSerie>
        </CardHeader>
        <CardImage>
          <img src={`temp/${image}.jpeg`} alt={name} />
        </CardImage>
        {status.map((item, index) => (
          <Status key={index}>
            <span>{item.label}:</span>
            <span>{item.value}</span>
          </Status>
        ))}
      </ContainerInside>
    </CardContainer>
  );
}

export default CardBasic;