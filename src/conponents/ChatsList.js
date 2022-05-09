import React from 'react';
import { Link } from 'react-router-dom';

import '../style/style.scss';
import '../style/ChatsListComponent.scss';

function ChatsList({ name, profile_img, last_msg, last_time }) {
  return (
    <li className='chats_list'>
        <Link to='/chatting' state={{ name, profile_img, last_msg, last_time }}>
            <span className='chats_img' style={{backgroundImage:`url(${profile_img})`}}></span>
            <span className='chats_content'>
                <span className='chats_name'>{name}</span>
                <span className='chats_last'>{last_msg}</span>
            </span>
            <span className='chats_time'>{last_time}</span>
        </Link>
    </li>
  )
}

export default ChatsList;