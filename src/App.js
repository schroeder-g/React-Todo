import React from 'react';
import { v4 as uuid } from 'uuid'
import Styled from 'styled-components'

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const StyledApp = Styled.div`
  width: 100%;
  height: 100%;
  color: #ecf0f1;
  background-color: #34495e;

  h2 {
    padding-top: 2%;
    margin-left: 4%;

  }
`

const todos = [
  { name : "Get the bag",
    id : uuid(),
    complete: false, 
  }
]

class App extends React.Component {
  constructor () {
    super()
    // you will need a place to store your state in this component.
    this.state = {
      todos
    }
  }
  // this component is going to take care of change handlers to work with your state
  toggleDone = id => {
    this.setState({ 
      todos : this.state.todos.map( todo => {
        if (todo.id === id ){
          return {
            ...todo, 
            complete: !todo.complete
          } 
        } 
        else { 
          return todo
        }
      })
    })
  }

  addTodo = todoName => {
    const newTodo = {
      name: todoName,
      id: uuid(),
      complete: false
    }
    this.setState({
      todos : [ ...this.state.todos, newTodo ]
    })
  }

  removeTodo = id => {
    this.state.todos.forEach( todo => {
      if (todo.id === id ){
        const i = this.state.todos.indexOf(todo)
        this.state.todos.splice(i)
      }
    })
  }

  render() {
    return (
      <StyledApp className="app">
        <h2>Let's get it done.</h2>
        <TodoList 
          todos={this.state.todos}
          toggleDone={this.toggleDone} 
          removeTodo={this.removeTodo} 
          />
        <TodoForm 
          addTodo= {this.addTodo} 
        />
      </StyledApp>
    );
  }
}

export default App;
