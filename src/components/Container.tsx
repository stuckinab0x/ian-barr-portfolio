import { FC } from 'react';
import styled from 'styled-components';

const Container: FC = () => (
  <ContainerMain />
)

const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${ props => props.theme.colors.bgMain };
`;

export default Container;
