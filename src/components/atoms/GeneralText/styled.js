import styled from 'styled-components';

export const AppText = styled.Text`
  font-size: ${props => props.size};
  color: ${props => props.color};
  font-weight: ${props => (props.weight ? 'bold' : 'normal')};
`;

export const TextContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
