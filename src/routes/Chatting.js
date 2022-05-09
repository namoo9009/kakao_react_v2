import React from 'react'
import Header from '../conponents/Header';

import '../style/style.scss';
import '../style/Chatting.scss';
import { FaPlus } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import { MdKeyboardVoice } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { useLocation } from 'react-router-dom';




function Chatting() {
  const location = useLocation();
  const { name, profile_img, last_time } = location.state;


  return (
  <div>
      <Header
        color='black'
        leftItem={<IoIosArrowBack />}
        title="Friend Name"
        rightItem={<IoSearch />}
      />
      <main className='chatting_main'>
        <span className='data_info'>Monday, April 18, 2022</span>
        <div className='chat_box my'>
          <span className='chat'>Hello!</span>
          <span className='chat'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          <span className='chat'>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
          <span className='chat_tiem'>16:30</span>
        </div>
        <div className='chat_box other'>
          <div className='other_info'>
            <a href='#'><span className='profile_img' style={{backgroundImage:`url(${profile_img})`}}></span></a>
            <span className='profile_name'>{name}</span>
          </div>
          <span className='chat'>Lorem ipsum</span>
          <span className='chat'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span>
          <span className='chat'>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
          <span className='chat_tiem'>{last_time}</span>
        </div>
        <div className='input_box'>
          <span className='plus_btn'>
            <a href='#'><FaPlus /></a>
          </span>
          <form action='/' method='post'>
            <fieldset className='text_box'>
              <legend className='blind'>채팅 입력창</legend>
              <input type='text' className='text_field' />
              <span className='emoticon_btn'>
                <a href='#'><BsEmojiSmile /></a>
              </span>
              <span className='voice_btn'>
                <a href='#'><MdKeyboardVoice /></a>
              </span>
            </fieldset>
          </form>
        </div>
    </main>
  </div>

  )
}

export default Chatting;