
import React, { useState } from 'react';
import style from './Popularfilms.module.css';
import Breakingbad from './images/Rectangle 6.png';
import Therain from './images/Rectangle 7.png';
import Lifinayear from './images/Rectangle 8.png';
import Moneyheist from './images/Rectangle 9.png';
import Squidgame from './images/Rectangle 11.png';

function Popularfilms() {
    const [images, setImages] = useState([Breakingbad, Therain, Lifinayear, Moneyheist, Squidgame]);

    // Function to handle click on the left button
    const handleLeftButtonClick = () => {
        setImages(prevImages => {
            const swappedImages = [...prevImages];
            const lastImage = swappedImages.pop(); 
            swappedImages.unshift(lastImage); 
            return swappedImages;
        });
    };

    // Function to handle click on the right button
    const handleRightButtonClick = () => {
        setImages(prevImages => {
            const swappedImages = [...prevImages]; 
            const firstImage = swappedImages.shift(); 
            swappedImages.push(firstImage);
            return swappedImages;
        });
    };

    return (
        <>
            <div className={style.popthisweek}>
                <h4 className={style.textend}>POPULAR THIS WEEK</h4>
                <div className={style.buttonsend}>
                    <button className={style.buttonfirst} onClick={handleLeftButtonClick}>
                        {'<'}
                    </button>
                    <button className={style.buttonsecond} onClick={handleRightButtonClick}>
                        {'>'}
                    </button>
                </div>
            </div>
            <div className={style.films}>
                {}
                {images.map((image, index) => (
                    <div className={style.film} key={index}>
                        <img src={image} alt="img" />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Popularfilms;