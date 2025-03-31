import React, { createContext, useState } from 'react'
import { dummydata } from '../srore'

export const dataContext=createContext()

const UserContext = ({children}) => {
    let[cate,setCate]=useState(dummydata)
    let[input,setInput]=useState("")
    let [showCart, setShowCart]=useState(false)
let data={
input,
setInput,
cate,
setCate,
showCart,
setShowCart
}
  return (
    <div>
        <dataContext.Provider value={data}>
      {children}
      </dataContext.Provider>
    </div>
  )
}

export default UserContext
