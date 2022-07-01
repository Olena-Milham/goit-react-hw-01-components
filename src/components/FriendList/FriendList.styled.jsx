import styled from 'styled-components'

export const FriendListContainer = styled.ul`
display: flex;
align-items: center;
margin-bottom: 20px;
padding: 20px;
border-radius: 5px;
box-shadow: 0 15px 28px rgba(0,0,0,0.30);
background-color: lightblue;
list-style: none;
width:25%;
margin-bottom: 30px`;


export const ListItem=styled.li`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
margin-left: 16px;

`;

export const Status=styled.span`
width: 10px;
height: 10px;
border-radius: 50%;
margin-bottom: 20px;
background-color: ${props => (props.isOnline ? 'red' : 'green')};

    `;


export const Avatar =styled.img`
  display: block;
width: 50px;
`;

export const FriendName =styled.p`
font-size: 1.5rem;
  font-weight: 400;
  color: black;
  `;


