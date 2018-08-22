import React, { Component, Fragment } from 'react'
import { getCurrentStationPosition } from './api/spaceStation'
import { getAddressFromCoordinates } from './api/google'

import Loader from './components/Loader'
import Statement from './components/Statement'
import Error from './components/Error'
import Button from './components/Button'
import Help from './components/Help'

import './App.css'

class App extends Component {

  state = {
    isLoading: true,
    coordinates: null,
    location: null,
    failed: false
  }

  getLocationOfISS = async () => {

    this.setState(prev => {
      return {
        isLoading: true
      }
    })

    try {
      const coordinates = await getCurrentStationPosition()
      const address = await getAddressFromCoordinates(coordinates)

      this.setState(prev => {
        return {
          isLoading: false,
          coordinates: coordinates,
          location: address.results[0].formatted_address,
          failed: false
        }
      })
    } catch (e) {
      this.setState(prev => {
        return {
          isLoading: false,
          coordinates: null,
          location: e,
          failed: true
        }
      })
    }
  }

  async componentDidMount () {
    this.getLocationOfISS()
  }

  render () {
    const {isLoading, location, failed, coordinates} = this.state

    return (
      <Fragment>
        <div className="container">
          {isLoading && <Loader/>}
          {!isLoading && (failed ? <Error/> : <Statement coordinates={coordinates} location={location}/>)}
        </div>
        {!isLoading && <Button onClick={this.getLocationOfISS}/>}
        <Help/>
      </Fragment>
    )
  }
}

export default App
