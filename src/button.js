import React from 'react'
import { addToCalculate } from './store'
import { connect } from 'react-redux'

const Button = ({ addToCalculate, data }) => {
    return (
        <button onClick={() => addToCalculate(data)}>
            {data}
        </button>
    )
}


const mapDispatchToProps = (dispatch) => (
    {
        addToCalculate: (data) => dispatch(addToCalculate(data))
    }
)

export default connect(null, mapDispatchToProps)(Button)




/* const ClearAll = ({ clearAll, data }) => (
    <button onClick={() => clearAll(data)} >
        clr
    </button>
) 

const mapDispatchToProps = (dispatch) => {
    return {
        clearAll: (bbb) => dispatch(clearAll(bbb))
    }
}

*/