import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    const { todos } = props;
    return (
        <ul className='mian'>
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard todoIndex={todoIndex} {...props} key={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                )
            })}
        </ul>
    )
}
