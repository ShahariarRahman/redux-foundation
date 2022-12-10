import React, { useReducer } from 'react';

const Counter = () => {
    const initialState = 0;
    const reducer = (state, action) => {
        console.log(action);
        if (action.type === 'INCREMENT') {
            return state + action.payload.count;
        }
        else if (action.type === 'DECREMENT') {
            return state - action.payload.count;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className='box-container'>
            <div className='box'>
                <p>{state}</p>
                <div className='btn-container'>
                    <button className='btn btn-inc' onClick={() => dispatch({ type: 'INCREMENT', payload: { count: 5 } })}>Increment</button>
                    <button className='btn btn-dec' onClick={() => dispatch({ type: 'DECREMENT', payload: { count: 5 } })}>Decrement</button>
                </div>
            </div>
        </div>

    );
};

export default Counter;