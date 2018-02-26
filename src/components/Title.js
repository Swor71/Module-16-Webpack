import React from 'react';
import style from './Title.css';

const Title = () => (
    <div className={style.Title}>
        <h1>Your Favourite To-Do App!</h1>
        <h3>Tasks to complete: 
            <span className={style.counter}>{this.props.data.length}</span>
        </h3>
    </div>
);

export default Title;
