import React from 'react'
import { Link } from 'react-router-dom';

import { IoAirplane, IoWifi, IoBluetooth, IoBatteryFull } from "react-icons/io5";
import '../style/HeaderComponent.scss';


function header({bgColor, title, count, leftItem, rightItem, centerItem, linkTo}) {
  return (
    <header>
        <div className='statusBar'>
            <div className='leftItem'>
                <span>
                    <IoAirplane />
                </span>
                <span>
                    <IoWifi />
                </span>
            </div>
            <div className='centerItem'>
                <span>17</span>:<span>33</span>
            </div>
            <div className='rightItem'>
                <span className='bluetooth'>
                    <IoBluetooth />
                </span>
                <span className='percent'>100%</span>
                <span>
                    <IoBatteryFull />
                </span>
            </div>
        </div>
        <div className='titleBar'>
            <h1 className='centerItem'>{title}
                <span className='count'>{count}</span>
                <span className='downItem'>{centerItem}</span>
            </h1>
            <div className='leftItem'>
                <Link to='/'>{leftItem}</Link>
            </div>
            <div className='rightItem'>
                <a href='#'>{rightItem}</a>
            </div>
        </div>
    </header>
  )
}

export default header;