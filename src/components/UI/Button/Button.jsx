import React from 'react'

const Button = (props) => {
  return (
    <button type={props.type || "button"} className={`font-semibold py-1 px-3 rounded-sm cursor-pointer ${props.className}`} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button
