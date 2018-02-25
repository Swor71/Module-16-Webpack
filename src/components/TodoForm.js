import React from 'react';
import style from './TodoForm.css';
import TodoList from './TodoList.js';

class TodoForm extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }
    
    handleOnSubmit(event) {
        event.preventDefault();
        if (this.state.inputValue === '') {
            alert('You need to add description');
        } else {
            this.props.add(this.state.inputValue);
            this.state.inputValue = '';
        }
    }

    handleOnChange(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit.bind(this)} className={style.TodoForm}>
                <input onChange={this.handleOnChange.bind(this)} value={this.state.inputValue} placeholder={'What needs doing?'}></input>
                <button>+</button>
            </form>
        );
    }
}

export default TodoForm;