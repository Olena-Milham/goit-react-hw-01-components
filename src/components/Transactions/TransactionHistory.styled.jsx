import styled from 'styled-components'

export const TransHistoryTb=styled.table`
width: 55%;
margin-right: auto;
margin-left: auto;
background-color:  ${props => props.theme.colors.cardsBg};
border-radius: ${props=>(props.theme.radii.extra)};
box-shadow: 0 15px 28px rgba(0,0,0,0.30);
`;

export const TableHead = styled.thead``;
export const TableRowTop=styled.tr``;
export const TableBody=styled.tbody``;

export const TableHeader=styled.th`
width: ${props=>(props.theme.space[8])}px;
height: ${props=>(props.theme.space[5])}px;
padding:  ${props=>(props.theme.space[2])}px;
text-align: center;
font-family:${props=>(props.theme.fonts.heading)};
font-size: ${props=>(props.theme.fontSizes.l)};
`;

export const TableData=styled.td`
height:  ${props=>(props.theme.space[5])}px;
padding:  ${props=>(props.theme.space[2])}px;
text-align: center;`;


export const TableRow = styled.tr`
font-family:${props=>(props.theme.fonts.body)};
font-size: ${props=>(props.theme.fontSizes.l)};
background-color: ${props => props.theme.colors.accent};
  :nth-child(2n + 1) {
    background-color: ${props => props.theme.colors.white};}`;


// ==========================
// const SetRowColor=props=>{
//  const backgroundColor = props.index %2===0 ? props.theme.colors.primary:props.theme.colors.secondary
// console.log(props.index);
//  return backgroundColor;
// }
// =========
    /* background-color: ${props =>
    props.index % 2 === 0
      ? props.theme.colors.primary
      : props.theme.colors.secondary}; */