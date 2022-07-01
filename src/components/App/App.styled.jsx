import styled from 'styled-components'
import { getRandomHexColor } from 'utils/getRandomColor';

export const Container=styled.div`
/* height: '100vh'; */
display: 'flex';
justify-content: 'center';
align-items: 'center';
font-size: 40;
color: '#010101'; 
padding: 150px;
background-color: beige;
/* background-image: linear-gradient(35deg, ${getRandomHexColor}, 20%, white); */
/* background-color: ${getRandomHexColor} */
margin: 0;
padding: 0;
list-style: none;`;
