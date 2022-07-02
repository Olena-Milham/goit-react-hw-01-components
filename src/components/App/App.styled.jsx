import styled from 'styled-components'
// import { getRandomHexColor } from 'utils/getRandomColor';

export const Container=styled.div`
  margin: 0 auto;
  padding: 40px;
  width: 1200px;
  background-color: ${props => props.theme.colors.background};
`;
