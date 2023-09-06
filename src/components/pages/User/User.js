import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from '../../../axios';
import site from "../../../assets/site.png";
import github from "../../../assets/github.png";
import location from "../../../assets/location.png";
import user from "../../../assets/user.png";
import back from "../../../assets/back.png";
import Repo from "../../ui/Repo";
import "./User.css";
import { useAlert } from "react-alert";

const User = () => {
    const { login } = useParams();
    const [userInfo, setUserInfo] = useState({});
    const [repos, setRepos] = useState([]);
    const alert = useAlert();

    useEffect(() => {
      const fetchUserInformation = async () => {
        try {
          const response = await Promise.all([
            axios.get(`/users/${login}`),
            axios.get(`/users/${login}/repos`),
          ]);
          setUserInfo(response[0].data);
          setRepos(response[1].data);
        } catch (error) {
          alert.error("Something wrong happened, please try again in 1-2 minutes");
          console.log(error);
        }
      };
      fetchUserInformation();
    }, []);
    return (
      <div className="container">
        <Link to="/" className="back">
          <img src={back}/>
        </Link>
        <div className="user-information">
          <div className="image">
            <img src={userInfo?.avatar_url} />
          </div>
          <div className="user-content">
            <h3>{userInfo?.name}</h3>
            <p>{userInfo?.bio}</p>
            <div className="more-data">
              <p>
                <img src={user} alt="" />
                 {userInfo?.followers} Followers. Following {userInfo?.following}
              </p>
              {userInfo?.location && (
                <p>
                  <img src={location} alt="" />
                   {userInfo?.location}
                </p>
              )}
              {userInfo?.blog && (
                <p>
                  <img src={site} alt="" />
                   {userInfo?.blog}
                </p>
              )}
              <p>
                <img src={github} alt="" />
                <a href={userInfo?.html_url} className="link"> View GitHub Profile</a>
              </p>
            </div>
          </div>
        </div>
        <div className="user-repos">
        {repos ? (
          repos.map((repo) => {
            return <Repo repo={repo} key={repo.id} />;
          })
        ) : (
          <h2>No repos for this user</h2>
        )}
        </div>
      </div>
    );
};

export default User;