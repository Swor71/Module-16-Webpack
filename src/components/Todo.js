import React from 'react';
import style from './Todo.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    isDone() {
        if (this.props.task.finished === true) {
            return style.strike
        }
    }
    render() {
        return (
            <li className={`${style.Todo} ${this.isDone()}`}>{this.props.task.text}
                <div className={style.buttons}>
                    <button className={style.btnDone} onClick={() => this.props.taskDone(this.props.task.id)}>&#10004;</button>
                    <button className={style.btnDelete} onClick={() => this.props.remove(this.props.task.id)}>x</button>
                </div>
            </li>
        );
    }
}

export default Todo;