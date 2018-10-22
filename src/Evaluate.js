import React from 'react'
import { doCalculate } from './store'
import { connect } from 'react-redux'

class Evaluate extends React.Component {
    constructor(props) {
        super(props);
        this.handleEvaluate = this.handleEvaluate.bind(this)
    }

    handleEvaluate() {
        this.props.doCalculate()
    }

    render() {
        return (

            <button onClick={this.handleEvaluate} >
                =
                </button>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        foo: 123,
        doCalculate: () => dispatch(doCalculate()),
    }
}





export default connect(null, mapDispatchToProps)(Evaluate)



