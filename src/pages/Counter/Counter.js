import React, { useReducer } from 'react';

const Counter = () => {
    const initialState = 0;
    const reducer = (state, action) => {
        console.log(action);
        if (action.type === 'INCREMENT') {
            return state + 1;
        }
        else if (action.type === 'DECREMENT') {
            return state - 1;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className='box-container'>
            <div className='box'>
                <p>{state}</p>
                <div className='btn-container'>
                    <button className='btn btn-inc' onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
                    <button className='btn btn-dec' onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
                </div>
            </div>
        </div>

    );
};

export default Counter;