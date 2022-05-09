import React from 'react';
import Header from '../conponents/Header';
import Nav from '../conponents/Nav';

import '../style/Find.scss';
import { FaAddressBook, FaQrcode } from "react-icons/fa";
import { MdPhoneAndroid, MdMail } from "react-icons/md";

function Find() {
  return (
    <div>
        <Header 
          bgColor="bgColor"
          title="Find"
          leftItem="Edit"
        />
        <main>
          <ul className='find_method'>
            <li>
              <a href='#'><FaAddressBook />Find</a>
            </li>
            <li>
              <a href='#'><FaQrcode />QR Code</a>
            </li>
            <li>
              <a href='#'><MdPhoneAndroid />Shake</a>
            </li>
            <li>
              <a href='#'><MdMail />Invite via SNS</a>
            </li>
          </ul>
          <section className='recommend_section'>
            <div className='recommend_header'><h2>Recommended Friends</h2></div>
            <ul>
              <li>You Have no recommended friends</li>
            </ul>
          </section>
        </main>
        <Nav
          className="find"
        />
    </div>
  )
}

export default Find;