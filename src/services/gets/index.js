import axios from 'axios'

export const getTouristRoutesData = async () => {
  const baseURL =
    'https://tourist-routes-api.vercel.app/tourist-routes-api/tourist-routes-data'
  try {
    const { data } = await axios.get(baseURL)
    return data
  } catch (error) {
    if (error.response) {
      return error.response.status
    }
  }
}

export const getRecommendedRoutes = async (data) => {
  const baseURL =
  'https://tourist-routes-api.vercel.app/tourist-routes-api/tourist-route-by-class'
  try {
    const response = await axios.post(baseURL, {
      data
    })
    return response.data
  } catch (error) {
    if (error.response) {
      return error.response.status
    }
  }
}
