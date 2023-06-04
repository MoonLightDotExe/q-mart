import { createContext, useState } from 'react'

const userContext = createContext()

export const UserProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false)

  const registerUser = async (name, email, pass) => {
    if (!name || !email || !pass) {
      console.log('ERROR')
    } else {
      const body = new URLSearchParams()
      body.append('name', name)
      body.append('email', email)
      body.append('password', pass)

      const response = await fetch(`http://localhost:5000/api/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body,
      })

      const data = await response.json()
      console.log(data)
    }
  }

  const loginUser = async (email, pass) => {
    const body = new URLSearchParams()
    body.append('email', email)
    body.append('password', pass)

    const response = await fetch(`http://localhost:5000/api/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body,
    })

    const data = await response.json()
    console.log(data)
  }

  return (
    <userContext.Provider
      value={{ registerUser, loginUser, sidebar, setSidebar }}
    >
      {children}
    </userContext.Provider>
  )
}

export default userContext
