import { createSlice, PayloadAction  } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import  {IState, ITodo} from "../interfaces/interfaces"

const initialState: IState = {
  allTodos: [],
  filterStatus: null,
}

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addNewTodo: (state, action: PayloadAction<ITodo>) => {
      state.allTodos = [...state.allTodos, action.payload]
      toast.success("New Todo Created!!")
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      const newArray = state.allTodos.map(todo => {
        if(todo.id === action.payload){
          return {...todo, isDeleted: true}
        }
        return todo;
      })
      state.allTodos = [...newArray]
      toast.warning("Todo is deleted!")
    },
    deleteFully: (state, action: PayloadAction<string>) => {
      const newArray = state.allTodos.filter(todo =>todo.id !== action.payload)
      state.allTodos = [...newArray]
      toast.error("Todo is deleted forever!")
    },
    changeTodoStatus: (state, action: PayloadAction<string>) => {
      const newArray = state.allTodos.map(todo => {
        if(todo.id === action.payload) {
          return {...todo, status: !todo.status}
        }
        return todo
      })
      state.allTodos = [...newArray]
    },
    changeFilter: (state, action: PayloadAction<boolean | null>) => {
      state.filterStatus = action.payload
    } 
  },
})

const reducer = todoSlice.reducer

export const { addNewTodo, deleteTodo, deleteFully, changeTodoStatus, changeFilter } = todoSlice.actions
export default reducer