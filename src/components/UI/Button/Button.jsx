import React from 'react'

const Button = (props) => {
  return (
    <button type={props.type || "button"} id={props.id} className={`font-semibold py-1 px-3 rounded-sm cursor-pointer ${props.className}`} onClick={props.onClick} style={props.style}>
      {props.children}
    </button>
  )
}

export default Button
