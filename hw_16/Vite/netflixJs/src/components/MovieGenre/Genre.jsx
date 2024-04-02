import React from 'react';
import style from './Genre.module.css'
import PropTypes from 'prop-types';

Genre.propTypes = {
    MovieGenres:PropTypes.array
};

function Genre(props) {
    const listEl = props.MovieGenres.map((item, index)=>{
        return <h2 className={style.types} key={index}>{item.name}</h2>
    })
    return (
        <div className={style.alltypes}>
            {listEl}
        </div>
    );
}

export default Genre;