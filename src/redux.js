const {createStore}=redux;
const initState={
    todos:[],
    posts:[]
}
function myreducer(state=initState, action){
    console.log(action,state)
    if(action.type=='ADD_TODO'){
        return{
            todos:{...state.todos,action.todo}
        }
    }
}
const store=createStore(myreducer)
const todoAction={type:'ADD_TODO', TODO:'buy Milk'}
store.dispatch(todoAction)