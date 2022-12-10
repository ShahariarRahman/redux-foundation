import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from '../App';
import Child from './Child';

const Parent = () => {
    const { count } = useContext(COUNTER_CONTEXT);
    return (
        <div>
            <div className='box'>
                <h5>Parent</h5>
                <p>{count}</p>
            </div>
            <Child />
        </div>
    );
};

export default Parent;