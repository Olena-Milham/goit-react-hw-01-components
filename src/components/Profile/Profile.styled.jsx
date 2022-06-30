import styled from 'styled-components'
import { getRandomHexColor } from 'utils/getRandomColor';

export const UserProfile = styled.div`
display:flex;
flex-direction: column;
align-items: center;
padding: 20px;
border-radius: 5px;
box-shadow: 0 15px 28px rgba(0,0,0,0.30);
background-color: lightpink;
width:25%;
`;

export const UserInfo = styled.div`
display:flex;
flex-direction: column;
align-items: center;
margin-top:0;
margin-bottom:8px;`;

export const UserAvatar=styled.img`
width: 300px;`;

export const UserName=styled.p`
font-size: 24px;
line-height: 24px;
font-weight: 700;
letter-spacing: 0.25px;
margin-bottom: 8px;
margin-top:0;
`;
export const UserTag=styled.p`
font-size: 16px;
line-height: 24px;
font-weight: 400;
letter-spacing: 0.25px;
color: ${getRandomHexColor};
margin-bottom: 8px;
margin-top:0;
`;
export const UserLocation=styled.p`
font-size: 16px;
line-height: 24px;
font-weight: 400;
letter-spacing: 0.25px;
color: #000;
margin-bottom: 8px;
margin-top:0;
`;

export const StatsList=styled.ul`
display: flex; 
flex-direction: row; 
align-items: center;
height: 50px;
list-style: none;
margin:0;
padding:0;
`;
export const StatsItem=styled.li`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-left: 20px;
`;

export const StatsLabel=styled.span`
font-size: 16px;
line-height: 24px;
font-weight: 600;
letter-spacing: 0.25px;
color: #000;
margin-bottom: 8px;`;

export const StatsQuantity=styled.span`
font-size: 16px;
line-height: 24px;
font-weight: 400;
letter-spacing: 0.25px;
color: #000;
margin-bottom: 8px;
margin-top:0;`;
