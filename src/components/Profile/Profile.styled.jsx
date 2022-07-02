import styled from 'styled-components'
import { getRandomHexColor } from 'utils/getRandomColor';

export const UserProfile = styled.div`
display:flex;
flex-direction: column;
align-items: center;
padding: ${props=>(props.theme.space[5])}px;
border-radius: ${props=>(props.theme.radii.extra)};
box-shadow: 0 15px 28px rgba(0,0,0,0.30);
background-color:  ${props => props.theme.colors.cardsBg};
width:50%;
margin-bottom: ${props=>(props.theme.space[5])}px;

margin-right: auto;
margin-left: auto;
`;

export const UserInfo = styled.div`
display:flex;
flex-direction: column;
align-items: center;
margin-top:${props=>(props.theme.space[0])}px;
margin-bottom:${props=>(props.theme.space[5])}px;
`;

export const UserAvatar=styled.img`
width: 50%;
border-radius: ${props => props.theme.radii.round};
background-color: ${props => props.theme.colors.accent};
`;

export const UserName=styled.p`
font-family:${props=>(props.theme.fonts.heading)};
font-size: ${props=>(props.theme.fontSizes.l)};
line-height: ${props=>(props.theme.lineHeights.heading)};
font-weight: ${props=>(props.theme.fontWeights.bold)};
letter-spacing: 0.25px;
margin-bottom:  ${props=>(props.theme.space[3])}px;
margin-top: ${props=>(props.theme.space[0])}px;
color: ${getRandomHexColor};
`;
export const UserTag=styled.p`

font-size: ${props=>(props.theme.fontSizes.m)};
line-height: ${props=>(props.theme.lineHeights.body)};
font-weight: ${props=>(props.theme.fontWeights.normal)};
letter-spacing: 0.25px;
margin-bottom: ${props=>(props.theme.space[3])}px;
margin-top:${props=>(props.theme.space[0])}px;
color:${props=>(props.theme.colors.black)};
`;
export const UserLocation=styled.p`
font-family:${props=>(props.theme.fonts.body)};
font-size: ${props=>(props.theme.fontSizes.m)};
line-height: ${props=>(props.theme.lineHeights.body)};
font-weight: ${props=>(props.theme.fontWeights.normal)};
letter-spacing: 0.25px;
margin-bottom: ${props=>(props.theme.space[3])}px;
margin-top:${props=>(props.theme.space[0])}px;
color:${props=>(props.theme.colors.black)};

`;

export const StatsList=styled.ul`
display: flex; 
flex-direction: row; 
align-items: center;
height: ${props=>(props.theme.space[6])}px;
list-style: none;
margin:${props=>(props.theme.space[0])}px;
padding:${props=>(props.theme.space[0])}px;
`;

export const StatsItem=styled.li`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-left: ${props=>(props.theme.space[5])}px;
`;

export const StatsLabel=styled.span`
font-family:${props=>(props.theme.fonts.body)};
font-size: ${props=>(props.theme.fontSizes.m)};
line-height: ${props=>(props.theme.lineHeights.heading)};
font-weight: ${props=>(props.theme.fontWeights.bold)};
letter-spacing: 0.25px;
margin-bottom: ${props=>(props.theme.space[3])}px;
margin-top:${props=>(props.theme.space[0])}px;
color:${props=>(props.theme.colors.black)};
`;

export const StatsQuantity=styled.span`
font-family:${props=>(props.theme.fonts.body)};
font-size: ${props=>(props.theme.fontSizes.l)};
line-height: ${props=>(props.theme.lineHeights.body)};
font-weight: ${props=>(props.theme.fontWeights.normal)};
letter-spacing: 0.25px;
margin-bottom: ${props=>(props.theme.space[3])}px;
margin-top:${props=>(props.theme.space[0])}px;
color:${props=>(props.theme.colors.black)};`;
