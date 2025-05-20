import React, { useEffect, useState } from 'react'
import { lightmode } from '../../redux/Slice/complaintsSlice'
import { useDispatch, useSelector } from 'react-redux';
import FilterStatus from '../FillterStatus/filterStatus';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const ComplaintLists = () => {
  
    const [light, setLight] = useState('')
    const [dark, setDark] = useState('')
    const [theme, setTheme] = useState('')
    const [resolve, setResolve] = useState('')
    const {isLoading, complaints, error, lightmode, resolveComplaints, darkmode} = useSelector((state) => state.complaints);
    const dispatch = useDispatch();


    
  if (theme === dark) {
    document.body.classList.add("bg-gray-900", "text-black");
    setLight(dispatch(darkmode))
  } else {
     document.body.classList.add("bg-white-900", "text-white");
    setDark(dispatch(lightmode))
  }
   useEffect(() => {
    dispatch(resolveComplaints(setResolve), [dispatch])
   })
  
    
  return (
    
    <div>
      <ul>
        {complaints.map((complaints) => {
          if (isLoading === true) {
            <h1>Loading.......</h1>
          } 
           else{
            <li
             key={complaints}>
             <div>
             <FilterStatus/>
               <input 
             value={resolve}
             onChange={(e) => 
             setResolve(e.target.value)}
             type='checkbox'>Mark as Resolved
              <h2>Complaints: {complaints.id}<br/>
              {complaints.body}</h2>
             </input>
             </div>              
            </li>
            } 
            return {error}
            
          })}
       
      </ul>
      <button onClick={(e) => setLight(e.target.value)}>Light Mode</button>
      <button onClick={(e) => setDark(e.target.value)}>Dark Mode</button>
    </div>
  )
}

export default ComplaintLists
