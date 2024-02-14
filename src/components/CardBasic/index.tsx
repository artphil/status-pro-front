import { CardType } from 'types/cardTypes';
import Logo from 'components/Logo';

import { CardSerie, ContainerInside, CardImage, Status, TopoTitle, CardHeader, ContainerFront, ContainerBack } from './styles';

interface Props {
  card: CardType | null
}

function CardBasic(props: Props) {
  const { card } = props;

  function cardSide() {
    if (card) return (
      <ContainerFront className={card.type}>
        <ContainerInside>
          <CardHeader>
            <TopoTitle>{card.name}</TopoTitle>
            <CardSerie>{card.serie}</CardSerie>
          </CardHeader>
          <CardImage>
            <img src={`temp/${card.image}.jpeg`} alt={card.name} />
          </CardImage>
          {card.status.map((item, index) => (
            <Status key={index}>
              <span>{item.label}:</span>
              <span>{item.value}</span>
            </Status>
          ))}
        </ContainerInside>
      </ContainerFront>
    );
    else return (
      <ContainerBack>
        <Logo />
      </ContainerBack>
    );
  }

  return (<>
    {cardSide()}
  </>
  );
}

export default CardBasic;