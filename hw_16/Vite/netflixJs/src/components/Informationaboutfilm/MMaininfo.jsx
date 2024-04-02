import React from 'react';
import style from './MMaininfo.module.css'
import starsgropu from './images/Group.png'
import circleimg from './images/antdesignplaycirclefilled.png'

function MMaininfo() {

        let Article = 'In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.'
        return (
            <>
                <div className={style.bigtext}>
                    Stranger Things
                </div>
                <div className={style.movieabout}>
                    2019<span className={style.director01}>DIRECTOR:</span><span className={style.grey}>Shawn Levy</span><span className={style.seasons01}>seasons:</span><span className={style.grey}>3 (5 Episodes)</span>
                </div>
                <div className={style.movieinformation}>
                    <h4 className={style.textinfo}>{Article}</h4>
                </div>
                <div className={style.stars}>
                    <img src={starsgropu} alt="img"/>
                </div>
                <div className={style.watchbuts}>
                    <button className={style.watchnow}>
                        <h5 className={style.streamnow}>STREAM NOW</h5>
                        <img src={circleimg} alt="img"/>
                    </button>
                    <button className={style.watchall}>
                        <h5 className={style.allepisodes}>ALL EPISODES</h5>
                    </button>
                </div>
            </>
        );
}

export default MMaininfo;