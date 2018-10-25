import React from 'react'
import { connect } from 'react-redux'

//component 
const Outcome = (props) => {
    const { outcome } = props;
    return (
        <div>
            {outcome}
        </div>
    )
}

// StateToProps
const mapStateToProps = (state) => ({
    outcome: state.outcome,
})

// connect
export default connect(mapStateToProps)(Outcome)