import React from 'react'
import { clearAll } from './store'
import { connect } from 'react-redux'

// component
const ClearAll = ({ clearAll }) => (
    <button onClick={clearAll} className="roundbutton">
        clr
    </button>
)

// DispatchToProps
const mapDispatchToProps = (dispatch) => {
    return {
        clearAll: (bbb) => dispatch(clearAll(bbb))
    }
}

// connect
export default connect(null, mapDispatchToProps)(ClearAll)