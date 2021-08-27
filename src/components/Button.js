import React from 'react'

const Button = ({ event, styles, text }) => {  
  return (
    <button onClick={event} className={styles}>{text}</button>
  )
}

export default Button