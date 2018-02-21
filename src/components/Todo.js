import React from 'react';
import style from './Todo.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className={style.Todo}>{this.props.task.id}: {this.props.task.text}
            <button onClick={() => this.props.remove(this.props.task.id)}>x</button>
            </li>
        );
    }
}

export default Todo;