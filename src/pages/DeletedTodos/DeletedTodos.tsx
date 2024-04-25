import React from "react"
import s from './DeletedTodos.module.scss'
import Container from "../../components/Container"
import { useAppSelector } from "../../redux/hooks"
import allSelectors from "../../redux/selectors"
import TodoItem from "../../components/TodoItem"

const DeletedTodos: React.FC = () => {

    const allTodos = useAppSelector(allSelectors.getAllTodos).filter(item=>item.isDeleted)

    return (
        <div className={s.app}>
            <Container>
                <h1 className={s.title}>Deleted Todos</h1>
                
                {!!allTodos.length && 
                <ul className={s.todoList}>
                    {allTodos.map((item) => {
                        if(item) return <TodoItem key={item.id} todo={item}/>
                    }
                    )}
                </ul> 
                }
            </Container>
        </div>
    )
}

export default DeletedTodos 