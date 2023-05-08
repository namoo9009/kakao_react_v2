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
        <h1>변경했음</h1>
    </div>
  )
}

export default Friends;