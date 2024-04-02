import React from 'react';
import style from './Header.module.css'
import netflixlogo from './Headerimages/netflixlogo.png'
import avatar from './Headerimages/youravatar.png'
import search from './Headerimages/Vector.png'

function Header() {
    return (
    <header>
        <div className={style.netflixtext}>
            <div className={style.nlogo}>
                <img src={netflixlogo} alt="img"/>
            </div>
            <div className={style.ndate}>
                <h3 className={style.datetext}>
                    Friday July 8th
                </h3>
            </div>
        </div>
        <div className={style.netflixavatar}>
            <button className={style.searchup}>
                <img src={search} alt="img"/>
            </button>
            <button className={style.youravatar}>
                <img src={avatar} alt="img"/>
            </button>
        </div>
    </header>
    );
}

export default Header;