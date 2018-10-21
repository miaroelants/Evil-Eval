import React from 'react'
import {connect} from 'react-redux'
 

export const ToCalculate = () => {
    return (
        <div>
            {this.props.toCalculate}
        </div>
    )
}

const mapStateToProps = (state) => ({
    toCalculate: state.toCalculate,
})

export default connect(mapStateToProps)(ToCalculate)