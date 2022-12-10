import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div className='box'>
                <h5>Parent</h5>
                <p>{count}</p>
            </div>
            <Child count={count} setCount={setCount} />
        </div>
    );
};

export default Parent;