import React, { useState } from 'react';
import './Child.css';

const Child = () => {
    const [state, setState] = useState(0);

    return (
        <div className='box-container'>
            <div className='box'>
                <p>{state}</p>
                <div className='btn-container'>
                    <button className='btn btn-inc' onClick={() => setState(state + 1)}>Increment</button>
                    <button className='btn btn-dec' onClick={() => setState((prevState) => prevState - 1)}>Decrement</button>
                </div>
            </div>
        </div>
    );
};

export default Child;