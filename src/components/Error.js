import React from 'react'
import alarm from '../alarm.png'

const Statement = props => {
  return (
    <div className="error">
      <img src={alarm} alt="alarm"/>
      <span className="error-message">Couldn't retrieve ISS position at this time, try again in a moment</span>
    </div>
  )
}

export default Statement
