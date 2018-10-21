import React from 'react'
import {doCalculate} from './store'
import {connect} from 'react-redux'

export class Evaluate extends React.Component {
    constructor(props){
        super(props);
        this.handleEvaluate = this.handleEvaluate.bind(this)
    }

    handleEvaluate(){
        this.props.store.dispatch(doCalculate())
      }

    render(){
        return (
            
                <button onClick = {this.handleEvaluate} >
                    =
                </button>
            
        )
    }
}

const mapDispatchToProps = (dispatch) => doCalculate 




export default connect(null, mapDispatchToProps)(Evaluate)


  
