import axios from 'axios'

const baseURL = 'https://tourist-routes-api.vercel.app/tourist-routes-api/recommendation'

export const getRecommendedTouristRoutes = async (inputs) => {
  try {
    const response = await axios.post(baseURL, {
      inputs
    })
    return response.data
  } catch (error) {
    if (error.response) {
      return error.response.status
    }
  }
}
