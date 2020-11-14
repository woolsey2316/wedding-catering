import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
} from '@fortawesome/free-solid-svg-icons'

interface NavButtonProps {
  setShow: Function
}
export function NavButton({setShow} : NavButtonProps) {
  return (
    <>
      <div 
      className="lg:-ml-24"
      onClick={()=> {setShow(prev => !prev)}}
      style={{
        position: 'absolute',
        cursor: 'pointer',
        top: '0',
        width: "0",
        height: "0",
        borderStyle: "solid",
        borderWidth: "50px 50px 0 0",
        borderColor: "#ff8965 transparent transparent transparent",
      }}/>
      <FontAwesomeIcon
        onClick={()=> {setShow(prev => !prev)}}
        className="cursor-pointer text-white absolute z-50"
        style={{
          position: 'absolute',
          top: '7',
          left: '8',
          fontSize: '16px'
        }}
        icon={faBars}
        />
    </>
  )
}