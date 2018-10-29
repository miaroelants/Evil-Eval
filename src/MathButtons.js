import React from 'react'
import Button from './button'

// component
export const MathButtons = () => {
    const inputsMath = ["+", "-", "*", "/"]
    const inputsMathButtons = inputsMath.map((bleh) => <Button data={bleh} />)
    return (
        <div id="mathbuttons">
            {inputsMathButtons}
        </div>
    )
}