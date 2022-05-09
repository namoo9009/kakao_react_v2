import React from 'react';
import Header from '../conponents/Header';


import '../style/style.scss';
import '../style/Profile.scss';
import { IoSettingsSharp, IoClose, IoChatbubbleSharp } from "react-icons/io5";
import { FaUser, FaPencilAlt } from "react-icons/fa";
import { useLocation } from 'react-router-dom';



function Profile() {
  const location = useLocation();
  const  { name, email, img, msg, bg } = location.state;

  return (
    <div className='profile'>
      <Header 
        leftItem={<IoClose />}
        rightItem={<FaUser />}
      />
      <main className='backgorund_main'>
        <section className='backgorund' style={{backgroundImage:`url(${bg})`}}>
          <h2 className='blind'>My Profile background</h2>
        </section>
        <section className='profile'>
          <h2 className='blind'>My profile info</h2>
          <div className='profile_img' style={{backgroundImage:`url(${img})`}}></div>
          <div className='profile_content'>
            <span className='profile_name'>{name}</span>
            <input type='mail' className='profile_email' placeholder='UserID@gmail.com' />
            <ul className='profile_menu'>
              <li>
                <a href='#'>
                  <span className='icon'><IoChatbubbleSharp /></span>
                  My Channel
                </a>
              </li>
              <li>
                <a href='#'>
                  <span className='icon'><FaPencilAlt /></span>
                  Edit Profile
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Profile;