import React from 'react'
import { connect } from 'react-redux'


const ToCalculate = (props) => {
    const { toCalculate } = props;
    return (
        <div>
            {toCalculate}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        toCalculate: state.toCalculate,
    }
}

export default connect(mapStateToProps)(ToCalculate)

