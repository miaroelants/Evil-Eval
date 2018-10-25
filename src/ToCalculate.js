import React from 'react'
import { connect } from 'react-redux'

// component
const ToCalculate = ({ toCalculate }) => {
    return (
        <div id="toCalculate" >
            {toCalculate}
        </div>
    )
}

// StateToProps
const mapStateToProps = (state) => {
    return {
        toCalculate: state.toCalculate,
    }
}

// connect
export default connect(mapStateToProps)(ToCalculate)

