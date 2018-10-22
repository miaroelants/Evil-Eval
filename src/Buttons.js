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
        return (
            <div>
                <div>
                    <Button data="0" />
                    <Button data="1" />
                    <Button data="2" />
                    <Button data="3" />
                    <Button data="4" />
                    <Button data="5" />
                    <Button data="6" />
                    <Button data="7" />
                    <Button data="8" />
                    <Button data="9" />
                </div>
                <div>
                    <Button data="+" />
                    <Button data="-" />
                    <Button data="*" />
                    <Button data="/" />
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