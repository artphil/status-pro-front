import { useState } from 'react';

import CardBasic from 'components/CardBasic';
import { CardType } from 'types/cardTypes';

import { CardContainer, CardInner } from './styles';

interface Props {
  card: CardType | null
}

function CardFlip(props: Props) {
  const { card: data } = props;

  const [card, setCard] = useState<CardType | null>(null);
  const [cardClass, setCardClass] = useState('');


  function showCard() {
    const timeout = 365;
    if (card) {
      setCardClass('');
      setTimeout(() => {
        setCard(null);
      }, timeout);
    }
    else {
      setCardClass('flip');
      setTimeout(() => {
        setCard(data);
      }, timeout);
    }
  }

  return (
    <CardContainer
      className={cardClass}
      onClick={showCard}
    >
      <CardInner>

        <CardBasic card={card} />
      </CardInner>
    </CardContainer >
  );
}

export default CardFlip;