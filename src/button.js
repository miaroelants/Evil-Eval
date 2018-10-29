import React from 'react'
import { addToCalculate } from './store'
import { connect } from 'react-redux'

// component
const Button = ({ addToCalculate, data, id }) => {
    return (
        <button onClick={() => addToCalculate(data)} className="roundbutton" >
            {data}
        </button>
    )
}

// DispatchToProps
const mapDispatchToProps = (dispatch) => (
    {
        addToCalculate: (data) => dispatch(addToCalculate(data))
    }
)

// connect
export default connect(null, mapDispatchToProps)(Button)


