import React from 'react'
import {connect} from 'react-redux'
 

export const Outcome = () => {
    return (
        <div>
            {outcome}
        </div>
    )
}

const mapStateToProps = (state) => ({
    outcome: state.outcome,
}) 

export default connect(mapStateToProps)(Outcome)