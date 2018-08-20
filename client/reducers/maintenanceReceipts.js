const initialState = {
    counter:0
}

const todos = (state = initialState, action) => {
    switch (action.type) {
        // case 'ADD_TODO':
        //     return [
        //         ...state,
        //         {
        //             id: action.id,
        //             text: action.text,
        //             completed: false
        //         }
        //     ]
        // case 'TOGGLE_TODO':
        //     return state.map(todo =>
        //         (todo.id === action.id)
        //             ? { ...todo, completed: !todo.completed }
        //             : todo
        //     )
        case 'INC_ONE':
            console.log("reducer called inc 1")
            return {
                ...state,
                value: 1
            }
        case 'DEC_ONE':
            console.log("reducer called dec 1")
            return {
                ...state,
                value: -1
            }
        default:
            return state
    }
}

export default todos