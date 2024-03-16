import React from 'react'

import '@fortawesome/fontawesome-svg-core/styles.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
} from '@fortawesome/free-solid-svg-icons'

import {
  IconProp,
} from '@fortawesome/fontawesome-svg-core'

interface NavButtonProps {
  setShow: Function
}
export function NavButton({setShow} : NavButtonProps) {
  return (
    <>
      <div 
      className="xmd:-ml-24"
      onClick={()=> {setShow((prev: boolean) => !prev)}}
      style={{
        position: 'fixed',
        cursor: 'pointer',
        top: '0',
        width: "0",
        height: "0",
        borderStyle: "solid",
        borderWidth: "50px 50px 0 0",
        borderColor: "#ff8965 transparent transparent transparent",
      }}/>
      <FontAwesomeIcon
        onClick={()=> {setShow((prev: boolean) => !prev)}}
        className="cursor-pointer text-white absolute z-50"
        style={{
          position: 'fixed',
          top: '7',
          left: '8',
          fontSize: '16px'
        }}
        icon={faBars as IconProp}
        />
    </>
  )
}