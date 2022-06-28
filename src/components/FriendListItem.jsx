import PropTypes from 'prop-types';

function FriendListItem (props){
    const {avatar, name, isOnline}=props;

return <>
<span className="status"> {isOnline ? 'colorBlue': 'colorRed'} </span>
<img className="avatar" src={avatar} alt="User avatar" width="48" />
<p className="name"> {name} </p>
</>

}

FriendListItem.propTypes={
    avatar:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,

}
export default FriendListItem;