import React from 'react'
import {connect} from 'react-redux'
 

export const ToCalculate = (props) => {
    const {toCalculate} = props;
    return (
        <div>
            {toCalculate}
        </div>
    )
}

const mapStateToProps = (state) => ({
    toCalculate: state.toCalculate,
})

export default connect(mapStateToProps)(ToCalculate)

