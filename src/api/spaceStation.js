import axios from 'axios'
import { ROOT_URL, STATION_ID } from './constants'

export const getCurrentStationPosition = async () => {
  try {
    const {data: {latitude, longitude}} = await axios.get(`${ROOT_URL}/${STATION_ID}`)

    return new Promise((resolve, reject) => {
      if (latitude && longitude) {
        resolve({latitude, longitude})
      } else {
        reject()
      }
    })

  } catch (e) {
    return new Promise((resolve, reject) => {
      reject()
    })
  }
}

