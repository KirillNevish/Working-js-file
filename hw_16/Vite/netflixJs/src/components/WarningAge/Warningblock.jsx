import React from 'react';
import style from './Warningblock.module.css'

function Warningblock() {
    return (
        <>
        <div className={style.warning}>
            <div className={style.firstpartw}>
                <h6>16+</h6>
            </div>
            <div className={style.secondpartw}></div>
        </div> 
        </>
    );
}

export default Warningblock;