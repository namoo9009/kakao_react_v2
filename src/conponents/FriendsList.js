import React from 'react';
import { Link } from 'react-router-dom';

import '../style/FriendsListComponent.scss';
import Profile from '../routes/Profile';


function FriendsList({ name, email, img, msg, bg }) {
    return (
        <li className='friends_list'>
            <Link to='/profile' state={{ name, email, img, msg, bg }}>
                <span className='profile_img' style={{backgroundImage:`url(${img})`}}></span>
                <span className='profile_name'>{name}</span>
                <span className='profile_messages'>{msg}</span>
            </Link>
        </li>
    )
}

export default FriendsList;