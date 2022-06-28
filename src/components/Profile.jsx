
// === components. it is a fubction which recieves data and gives back markup;
//  === jsx - small letter - string => tag, capital letter - var. 
//  video-1 53 mins;
// video-1 59 mins; component is independent thing, doesn't know about anything 
// so we import files and pass props in the file of render;
//  proptype - catches the type of prop, what type you expect to recieve:string, boolean, {},[]

import PropTypes from 'prop-types';

export default function Profile (props) {
    const {username, avatar, tag, location, stats}=props;
    return <div className="profile">
    <div className="description">
      <img
        src={avatar}
        alt="User avatar"
        className="avatar"
      />
      <p className="name">{username}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>
  
    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag:PropTypes.string.isRequired,
  location:PropTypes.string.isRequired,
  avatar:PropTypes.string.isRequired,
  stats:PropTypes.object.isRequired,
}



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
