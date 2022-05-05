import React, { useState, useEffect } from 'react'
import '../index.css'
import Display from './display.js'

const keysInfo = [
    { value: 'clear', dataKc: '67' },
    { value: 'toggle', dataKc: '84' },
    { value: 'mod', dataKc: '88' },
    { value: '1', dataKc: '49' },
    { value: '2', dataKc: '50' },
    { value: '3', dataKc: '51' },
    { value: '4', dataKc: '52' },
    { value: '5', dataKc: '53' },
    { value: '6', dataKc: '54' },
    { value: '7', dataKc: '55' },
    { value: '8', dataKc: '56' },
    { value: '9', dataKc: '57' },
    { value: '0', dataKc: '48' },
    { value: '.', dataKc: '190' },
    { value: 'div', dataKc: '47' },
    { value: 'mult', dataKc: '221' },
    { value: 'sub', dataKc: '189' },
    { value: 'sum', dataKc: '187' },
    { value: '13', dataKc: 'submit' },
]

export default function Buttons() {
    const handleClick = () => {
        return
    }

    return (
        <>
            <Display />
            <div id='buttonContainer'>
                <div id='numberContainer'>
                    <button
                        className='startNumberKey'
                        type='button'
                        value={keysInfo[0].value}
                        data-keycode='67'
                        onClick={handleClick}>
                        C
                    </button>
                    <button
                        className='startNumberKey'
                        type='button'
                        value={keysInfo[1].value}
                        data-keycode='84'>
                        +/-
                    </button>
                    <button
                        className='startNumberKey'
                        type='button'
                        value={keysInfo[2].value}
                        data-keycode='88'>
                        %
                    </button>
                    <button
                        className='numberKey'
                        type='button'
                        value={keysInfo[3].value}
                        data-keycode='49'>
                        1
                    </button>
                    <button
                        className='numberKey'
                        type='button'
                        value={keysInfo[4].value}
                        data-keycode='50'>
                        2
                    </button>
                    <button
                        className='numberKey'
                        type='button'
                        value={keysInfo[5].value}
                        data-keycode='51'>
                        3
                    </button>
                    <button
                        className='numberKey'
                        type='button'
                        value={keysInfo[6].value}
                        data-keycode='52'>
                        4
                    </button>
                    <button
                        className='numberKey'
                        type='button'
                        value={keysInfo[7].value}
                        data-keycode='53'>
                        5
                    </button>
                    <button
                        className='numberKey'
                        type='button'
                        value={keysInfo[8].value}
                        data-keycode='54'>
                        6
                    </button>
                    <button
                        className='numberKey'
                        type='button'
                        value={keysInfo[9].value}
                        data-keycode='55'>
                        7
                    </button>
                    <button
                        className='numberKey'
                        type='button'
                        value={keysInfo[10].value}
                        data-keycode='56'>
                        8
                    </button>
                    <button
                        className='numberKey'
                        type='button'
                        value={keysInfo[11].value}
                        data-keycode='57'>
                        9
                    </button>
                    <button
                        className='ceroNumberKey'
                        type='button'
                        value={keysInfo[12].value}
                        data-keycode='48'>
                        0
                    </button>
                    <button
                        className='numberKey'
                        type='button'
                        value={keysInfo[13].value}
                        data-keycode='190'>
                        .
                    </button>
                </div>
                <div id='operatorContainer'>
                    <button
                        className='operatorKey'
                        type='button'
                        value={keysInfo[14].value}
                        data-keycode='47'>
                        ÷
                    </button>
                    <button
                        className='operatorKey'
                        type='button'
                        value={keysInfo[15].value}
                        data-keycode='mult'>
                        x
                    </button>
                    <button
                        className='operatorKey'
                        type='button'
                        value={keysInfo[16].value}
                        data-keycode='sub'>
                        -
                    </button>
                    <button
                        className='operatorKey'
                        type='button'
                        value={keysInfo[17].value}
                        data-keycode='sum'>
                        +
                    </button>
                    <button
                        className='operatorEnterKey'
                        type='button'
                        value={keysInfo[18].value}
                        data-keycode='13'>
                        =
                    </button>
                </div>
            </div>
        </>
    )
}
