import React from 'react'
import '../index.css'
import NumberFormat from 'react-number-format'

export default function Display({ input, startState }) {
    return (
        <div id='display'>
            <div id='text'>
                {input !== '' || input === '0' ? (
                    <NumberFormat
                        value={input}
                        displayType={'text'}
                        thousandSeparator={true}
                    />
                ) : (
                    <NumberFormat
                        value={startState}
                        displayType={'text'}
                        thousandSeparator={true}
                    />
                )}
            </div>
        </div>
    )
}
