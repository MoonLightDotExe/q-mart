import { createContext, useState } from 'react'

const QmartContext = createContext()

export const QmartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  return (
    <QmartContext.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {children}
    </QmartContext.Provider>
  )
}

export default QmartContext
