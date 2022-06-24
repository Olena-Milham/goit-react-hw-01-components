
// === components. it is a fubction which recieves data and gives back markup;
//  === jsx - small letter - string => tag, capital letter - var. 
//  video-1 53 mins;
// video-1 59 mins; component is independent thing, doesn't know about anything 
// so we import files and pass props in the file of render;

export default function Profile (props) {
    const {username ='unknown', avatar, tag, location, stats}=props;
    return <div class="profile">
    <div class="description">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
        alt={avatar}
        class="avatar"
      />
      <p class="name">{username}</p>
      <p class="tag">{tag}</p>
      <p class="location">{location}</p>
    </div>
  
    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{stats.followers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{stats.views}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
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
