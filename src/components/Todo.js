import React from 'react'
import Styled from 'styled-components'

const StyledTodo = Styled.div`
   display: flex; 
   padding: 3%;
   width: 39%; 
   min-width: 250px;
   /* min-height: 130px; */
   text-align: center;
   justify-content: center;
   align-items: center;
   margin: 1%; 
   border: 1px solid #9b59b6;
   box-shadow: 1px 1px 1px #7f8c8d  ;
   border-radius: 5px;
   background-color: #8e44ad;

   :hover{
       text-decoration: underline; 
       background-color: #9b59b6;
   }



   &.done {
        text-decoration: line-through;
        color: #e74c3c;
    }

    button {
        position: relative;
        right: -180px; 
        top: -45px;
    }

`

 const Todo = (props) => {
    return (
        <StyledTodo
            onClick={() => props.toggleDone(props.todo.id)}
            className={ props.todo.complete ? "todo done" : "todo not-done"}
        >
            <h3>{props.todo.name}</h3>
            {/* <button 
                onClick={props.removeTodo(props.todo.id)}>
                Delete
            </button> */}
        </StyledTodo>
    )
}

export default Todo