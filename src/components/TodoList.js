// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Styled from 'styled-components'
import Todo from './Todo'

const StyledList = Styled.div`
 width: 100%; 
 height: auto;
 display: flex; 
 flex-flow: row wrap;
 justify-content: space-around;
 background-color: #2c3e50;
`

const TodoList = (props) => {
    return (
        <StyledList className="todoList">
            {props.todos.map( todo => {
                return (
                    <Todo 
                    todo={todo} 
                    toggleDone={props.toggleDone}
                    removeTodo={props.removeTodo}
                    />
                )
            })}
        </StyledList>
    )
}

export default TodoList