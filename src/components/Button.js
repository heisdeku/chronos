import React from 'react'

const Button = ({ event, styles, text }) => {  
  return (
    <button onClick={event} className={`btn btn-primary ${styles}`}>{text}</button>
  )
}

export default Button