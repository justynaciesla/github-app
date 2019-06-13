import React, { useState, useEffect } from "react";
import TabProfile from "../TabProfile";
import "./style.css";

const fetchUser = async ({ setIsLoading, setData, username }) => {
  setIsLoading(true);
  const responseUser = await fetch(`https://api.github.com/users/${username}`);
  const user = await responseUser.json();
  setIsLoading(false);
  setData(user);
};

const fetchFollowers = async ({ setFollowers, username }) => {
  const responseFollowers = await fetch(
    `https://api.github.com/users/${username}/followers`
  );
  const followers = await responseFollowers.json();
  setFollowers(followers);
};

const handleClick = ({ event, followText, setFollowText }) => {
  event.preventDefault();
  const newFollowText = followText === "Follow" ? "UnFollow" : "Follow";
  setFollowText(newFollowText);
};

const UserProfile = ({ match }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [followText, setFollowText] = useState("Follow");

  useEffect(() => {
    const username = match.params.username;
    fetchUser({ setIsLoading, setData, username });
    fetchFollowers({ setFollowers, username });
  }, [match.params.username]);

  if (isLoading) return <h1> Loading.....</h1>;
  return (
    <div id="profile_main_container">
      Testing
      <div className="profile_column1">
        <img className="img2" src={data.avatar_url} alt="user_photo" />
        <h1 className="profile_name">{data.name}</h1>
        <h3 className="profile_login">{data.login}</h3>
        <button
          className="follow_btn"
          onClick={event => handleClick({ event, setFollowText, followText })}
        >
          {followText}
        </button>

        <div style={{ width: 280 }}>
          {data.bio ? (
            <p style={{ color: "black", marginBottom: "10px" }}> {data.bio}</p>
          ) : null}

          <div>
            {data.location ? (
              <p className="profile_inf">
                <i
                  className="fas fa-map-marker-alt"
                  style={{ paddingRight: "10px" }}
                />{" "}
                {data.location}
              </p>
            ) : null}
          </div>

          <div>
            {data.email ? (
              <p className="profile_inf">
                <i
                  className="fas fa-envelope"
                  style={{ paddingRight: "10px" }}
                />
                {data.email}
              </p>
            ) : null}
          </div>

          <div>
            {data.company ? (
              <p className="profile_inf">
                <i className="fas fa-users" style={{ paddingRight: "10px" }} />
                {data.company}
              </p>
            ) : null}
          </div>

          <div>
            {data.blog ? (
              <p className="profile_inf">
                <i
                  className="fab fa-blogger-b"
                  style={{ paddingRight: "10px" }}
                />
                {data.blog}
              </p>
            ) : null}
          </div>
        </div>
      </div>
      <div className="profile_column2">
        <TabProfile
          username={match.params.username}
          repos={data.public_repos}
          followersNumber={data.followers}
          following={data.following}
          followers={followers}
        />
      </div>
    </div>
  );
};

export default UserProfile;

// class UserProfile extends Component {
//   state = {
//     isLoaded: false,
//     data: [],
//     repositories: [],
//     followers: [],
//     follow: "Follow"
//   };

//   async componentDidMount() {
//     this.setState({ isLoaded: true });
//     const username = this.props.match.params.username;
//     fetch("https://api.github.com/users/" + username)
//       .then(res => res.json())
//       .then(user => {
//         this.setState({
//           isLoaded: false,
//           data: user
//         });
//       });

//     await fetch("https://api.github.com/users/" + username + "/repos")
//       .then(res => res.json())
//       .then(repositories => {
//         this.setState({
//           repositories
//         });
//       });

//     await fetch("https://api.github.com/users/" + username + "/followers")
//       .then(res => res.json())
//       .then(followers => {
//         this.setState({
//           followers
//         });
//       });
//   }

//   handleClick = e => {
//     e.preventDefault();
//     if (this.state.follow === "Follow") {
//       this.setState({ follow: "Unfollow" });
//     } else {
//       this.setState({ follow: "Follow" });
//     }
//   };

//   render() {
//     const { data, isLoaded, repositories, followers, follow } = this.state;
//     if (isLoaded) return <div> loading.....</div>;
//     return (
//       <div id="profile_main_container">
//         <div className="profile_column1">
//           <img className="img2" src={data.avatar_url} alt="user_photo" />
//           <h1 className="profile_name">{data.name}</h1>
//           <h3 className="profile_login">{data.login}</h3>
//           <button className="follow_btn" onClick={this.handleClick}>
//             {follow}
//           </button>

//           <div style={{ width: 280 }}>
//             {data.bio ? (
//               <p style={{ color: "black", marginBottom: "10px" }}>
//                 {" "}
//                 {data.bio}
//               </p>
//             ) : null}

//             <div>
//               {data.location ? (
//                 <p className="profile_inf">
//                   <i
//                     className="fas fa-map-marker-alt"
//                     style={{ paddingRight: "10px" }}
//                   />{" "}
//                   {data.location}
//                 </p>
//               ) : null}
//             </div>

//             <div>
//               {data.email ? (
//                 <p className="profile_inf">
//                   <i
//                     className="fas fa-envelope"
//                     style={{ paddingRight: "10px" }}
//                   />
//                   {data.email}
//                 </p>
//               ) : null}
//             </div>

//             <div>
//               {data.company ? (
//                 <p className="profile_inf">
//                   <i
//                     className="fas fa-users"
//                     style={{ paddingRight: "10px" }}
//                   />
//                   {data.company}
//                 </p>
//               ) : null}
//             </div>

//             <div>
//               {data.blog ? (
//                 <p className="profile_inf">
//                   <i
//                     className="fab fa-blogger-b"
//                     style={{ paddingRight: "10px" }}
//                   />{" "}
//                   {data.blog}
//                 </p>
//               ) : null}
//             </div>
//           </div>
//         </div>

//         <div className="profile_column2">
//           <TabProfile
//             repositories={repositories}
//             repos={data.public_repos}
//             followersNumber={data.followers}
//             following={data.following}
//             followers={followers}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default UserProfile;
