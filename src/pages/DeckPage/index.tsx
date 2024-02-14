import Card from 'components/Card';

import { Container } from './styles';
import { CardType } from 'types/cardTypes';
import DefaultPage from 'components/DefaultPage';

function DeckPage() {
  const baralho: CardType[] = [
    { type: 'gold', name: 'Saci', description: 'É um jovem negro de uma perna só, portador de uma carapuça sobre a cabeça que lhe concede poderes mágicos.  Considerado uma figura brincalhona, que se diverte com os animais e pessoas, fazendo pequenas travessuras que criam dificuldades domésticas, ou assustando viajantes noturnos com seus assovios', image: 'saci', serie: 'A1', status: [{ label: 'size', value: 2.1 }, { label: 'peso', value: 82 }, { label: 'poder', value: 35 }, { label: 'velocidade', value: 15 }, { label: 'magia', value: 20 }] },
    { type: 'silver', name: 'Cuca', description: 'É um ser mítico que está presente no folclore brasileiro, sendo muito conhecida por ser a responsável por sequestrar as crianças desobedientes. A Cuca espreita as casas das pessoas durante a noite e captura as crianças que não dormem na hora correta e que são inquietas.', image: 'cuca', serie: 'A2', status: [{ label: 'size', value: 2.1 }, { label: 'peso', value: 82 }, { label: 'poder', value: 35 }, { label: 'velocidade', value: 15 }, { label: 'magia', value: 20 }] },
    { type: 'bronze', name: 'Pisadeira', description: 'É uma mulher que pisa na barriga das pessoas com o estômago cheio e as deixava com falta de ar, que costuma fazê-lo durante a madrugada. Ela pode ser associada com a paralisia do sono.', image: 'pisadeira', serie: 'A3', status: [{ label: 'size', value: 2.1 }, { label: 'peso', value: 82 }, { label: 'poder', value: 35 }, { label: 'velocidade', value: 15 }, { label: 'magia', value: 20 }] },
  ];


  return (
    <DefaultPage>
      <Container>
        {baralho.map((carta: CardType, index) => (
          <Card key={index} {...carta} />
        ))}
      </Container>
    </DefaultPage>
  );
}

export default DeckPage;