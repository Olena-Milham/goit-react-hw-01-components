import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';
import { FriendListContainer, ListItem } from './FriendList.styled';

export default function FriendList ({friends}){
    return <FriendListContainer>
{friends.map((friend)=>( 
<ListItem key= {friend.id} >
   <FriendListItem
     avatar={friend.avatar}
     name={friend.name}
     isOnline={friend.isOnline}/>
</ListItem>
))}
    </FriendListContainer>
}

FriendList.propTypes={
    friends:PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.number.isRequired,
    }),).isRequired,
};