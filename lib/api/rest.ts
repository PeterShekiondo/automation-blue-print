import axios from 'axios'
const serverUrl = "https://ttb-dev.throughmobile.co.tz/"


export const uploadFile = async <T>(file: File, endPoint: string) => {
  const formData = new FormData()
  formData.append('file', file)
  try {
    const response = await axios({
      method: 'post',
      url: `${serverUrl}${endPoint}`,
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return response.data as T
  } catch (error) {
    console.log(error)
  }
}
