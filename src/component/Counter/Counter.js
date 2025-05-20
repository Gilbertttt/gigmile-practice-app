import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, incrementByAmount } from '../../redux/Slice/counterSlice';
import { useState } from 'react';

// import useSelector and useDispatch

const Counter = () => {
   const count = 
   useSelector((state) => state.counter.count); // Here, counter refers to the key in store.js (counter: counterReducer),and count is the actual value inside counterSlice.js.
   const dispatch = useDispatch();  // Get dispatch features 
   const [value, setValue] = useState(0);
return (
    <div className='mt-5 text-center'>
        <h2 className='text-lg font-semibold'>Redux Counter</h2>
        <h3 className='font-bold'>{`${count}`}</h3>
        <button className= "p-4 m-2 rounded bg-sky-100"
        onClick={() => dispatch(increment())}>Increment</button>
        <button className= "p-4 m-2 rounded bg-sky-100"
        onClick={() => dispatch(decrement())}>Decrement</button>
        <button className= "p-4 m-2 rounded bg-sky-100"
        onClick={() => dispatch(reset())}>Reset</button>

        <br />
             <input className=''
             type='number'
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            placeholder='Enter number'>
            </input>
            <button className= "p-4 m-2 rounded bg-sky-100"
             onClick={() => dispatch(incrementByAmount(value))}>Increment By Amount</button>   
            
            
    </div>

);
};

export default Counter;