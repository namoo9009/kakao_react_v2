import axios from 'axios';

import { useEffect, useState } from 'react';
import Header from '../conponents/Header';
import Nav from '../conponents/Nav';
import FriendsList from '../conponents/FriendsList';
import Search from '../conponents/Search';

import myInfo from '../data/myInfo.json';
import profile from '../data/profile.json';

import '../style/style.scss';
import '../style/Friends.scss';
import { IoSettingsSharp } from "react-icons/io5";



function Friends() {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



  useEffect(() => {
      const fetchUsers = async () => {
          try {
              setError(null);
              setUser(null);
              setLoading(true);
              const response = await axios.get(
                  'https://jsonplaceholder.typicode.com/users'
              );

              setUser(response.data);
          } catch (e) {
              setError(e);
          }
          setLoading(false);
      };

      fetchUsers();
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