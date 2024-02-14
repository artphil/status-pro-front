import DefaultPage from 'components/DefaultPage';

import CardFlip from 'components/CardFlip';

import { Card, Container, GameContainer } from './styles';

const card = { type: 'gold', name: 'Saci', description: 'É um jovem negro de uma perna só, portador de uma carapuça sobre a cabeça que lhe concede poderes mágicos.  Considerado uma figura brincalhona, que se diverte com os animais e pessoas, fazendo pequenas travessuras que criam dificuldades domésticas, ou assustando viajantes noturnos com seus assovios', image: 'saci', serie: 'A1', status: [{ label: 'size', value: 2.1 }, { label: 'peso', value: 82 }, { label: 'poder', value: 35 }, { label: 'velocidade', value: 15 }, { label: 'magia', value: 20 }] };

function GamePage() {

  return (
    <Container>
      <DefaultPage>
        <GameContainer>

          <Card>
            <CardFlip card={card} />
          </Card>
        </GameContainer>
      </DefaultPage>
    </Container>
  );
}

export default GamePage;