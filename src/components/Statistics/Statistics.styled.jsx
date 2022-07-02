import styled from 'styled-components'

export const StatContainer =styled.div`
display:flex;
flex-direction: column;
align-items: center;
padding:  ${props=>(props.theme.space[5])}px;
border-radius: ${props=>(props.theme.radii.extra)};
box-shadow: 0 15px 28px rgba(0,0,0,0.30);
background-color: ${props => props.theme.colors.cardsBg};
width:50%;
margin-bottom: ${props=>(props.theme.space[5])}px;
margin-right: auto;
margin-left: auto;
`;

export const StatTitle=styled.h2`
font-family:${props=>(props.theme.fonts.body)};
font-size: ${props=>(props.theme.fontSizes.l)};
line-height: ${props=>(props.theme.lineHeights.heading)};
font-weight: ${props=>(props.theme.fontWeights.bold)};
letter-spacing: 0.5px;
text-transform: uppercase;
color: ${props => props.theme.colors.text};
margin-top:${props=>(props.theme.space[0])}px;`;

export const StatList = styled.ul`
list-style: none;
display: flex; 
flex-direction: row; 
align-items: center;
`;

export const Item=styled.li`
display: flex; 
flex-direction: column ; 
justify-content: center;
align-items: center;
margin-left: ${props=>(props.theme.space[3])}px;
padding: ${props=>(props.theme.space[3])}px;
background-color: ${props => props.theme.colors.white};
flex-basis: calc(100% / 4);
width: 100%;
border-radius: ${props => props.theme.radii.extra};
color: ${props => props.theme.colors.accent};
  :hover,
  :focus {
    color: ${props => props.theme.colors.cardsBg};}

`;


export const ItemLabel = styled.span`
font-size: ${props=>(props.theme.fontSizes.l)};
font-weight:  ${props=>(props.theme.fontWeights.bold)};
`;

export const ItemPercentage = styled.span`
font-size: ${props=>(props.theme.fontSizes.l)};
font-weight:  ${props=>(props.theme.fontWeights.bold)};`;


