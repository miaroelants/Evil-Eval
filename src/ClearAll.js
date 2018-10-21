import React from 'react'
import {clearAll} from './store'
import {connect} from 'react-redux'

export class ClearAll extends React.Component {
    constructor(props){
        super(props);
        this.handleClear = this.handleClear.bind(this)
    }

    handleClear(){
        this.props.store.dispatch(clearAll())
      }

    render(){
        return (
            
                <button onClick = {this.handleClear} >
                    =
                </button>
            
        )
    }
}

const mapDispatchToProps = (dispatch) => clearAll 




export default connect(null, mapDispatchToProps)(ClearAll)