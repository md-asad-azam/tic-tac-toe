import React from 'react'

export const Square = ({ value, handleClick }) => {
    return (
        <button onClick={handleClick}>{value}</button>
    )
}
