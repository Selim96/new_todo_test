export interface ITodo {
    id: string,
    title: string,
    status: boolean,
    isDeleted: boolean
}


export interface IState {
    allTodos: ITodo[],
    filterStatus: boolean | null,
};