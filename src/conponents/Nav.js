import React from 'react'
import { Link } from 'react-router-dom';

import '../style/NavComponent.scss';
import { IoChatbubbleSharp, IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";

function nav({ className, centerItem }) {
  return (
    <nav className={`navTab ${className}`}>
        <ul>
            <li>
                <Link to='/'><FaUser className='icon' />Friends</Link>                
            </li>
            <li>
              <span></span>
              <Link to='/chats'><IoChatbubbleSharp className='icon' />Chats</Link>
            </li>
            <li>
            <span></span>
              <Link to='/find'><IoSearch className='icon' />Find</Link>
            </li>
            <li>
            <span></span>
              <Link to='/more'><MdMoreHoriz className='icon' />More</Link>
            </li>
        </ul>
    </nav>
  )
}

export default nav;