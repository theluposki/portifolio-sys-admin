import config from "../config.js"

export const api = async (ENDPOINT, METHOD, body, authorization=false) => {
  let HEADERS
  
  if(authorization) {
    const TOKEN = localStorage.getItem("token")
  
    if(!TOKEN) return { error: "401"}

    HEADERS = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TOKEN}`
    }
  } else {
    HEADERS = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }

  const response = await fetch(`${config.BASE_URL}${ENDPOINT}`, {
    method: METHOD,
    headers: HEADERS,
    body: JSON.stringify(body)
  })

  const data = await response.json()

  return data
}
