import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../conponents/Header';
import Nav from '../conponents/Nav';

import myInfo from '../data/myInfo.json';

import '../style/More.scss';
import { IoSettingsSharp, IoChatbubbleEllipsesOutline, IoBrush } from "react-icons/io5";
import { BsEmojiSmile, BsPersonPlusFill, BsBookmarkPlus, BsChatDots } from "react-icons/bs";
import { FaUserFriends, FaRegSmileWink, FaSmileWink, FaUserEdit, FaPencilAlt, FaWonSign } from "react-icons/fa";
import { MdManageAccounts, MdBrush, MdInfo, MdOutlineCastForEducation, MdAccountBalance, MdVideocam } from "react-icons/md";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { IoMdAppstore } from "react-icons/io";
import { GrChannel } from "react-icons/gr";



import '../style/style.scss';

function More() {

  return (
    <div>
      <Header 
        bgColor="bgColor"
        title="More"
        rightItem={<IoSettingsSharp />}
      />
      <main>
        <section className='user_info'>
          <h2 className='blind'>사용자 정보</h2>
          <span className='profile_img' style={{backgroundImage:`url(${myInfo.profile_img})`}}></span>
          <span className='profile_info'>
            <span className='profile_name'>{myInfo.name}</span>
            <span className='profile_email'>{myInfo.email}</span>
          </span>
          <span className='chats_icon'>
            <a href='#'><BsChatDots /></a>
          </span>
        </section>
        <section className='user_menu'>
          <h2 className='blind'>사용자 메뉴</h2>
          <ul>
            <li><a href='#'><BsEmojiSmile />Emoticons</a></li>
            <li><a href='#'><IoBrush />Themes</a></li>
            <li><a href='#'><BsBookmarkPlus />Plus Friends</a></li>
            <li><a href='#'><FaUserEdit />Account</a></li>
          </ul>
        </section>
        <section className='plus_friends'>
          <div className='plus_header'>
            <h2>Plus Frends</h2>
            <span><a href='#'><MdInfo />Learn More</a></span>
          </div>
          <ul className='plus_list'>
            <li><a href='#'><GiForkKnifeSpoon />Order</a></li>
            <li><a href='#'><IoMdAppstore />Store</a></li>
            <li><a href='#'><GrChannel />TV Channel/Radio</a></li>
            <li><a href='#'><FaPencilAlt />Creation</a></li>
            <li><a href='#'><MdOutlineCastForEducation />Education</a></li>
            <li><a href='#'><MdAccountBalance />Politics/Society</a></li>
            <li><a href='#'><FaWonSign />Finance</a></li>
            <li><a href='#'><MdVideocam />Movies/Music</a></li>
          </ul>
        </section>
        <section className='more_app'>
          <h2 className='blind'>앱 더보기</h2>
          <ul>
            <li><a href='#'><span className='app_icon'></span>Kakao Story</a></li>
            <li><a href='#'><span className='app_icon'></span>Path</a></li>
            <li><a href='#'><span className='app_icon'></span>Kakao Friends</a></li>
          </ul>
        </section>
      </main>
      <Nav
        className="more"
      />
    </div>
  )
}

export default More;