import React from 'react'
import {connect} from 'react-redux'
import {addToCalculate} from './store'


export class Buttons extends React.Component {
    constructor(props){
        super(props);
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    handleUpdate(input) {
        this.props.addToCalculate(input)
    }

    render () {
        // const handleUpdate = (input) => {
        //    this.props.addToCalculate(input) 
        // }
        return (
            <div>
                <div>
                {//<button onClick={this.handleUpdate(0)}>0</button> 
                }
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                </div>
                <div>
                <button>+</button>
                <button>-</button>
                <button>*</button>
                <button>/</button>
                </div>
            </div>
        )
        }
}

/*

// const mapDispatchToProps = {
    // ... normally is an object full of action creators
// }; 


const mapDispatchToProps = (dispatch) => ({
    addToCalculate: input => dispatch(addToCalculate(input))
}) 

export default connect(null, mapDispatchToProps)(Buttons)

*/