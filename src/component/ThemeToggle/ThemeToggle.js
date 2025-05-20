import { useState } from "react";


import React from 'react'
import { useDispatch, useSelector } from "react-redux";

const ThemeToggle = () => {

    const [light, setLight] = useState('')
    const [dark, setDark] = useState('')
    const [theme, setTheme] = useState('')

     const dispatch = useDispatch();

     const { lightmode, darkmode} = useSelector((state) => state.complaints)
    if (theme === dark) {
        document.body.classList.add("bg-gray-900", "text-black");
        setLight(dispatch(darkmode))
      } else {
         document.body.classList.add("bg-white-900", "text-white");
        setDark(dispatch(lightmode))
      }
}

export default ThemeToggle


