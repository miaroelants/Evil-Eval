import React from 'react'
import Button from './button'



export class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    handleUpdate(input) {
        this.props.addToCalculate(input)
    }


    render() {
        const butTon = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/"]
        const butTonList = butTon.map(bleh => <Button data={bleh} />)
        return (
            <div>
                {butTonList}
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