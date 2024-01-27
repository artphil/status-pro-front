import Card from 'components/Card';

import { Container } from './styles';
import { CardType } from 'types/cardTypes';

function DeckPage() {
  const baralho: CardType[] = [
    { type: 'gold', name: 'Saci', image: 'saci', serie: 'A1', status: [{ label: 'size', value: 2.1 }, { label: 'peso', value: 82 }, { label: 'poder', value: 35 }, { label: 'velocidade', value: 15 }, { label: 'magia', value: 20 }] },
    { type: 'silver', name: 'Cuca', image: 'cuca', serie: 'A2', status: [{ label: 'size', value: 2.1 }, { label: 'peso', value: 82 }, { label: 'poder', value: 35 }, { label: 'velocidade', value: 15 }, { label: 'magia', value: 20 }] },
    { type: 'cooper', name: 'Pisadeira', image: 'pisadeira', serie: 'A3', status: [{ label: 'size', value: 2.1 }, { label: 'peso', value: 82 }, { label: 'poder', value: 35 }, { label: 'velocidade', value: 15 }, { label: 'magia', value: 20 }] },
  ];


  return (
    <Container>
      {baralho.map((carta: CardType, index) => (
        <Card key={index} {...carta} />
      ))}
    </Container>
  );
}

export default DeckPage;