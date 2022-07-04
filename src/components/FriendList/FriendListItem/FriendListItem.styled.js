import styled from 'styled-components'

export const Status=styled.span`
width: ${props=>(props.theme.space[4])}px;
height: ${props=>(props.theme.space[4])}px;
border-radius:  ${props=>(props.theme.radii.round)};
margin-bottom: ${props=>(props.theme.space[5])}px;
background-color: ${props => (props.isOnline ? 'red' : 'green')};
 `;


export const Avatar =styled.img`
display: block;
width: ${props=>(props.theme.space[6])}px;
`;

export const FriendName =styled.p`
font-family:${props=>(props.theme.fonts.heading)};
font-size: ${props=>(props.theme.fontSizes.l)};
font-weight: ${props=>(props.theme.fontWeights.bold)};
line-height:${props=>(props.theme.lineHeights.heading)};
color:${props=>(props.theme.colors.black)};`;