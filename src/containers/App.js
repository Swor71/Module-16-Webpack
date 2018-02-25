import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js';
import TodoForm from '../components/TodoForm.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    finished: false,
                    text: 'clean the room'
                },{
                    id: 2,
                    finished: false,
                    text: 'wash the dishes'
                },{
                    id: 3,
                    finished: false,
                    text: 'feed my cat'
                }
            ]
        };
    }
    addTodo(value) {
        const todo = {
            text: value,
            finished: false,
            id: uuid.v4(),
        };
        const data = [todo, ...this.state.data];
        this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    completeTask(id) {       
        let list = this.state.data;
        
        let index = list.findIndex((task) => {
            return (task.id == id);
        });

        let cut = list.splice(index, 1)

        cut[0].finished = !cut[0].finished;

        const toBottom = list.concat(cut);

        this.setState({data: toBottom});   
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <div className={style.container}>
                    <Title data={this.state.data}/>
                    <TodoForm add={this.addTodo.bind(this)} />
                    <TodoList list={this.state.data} remove={this.removeTodo.bind(this)} taskDone={this.completeTask.bind(this)} />
                </div>
            </div>
        );
    }
}

export default App;