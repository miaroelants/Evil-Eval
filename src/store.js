import {createStore} from 'redux'

//state
const initialState = {
    toCalculate: '',
    outcome: 88,
}

//actions
export function doCalculate() {
    return { type: 'DO_CALCULATE', }
}

export function addToCalculate(input) {
    return { type: 'ADD_TO_CALCULATE', payload: input}
}

export function clearAll() {
    return { type: 'CLEAR_ALL', }
}

//reducer
function reducer (state, action) {
    if (action.type === 'DO_CALCULATE') {
        const finalToCalculate = eval(state.toCalculate)
        return {
            ...state,
            outcome: finalToCalculate,
        }
    }
    else if (action.type === 'ADD_TO_CALCULATE') {
        return {
            ...state,
            toCalculate: state.toCalculate + action.payload,
        }
    }
    else if (action.type === 'CLEAR_ALL') {
        return {
            toCalculate: '',
            outcome : undefined
        }
    }
    else { return state }

}

//store
const store = createStore(reducer, initialState)

//(elke keer store wordt aangepast, wordt deze gelogd => testcode)
store.subscribe(function () {
    console.log("Updated store, new state:", store.getState())
})

//export
export default store