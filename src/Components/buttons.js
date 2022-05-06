import React, { useState, useEffect } from 'react'
import '../index.css'
import Display from './display.js'

export default function Buttons() {
    const [startState, setStartState] = useState('')
    const [currentState, setCurrentState] = useState('')
    const [input, setInput] = useState('0')
    const [operator, setOperator] = useState(null)
    const [result, setResult] = useState(false)

    var disp = document.getElementById('display')
    var err = document.createElement('div')
    err.id = 'error'
    err.innerHTML = 'ERROR'
    err.style.fontSize = '60px'
    err.style.position = 'absolute'
    err.style.bottom = '20px'
    err.style.right = '10px'
    var error = document.getElementById('error')

    const inputNum = (e) => {
        if (currentState.includes('.') && e.target.innerText === '.') return

        if (result) {
            setStartState('')
        }
        currentState
            ? setCurrentState((pre) => pre + e.target.innerText)
            : setCurrentState(e.target.innerText)
        setResult(false)
    }

    useEffect(() => {
        // setInput(currentState)
        if (currentState.length >= 10) {
            return
        } else {
            setInput(currentState)
        }
    }, [currentState])

    useEffect(() => {
        setInput('0')
    }, [])

    const reset = () => {
        setStartState('0')
        setCurrentState('')
        setInput('0')
        error.remove()
    }

    const minusPlus = () => {
        if (currentState.charAt(0) === '-') {
            setCurrentState(currentState.substring(1))
        } else {
            setCurrentState('-' + currentState)
        }
    }

    const operatorType = (e) => {
        setResult(false)
        setOperator(e.target.innerText)

        if (currentState === '') return

        if (startState !== '') {
            equal()
        } else {
            setStartState(currentState)
            setCurrentState('')
        }
    }

    const equal = (e) => {
        if (e?.target.innerText === '=') {
            setResult(true)
        }
        let calc
        switch (operator) {
            case '÷':
                calc = String(parseFloat(startState) / parseFloat(currentState))
                break
            case '+':
                calc = String(parseFloat(startState) + parseFloat(currentState))
                break
            case '-':
                calc = String(parseFloat(startState) - parseFloat(currentState))
                break
            case 'x':
                calc = String(parseFloat(startState) * parseFloat(currentState))
                break
            case '%':
                calc = String(parseFloat(startState) % parseFloat(currentState))
                break

            default:
                return
        }

        if (calc.length > 9) {
            disp.append(err)
            setInput('')
            setStartState('')
            setCurrentState('')
            console.log(startState)
            console.log(currentState)
            console.log(input)
            console.log(calc)
        } else {
            setInput('')
            setStartState(calc)
            setCurrentState('')
            console.log(calc)
        }
    }

    return (
        <>
            <Display input={input} startState={startState} />
            <div id='buttonContainer'>
                <div id='numberContainer'>
                    <button id='startNumberKey' type='button' onClick={reset}>
                        C
                    </button>
                    <button
                        id='startNumberKey'
                        type='button'
                        onClick={minusPlus}>
                        +/-
                    </button>
                    <button
                        id='startNumberKey'
                        type='button'
                        onClick={operatorType}>
                        %
                    </button>
                    <button id='numberKey' type='button' onClick={inputNum}>
                        1
                    </button>
                    <button id='numberKey' type='button' onClick={inputNum}>
                        2
                    </button>
                    <button id='numberKey' type='button' onClick={inputNum}>
                        3
                    </button>
                    <button id='numberKey' type='button' onClick={inputNum}>
                        4
                    </button>
                    <button id='numberKey' type='button' onClick={inputNum}>
                        5
                    </button>
                    <button id='numberKey' type='button' onClick={inputNum}>
                        6
                    </button>
                    <button id='numberKey' type='button' onClick={inputNum}>
                        7
                    </button>
                    <button id='numberKey' type='button' onClick={inputNum}>
                        8
                    </button>
                    <button id='numberKey' type='button' onClick={inputNum}>
                        9
                    </button>
                    <button id='ceroNumberKey' type='button' onClick={inputNum}>
                        0
                    </button>
                    <button id='numberKey' type='button' onClick={inputNum}>
                        .
                    </button>
                </div>
                <div id='operatorContainer'>
                    <button
                        id='operatorKey'
                        type='button'
                        onClick={operatorType}>
                        ÷
                    </button>
                    <button
                        id='operatorKey'
                        type='button'
                        onClick={operatorType}>
                        x
                    </button>
                    <button
                        id='operatorKey'
                        type='button'
                        onClick={operatorType}>
                        -
                    </button>
                    <button
                        id='operatorKey'
                        type='button'
                        onClick={operatorType}>
                        +
                    </button>
                    <button id='operatorEnterKey' type='button' onClick={equal}>
                        =
                    </button>
                </div>
            </div>
        </>
    )
}
