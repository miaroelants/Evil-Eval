import React from 'react'
import { doCalculate } from './store'
import { connect } from 'react-redux'

// component
const Evaluate = ({ doCalculate }) => {
    return (
        <button onClick={doCalculate} className="roundbutton" id="evaluate">
            =
        </button>
    )
}

// DispatchToProps
const mapDispatchToProps = (dispatch) => {
    return {
        doCalculate: () => dispatch(doCalculate()),
    }
}

// connect
export default connect(null, mapDispatchToProps)(Evaluate)



