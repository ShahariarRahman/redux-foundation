import React from 'react';
import './Child.css';

const Child = () => {
    return (
        <div className='box-container'>
            <div className='box'>
                <p>0</p>
                <div className='btn-container'>
                    <button className='btn btn-inc'>Increment</button>
                    <button className='btn btn-dec'>Decrement</button>
                </div>
            </div>
        </div>
    );
};

export default Child;