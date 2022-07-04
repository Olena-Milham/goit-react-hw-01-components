
import PropTypes from 'prop-types';
import {UserProfile, UserAvatar, UserInfo, UserName, UserTag,UserLocation, StatsList, StatsItem,StatsLabel, StatsQuantity } from './Profile.styled';

export default function Profile (props) {
    const {username, avatar, tag, location, stats}=props;
    return <UserProfile >
    <UserInfo>
      <UserAvatar
        src={avatar}
        alt="User avatar"
        className="avatar"
      />
      <UserName>{username}</UserName>
      <UserTag>@{tag}</UserTag>
      <UserLocation>{location}</UserLocation>
    </UserInfo>
  
    <StatsList>
      <StatsItem>
        <StatsLabel>Followers</StatsLabel>
        <StatsQuantity>{stats.followers}</StatsQuantity>
      </StatsItem>
      <StatsItem>
        <StatsLabel>Views</StatsLabel>
        <StatsQuantity>{stats.views}</StatsQuantity>
      </StatsItem>
      <StatsItem>
        <StatsLabel>Likes</StatsLabel>
        <StatsQuantity>{stats.likes}</StatsQuantity>
      </StatsItem>
    </StatsList>
  </UserProfile>
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag:PropTypes.string.isRequired,
  location:PropTypes.string.isRequired,
  avatar:PropTypes.string.isRequired,
  stats:PropTypes.object.isRequired,
}





// ============== My Notes =================
// === components is a function which recieves data and gives back markup;
//  === jsx - small letter - string => tag, capital letter - var. 
//  video-1 53 mins;
// video-1 59 mins; component is independent thing, doesn't know about anything 
// so we import files and pass props in the file of render;
//  proptype - catches the type of prop, what type you expect to recieve:string, boolean, {},[]

// ==== 
// const Profile = (props)=> {
//     const {username, avatar, tag, location, stats}=props;
//     return <div class="profile"> ....
//   </div>
// }

// export default Profile ;


// ReactDOM.render (
//     <Profile
//   username={user.username}
//   tag={user.tag}
//   location={user.location}
//   avatar={user.avatar}
//   stats={user.stats}
// />, document.querySelector('#root'),
// );