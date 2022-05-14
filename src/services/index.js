import axios from 'axios'

export const getTouristRoutesData = async () => {
  const baseURL =
    'http://localhost:8080/tourist-routes-api/tourist-routes-data'
  try {
    const { data } = await axios.get(baseURL)
    return data
  } catch (error) {
    if (error.response) {
      return error.response.status
    }
  }
}
