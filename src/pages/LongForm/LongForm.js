import React, { useReducer } from 'react';
import { initialState, reducer } from '../../state/formReducer';
import './LongForm.css';
const LongForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const submit = (e) => {
        e.preventDefault();
        console.log(state);
    }

    return (
        <div className='form-container'>
            <form onSubmit={submit}>
                <div className='row'>
                    <div>
                        <label htmlFor="firstName">First Name</label><br />
                        <input type="text" id='firstName' name="firstName" className='input-field' onBlur={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })} />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label><br />
                        <input type="text" id='lastName' name='lastName' className='input-field' onBlur={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })} />
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <label htmlFor="email">Email</label><br />
                        <input type="email" id='email' name='email' className='input-field' onBlur={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })} />
                    </div>
                    <div className='gender'>
                        <label htmlFor="gender">Gender</label><br />
                        <input type="radio" name="gender" id="male" value="male" onClick={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })} />
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" onClick={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })} />
                        <label htmlFor="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other" onClick={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })} />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <label htmlFor="education">Education</label><br />
                        <select name="education" id="education" className='input-field' style={{ width: '310px' }} onChange={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })}>
                            <option value="ssc">SSC</option>
                            <option value="hsc">HSC</option>
                            <option value="underGrad">UnderGrad</option>
                            <option value="graduate">graduate</option>
                        </select>
                    </div>
                    <div className='pcs'>
                        <label htmlFor="quantity">Number of PCs</label><br />
                        <div >
                            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
                            <input type="text" id='quantity' className='input-field' value={state.quantity} onChange={(e) => dispatch({ type: 'QUANTITY', payload: { currQuantity: e.target.value } })} />
                            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div>
                        <label htmlFor="feedback">Feedback</label><br />
                        <textarea name="feedback" id="feedback" cols="40" rows="6" className='input-field' onBlur={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })}></textarea>
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <input type="checkbox" id="term" onClick={() => dispatch({ type: 'TOGGLE' })} />
                        <label htmlFor="term" id="term" name="term" > I agree to term and condition</label>
                    </div>
                    {/* <input disabled={true} type="submit" value="Submit" /> */}
                    <button disabled={!state?.term} type="submit" style={state?.term ? { background: 'blue' } : { background: 'gray', cursor: 'not-allowed' }}>Submit</button>

                </div>

            </form>
        </div>
    );
};

export default LongForm;