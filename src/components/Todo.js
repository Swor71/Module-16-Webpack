import React from 'react';
import style from './Todo.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul className={style.Todo}>{this.props.task.id}: {this.props.task.text}</ul>
        );
    }
}

export default Todo;