import React from 'react'

//this is a functional component 

const Todo = props => {
    return (
        <li>{props.text}</li>
    )
}

export default Todo;