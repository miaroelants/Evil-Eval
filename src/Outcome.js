import React from 'react'
import {connect} from 'react-redux'
 

export const Outcome = () => {
    return (
        <span>
            {this.props.outcome}
        </span>
    )
}

const mapStateToProps = (state) => ({
    outcome: state.outcome,
})

export default connect(mapStateToProps)(Outcome)