import React from 'react';
import './Child.css';

const Child = ({ count, setCount }) => {
    // local state
    // const [count, setCount] = useState(0);

    return (
        <div className='box-container'>
            <div className='box'>
                <div>
                    <h5>Child</h5>
                    <p>{count}</p>
                </div>
                <div className='btn-container'>
                    <button className='btn btn-inc' onClick={() => setCount(count + 1)}>Increment</button>
                    <button className='btn btn-dec' onClick={() => setCount((prvState) => prvState - 1)}>Decrement</button>
                </div>
            </div>
        </div>
    );
};

export default Child;