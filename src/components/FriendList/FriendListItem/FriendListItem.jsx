import PropTypes from 'prop-types';
import { Avatar, FriendName, Status } from './FriendListItem.styled';

function FriendListItem (props){
    const {avatar, name, isOnline}=props;

return <>
<Status isOnline={isOnline}/> 
<Avatar src={avatar} alt="User avatar" width="48" />
<FriendName> {name} </FriendName>
</>

}

FriendListItem.propTypes={
    avatar:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,

}
export default FriendListItem;