import React from 'react';
import style from './Todo.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className={style.Todo}>{this.props.task.id}: {this.props.task.text}</li>
        );
    }
}

export default Todo;