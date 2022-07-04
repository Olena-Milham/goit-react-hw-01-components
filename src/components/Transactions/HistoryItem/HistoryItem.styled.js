import styled from 'styled-components'

export const TableData=styled.td`
height:  ${props=>(props.theme.space[5])}px;
padding:  ${props=>(props.theme.space[2])}px;
text-align: center;`;



export const TableRow = styled.tr`
font-family:${props=>(props.theme.fonts.body)};
font-size: ${props=>(props.theme.fontSizes.l)};
background-color: ${props => props.theme.colors.accent};
  :nth-child(2n + 1) {
    background-color: ${props => props.theme.colors.white};}
    `;

