import React from "react";
import site from "../../assets/site.png";
import github from "../../assets/github.png";
import user from "../../assets/user.png";

const UserDetail = ({userDetail}) => {
    const { avatar_url, name, bio, followers, following, location, blog, html_url } = userDetail;
    return (

        <div className="user-information">
          <div className="image">
            <img src={avatar_url} />
          </div>
          <div className="user-content">
            <h3>{name}</h3>
            <p>{bio}</p>
            <div className="more-data">
              <p>
                <img src={user} alt="" />
                 {followers} Followers. Following {following}
              </p>
              {location && (
                <p>
                  <img src={location} alt="" />
                   {location}
                </p>
              )}
              {blog && (
                <p>
                  <img src={site} alt="" />
                   {blog}
                </p>
              )}
              <p>
                <img src={github} alt="" />
                <a href={html_url} className="link"> View GitHub Profile</a>
              </p>
            </div>
          </div>
        </div>
    )
};

export default UserDetail;