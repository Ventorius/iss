import React from 'react'
import navigation from '../navigation.png'
import PropTypes from 'prop-types'

const Statement = ({location, coordinates: {latitude, longitude}}) => {
  return (
    <div className="statement">Currently ISS is over
      <a href={`https://www.google.com/maps/search/${latitude},${longitude}`} className="accent">{location}
        <img className="navigation-icon" src={navigation} alt=""/>
      </a>
    </div>
  )
}

Statement.propTypes = {
  location: PropTypes.string,
  coordinates: PropTypes.object
}
Statement.defaultProps = {}

export default Statement
