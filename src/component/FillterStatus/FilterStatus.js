import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const FilterStatus = () => {
    const [all, setAll] = useState('')
    const [resolve, setResolve] = useState('')
    const [filter, setFilter] = useState('')
    const dispatch = useDispatch();



  return (
    <div>
    <input 
  type='checkbox'
  checked={filter === 'all'}
  onChange={(e) => dispatch(setFilter("all"))}>All</input>
    <input 
  type='checkbox'
  value={resolve}
  onChange={(e) => setResolve(e.target.value)}>Resolved</input>
    <input 
  type='checkbox'>Unresolved</input>
      
    </div>
  )
}

export default FilterStatus
