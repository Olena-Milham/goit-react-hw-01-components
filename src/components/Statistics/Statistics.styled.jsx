import styled from 'styled-components'

export const StatContainer =styled.div`
display:flex;
flex-direction: column;
align-items: center;
padding: 20px;
border-radius: 5px;
box-shadow: 0 15px 28px rgba(0,0,0,0.30);
background-color: lightgreen;
width:25%;
margin-bottom: 30px;`;

export const StatTitle=styled.h2`
margin-top:0;
font-size: 14px;
line-height: 24px;
font-weight: 700;
letter-spacing: 0.5px;
text-transform: uppercase;`;

export const StatList = styled.ul`
list-style: none;
display: flex; 
flex-direction: row; 
align-items: center;`;

export const Item=styled.li`
display: flex; 
flex-direction: column ; 
justify-content: center;
align-items: center;
margin-left: 8px;
padding: 8px;
background-color: lightblue;`;


export const ItemLabel = styled.span`
font-weight: 700;`;

export const ItemPercentage = styled.span`
font-weight: 700;`;
;

