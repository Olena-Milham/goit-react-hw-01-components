import styled from 'styled-components'

export const TransHistoryTb=styled.table`
width: 27%;
background-color: violet;
border-radius: 8px;
box-shadow: 0 15px 28px rgba(0,0,0,0.30);`;

export const TableHeader=styled.th`
 width: 200px;
height: 30px;
padding: 4px 0;`;

export const TableData=styled.td`
height: 30px;
padding: 4px 0;
text-align: center;`;


export const TableRow = styled.tr`
font-size: 24px;
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