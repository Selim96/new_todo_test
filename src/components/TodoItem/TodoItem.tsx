import React, { memo } from "react"
import { ITodo } from "../../interfaces/interfaces"
import s from './TodoItem.module.scss'
import { useAppDispatch } from "../../redux/hooks"
import { deleteTodo, deleteFully, changeTodoStatus } from "../../redux/slice"
import iconDelete from '../../assets/images/trash.png'
import iconX from '../../assets/images/clear.png'

interface IProp {
  todo: ITodo
}

const TodoItem: React.FC<IProp> = memo(({todo}) => {
  console.log('todo render')

  const {id, title, status, isDeleted} = todo
  const dispatch = useAppDispatch()

  const deleteTodoClick = (e: React.MouseEvent<HTMLElement>):void => {
    dispatch(deleteTodo(id))
  }

  const deleteFullyClick = (e: React.MouseEvent<HTMLElement>):void => {
    dispatch(deleteFully(id))
  }

  const changeStatus = (e: React.MouseEvent<HTMLElement>): void => {
    if(e.currentTarget !== e.target) return
    dispatch(changeTodoStatus(id))
  }

  return (
    <li className={s.item} onClick={changeStatus} style={{backgroundColor: !status ? "var(--red-label)" : 'var(--green-label)'}}>
      <p className={s.title}>{title}</p>
      <button type="button" className={s.button} onClick={!isDeleted ? deleteTodoClick : deleteFullyClick}><img src={!isDeleted ? iconDelete : iconX} alt="icon" className={s.image}/></button>
    </li>
  )
})

export default TodoItem