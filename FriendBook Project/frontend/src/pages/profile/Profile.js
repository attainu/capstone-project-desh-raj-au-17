import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  //   const [user, setUser] = useState({});
  //   const username = useParams().username;

  //   useEffect(() => {
  //     const fetchUser = async () => {
  //       const res = await axios.get(`/users?username=${username}`);
  //       setUser(res.data);
  //     };
  //     fetchUser();
  //   }, [username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={`${PF}/post/3.jpeg`}
                //   user.coverPicture
                // ? PF + user.coverPicture
                // : PF + "person/noCover.png"

                alt=""
              />
              <img
                className="profileUserImg"
                src={`${PF}/post/7.jpeg`}
                //   user.profilePicture
                // ? PF + user.profilePicture
                // : PF + "person/noAvatar.png"
                // }
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">
                Vaishnavi Gupta{/* {user.username} */}
              </h4>
              <span className="profileInfoDesc">
                Life is good and so this project is!{/* {user.desc} */}
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed
            // username={username}
            />
            <Rightbar
              profile
              //  user={user}
            />
          </div>
        </div>
      </div>
    </>
  );
}
