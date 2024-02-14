import { useState } from 'react';

import DefaultPage from 'components/DefaultPage';
import CardBasic from 'components/CardBasic';

import { CardType } from 'types/cardTypes';

import { Card, Container, GameContainer } from './styles';

const data = { type: 'gold', name: 'Saci', description: 'É um jovem negro de uma perna só, portador de uma carapuça sobre a cabeça que lhe concede poderes mágicos.  Considerado uma figura brincalhona, que se diverte com os animais e pessoas, fazendo pequenas travessuras que criam dificuldades domésticas, ou assustando viajantes noturnos com seus assovios', image: 'saci', serie: 'A1', status: [{ label: 'size', value: 2.1 }, { label: 'peso', value: 82 }, { label: 'poder', value: 35 }, { label: 'velocidade', value: 15 }, { label: 'magia', value: 20 }] };

function GamePage() {
  const [card, setCard] = useState<CardType | null>(null);

  function showCard() {
    setCard(card ? null : data);
  }

  return (
    <Container>
      <DefaultPage>
        <GameContainer>

          <Card
            onClick={showCard}>

            <CardBasic card={card} />
          </Card>
        </GameContainer>
      </DefaultPage>
    </Container>
  );
}

export default GamePage;