import React, { Component } from 'react'
import Styled from 'styled-components'

const StyledForm = Styled.form`
    padding: 4%; 
`

export default class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todoText : ""
        }
    }

    handleChanges = e => {
        this.setState({
            todoText : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addTodo(this.state.todoText)
    }

    render() {
        return (
            <StyledForm className="todo-form" onSubmit={this.handleSubmit}>
                <label htmlFor="add-todo">Add a Todo: </label>
                <input
                    name="add-todo"
                    type="text"
                    placeholder="bake cookies with grandma"
                    onChange={this.handleChanges} />
                <button>Add</button>
            </StyledForm>
        )
    }
}
