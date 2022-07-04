import styled from 'styled-components'

export const FriendListContainer = styled.ul`
display: flex;
align-items: center;
margin-bottom: ${props=>(props.theme.space[5])}px;
padding: ${props=>(props.theme.space[5])}px;
border-radius: ${props=>(props.theme.radii.extra)};
box-shadow: 0 15px 28px rgba(0,0,0,0.30);
background-color:  ${props => props.theme.colors.cardsBg};
list-style: none;
width:50%;
margin-right: auto;
margin-left: auto;
`;


export const ListItem=styled.li`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
margin-left: ${props=>(props.theme.space[5])}px;
`;

