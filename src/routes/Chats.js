import React from 'react'
import Header from '../conponents/Header';
import Nav from '../conponents/Nav';
import Search from '../conponents/Search';
import ChatsList from '../conponents/ChatsList';

import chatList from '../data/chatList.json';

import '../style/style.scss';
import '../style/Chats.scss';
import { BsFillCaretDownFill } from "react-icons/bs";
import { IoCaretDownOutline } from "react-icons/io5";

function Chats() {

  return (
    <div className='chats'>
        <Header 
          bgColor="bgColor"
          title="Chats"
          centerItem={<IoCaretDownOutline />}
          leftItem="Edit"
        />
        <main>
          <Search />
          <section className='main_section chats'>
            <header className='blind'><h2>Chats list</h2></header>
            <ul>
              {chatList.map((list) => (
                <ChatsList 
                  key={list.id}
                  name={list.name} 
                  profile_img={list.profile_img}
                  last_msg={list.last_msg}
                  last_time={list.last_time}
                />
              ))}
            </ul>
          </section>
        </main>
        <Nav
          className="chats"
        />
    </div>
  )
}

export default Chats;