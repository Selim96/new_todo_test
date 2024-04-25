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
                
                {!!allTodos.length ?
                <ul className={s.todoList}>
                    {allTodos.map((item) => <TodoItem key={item.id} todo={item}/>)}
                </ul> : <p className={s.propouse}>There's nothing here </p>
                }
            </Container>
        </div>
    )
}

export default DeletedTodos 