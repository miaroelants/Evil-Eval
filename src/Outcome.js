import React from 'react'
import { connect } from 'react-redux'


const Outcome = (props) => {
    const { outcome } = props;
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