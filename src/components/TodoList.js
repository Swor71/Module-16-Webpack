import React from 'react';
import style from './TodoList.css';
import Todo from './Todo.js';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let list;
        
        if (this.props.list) {
            list = this.props.list.map(task => {
                return (
                    <Todo key={task.id} task={task} remove={this.props.remove}/>
                );
            })
        }

        return (
            <ul className={style.TodoList}>
                {list}
            </ul>
        );
    }
}

export default TodoList;