import React from "react"
import s from './Filter.module.scss'
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import allSelectors from "../../redux/selectors"
import { changeFilter } from "../../redux/slice"

const Filter: React.FC = () => {
    
  const dispatch = useAppDispatch()
  
  const allTodos = useAppSelector(allSelectors.getAllTodos).filter(item=>!item.isDeleted)
  const status = useAppSelector(allSelectors.getStatus)
  const countAll = allTodos.length
  let countCompleted = 0
  let countCurrent = 0
  allTodos.forEach(todo => {
    if(todo.status) {
      countCompleted++
    } else {
      countCurrent++
    }
  })

  const onChangeFilter = (e: React.MouseEvent<HTMLElement>):void =>{
    const id = e.currentTarget.id
    if(id === '1') dispatch(changeFilter(null))
    if(id === '2') dispatch(changeFilter(true))
    if(id === '3') dispatch(changeFilter(false))
  }
   
  return (
    <div className={s.filter_box}>
      <div className={s.button} key={1} id="1" onClick={onChangeFilter}
        style={{backgroundColor: status === null ? "var(--button)" : ''}}
      ><p>All</p><span>{countAll}</span></div>
      <div className={s.button} key={2} id="2" onClick={onChangeFilter}
        style={status === true ? {backgroundColor:  "var(--green-label)", border: 'none'} : {}}
      ><p>Completed</p><span>{countCompleted}</span></div>
      <div className={s.button} key={3} id="3" onClick={onChangeFilter}
        style={status === false ? {backgroundColor:  "var(--red-label)", border: 'none'} : {}}
      ><p>Current</p><span>{countCurrent}</span></div>
    </div>
  )
}

export default Filter