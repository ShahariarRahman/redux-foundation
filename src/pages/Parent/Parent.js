import React, { useContext } from 'react';
import Child from '../Child/Child';
import { COUNTER_CONTEXT } from '../ContextApiPractice/ContextApiPractice';

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