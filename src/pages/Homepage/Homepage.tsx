import React, { useState } from "react" 
import Container from "../../components/Container"
import CreateForm from "../../components/CreateForm"
import Filter from "../../components/Filter"
import { useAppSelector } from "../../redux/hooks"
import allSelectors from "../../redux/selectors"
import sortIcon from '../../assets/images/sort.png'
import TodoItem from "../../components/TodoItem"
import s from './Homepage.module.scss'

const Homepage: React.FC = () => {
    const [sorted, setSorted] = useState(false)

    const allTodos = useAppSelector(allSelectors.getAllTodos).filter(item=>!item.isDeleted)
    const status = useAppSelector(allSelectors.getStatus)

    const filteredTodos = allTodos.map(todo => {
        if(status === null) return todo
        if(status === todo.status) return todo
        return null
    })
    if(sorted) filteredTodos.sort((a, b) => Number(a?.status) - Number(b?.status))
    return (
        <div className={s.app}>
            <Container>
                <h1 className={s.title}>My Todos</h1>
                <CreateForm />
                <Filter/>
                <div className={s.border}>
                    <button className={s.sortBtn} style={sorted ? {backgroundColor: "white"} : {}} onClick={():void => setSorted(!sorted)}>Sort <img src={sortIcon} alt="sort icon" className={s.sortImg}/></button>
                </div>
                {!!allTodos.length && 
                <ul className={s.todoList}>
                    {[...filteredTodos].reverse().map((item) => {
                        if(item) return <TodoItem key={item.id} todo={item}/>
                    }
                    )}
                </ul> 
                }
                {allTodos.length === 0 && <p className={s.propouse}>Add new Todo</p>}
            </Container>
            
        </div>
    )
}

export default Homepage 