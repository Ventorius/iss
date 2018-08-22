import axios from 'axios'
import { GOOGLE_KEY, GOOGLE_URL } from './constants'

export const getAddressFromCoordinates = async coordinates => {

  try {
    const resultType = 'result_type=natural_feature|political|point_of_interest|country'
    const {data} = await axios.get(`${GOOGLE_URL}&latlng=${coordinates.latitude},${coordinates.longitude}&${resultType}&key=${GOOGLE_KEY}`)
    return new Promise((resolve, reject) => {
      //all other statuses different than ok are indication of an error
      if (data.status === 'OK') {
        resolve(data)
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
