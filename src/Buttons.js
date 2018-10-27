import React from 'react'
import Button from './button'

// component
export const Buttons = () => {
    const inputsNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    const inputsNumbersButtons = inputsNumbers.map(bleh => <Button data={bleh} id={bleh} />)
    return (
        <div>
            {inputsNumbersButtons}
        </div>
    )
}




