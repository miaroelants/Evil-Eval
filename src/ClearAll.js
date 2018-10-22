import React from 'react'
import { clearAll } from './store'
import { connect } from 'react-redux'

/*export class ClearAll extends React.Component {
    constructor(props) {
        super(props);
        this.handleClear = this.handleClear.bind(this)
    }

    handleClear() {
        this.props.store.dispatch(clearAll())
    }

    render() {
        return (

            

        )
    }
}*/

const ClearAll = ({ clearAll }) => (
    <button onClick={clearAll} >
        clr
    </button>
)

const mapDispatchToProps = (dispatch) => {
    return {
        clearAll: (bbb) => dispatch(clearAll(bbb))
    }
}




export default connect(null, mapDispatchToProps)(ClearAll)