import { createStore } from 'redux'

//state
const initialState = {
    toCalculate: ' ',
    hasError: false
}

//actions
export function doCalculate() {
    return { type: 'DO_CALCULATE', }
}

export function addToCalculate(input) {
    return { type: 'ADD_TO_CALCULATE', payload: input }
}

export function clearAll() {
    return { type: 'CLEAR_ALL', }
}


//reducer
function reducer(state, action) {
    if (action.type === 'DO_CALCULATE') {
        try {
            // eslint-disable-next-line
            const finalToCalculate = eval(state.toCalculate)
            return {
                ...state,
                toCalculate: finalToCalculate,
            }
        }
        catch (e) {
            return {
                toCalculate: "ERROR",
                hasError: true,
            }
        }


    }
    else if (action.type === 'ADD_TO_CALCULATE') {
        if (state.hasError === true)
            return state
        else
            return {
                ...state,
                toCalculate: state.toCalculate + action.payload,
            }


    }
    else if (action.type === 'CLEAR_ALL') {
        return {
            toCalculate: '',
            hasError: false,
        }
    }
    else { return state }

}

//store
const store = createStore(reducer, initialState)

//test
store.subscribe(function () {
    console.log("Updated store, new state:", store.getState())
})

//export
export default store