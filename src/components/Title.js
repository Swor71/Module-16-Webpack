import React from 'react';
import style from './Title.css';

class Title extends React.Component {
    render() {
        return (
            <div className={style.Title}>
                <h1>App Title Here</h1>
                <h3>Tasks to complete:
                    <span></span>
                </h3>
            </div>
        )
    }
}

export default Title;