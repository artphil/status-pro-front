import { styled } from 'styled-components';

export const CardContainer = styled.div`
  perspective: 1000px;
  transition: transform 0.999s;

  &.flip div {
      transform: rotateY(180deg);
  }
`;

export const CardInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.999s;

`; 