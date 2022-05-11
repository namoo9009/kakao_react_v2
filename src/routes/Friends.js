import axios from 'axios';

import { useEffect, useState } from 'react';
import Header from '../conponents/Header';
import Nav from '../conponents/Nav';
import FriendsList from '../conponents/FriendsList';
import Search from '../conponents/Search';
import Loading from '../conponents/Loading';

import myInfo from '../data/myInfo.json';
import profile from '../data/profile.json';

import '../style/style.scss';
import '../style/Friends.scss';
import { IoSettingsSharp } from "react-icons/io5";



function Friends() {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const getUsers = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
  
    setUser(response.data);
    setLoading(false);
  }
  useEffect(() => {
    getUsers();
  }, []);

  return (
    
    <div className='friends'>
        <Header 
          bgColor="bgColor"
          title="Frends"
          count={1}
          leftItem="Manage"
          rightItem={<IoSettingsSharp />}
        />
        <main>
          <Search />
          <section className='main_section friends'>
            <div className='main_header'>
              <h2>My Profile</h2>
            </div>
            <ul>
              <FriendsList 
                name = {myInfo.name}
                email = {myInfo.email}
                msg = {myInfo.message}
                img = {myInfo.profile_img}
                bg = {myInfo.bg}
              />
            </ul>
          </section>
          <section className='main_section friends'>
            <div className='main_header'>
              <h2>Friends</h2>
            </div>
            <ul>
              {loading ? (
                <Loading />
              ) : <div>
                  {users && users.map((user,idx) => (
                    <FriendsList 
                      key = {user.id}
                      name = {user.username}
                      email = {user.email}
                      msg = {profile[idx].msg}
                      img = {profile[idx].profile_img}
                      bg = {profile[idx].bg}
                    />
                  ))}
                </div>
              }
            </ul>
          </section>
        </main>
        <Nav
          className="friends"
        />
    </div>
  )
}

export default Friends;