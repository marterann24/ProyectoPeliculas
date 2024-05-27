import React from 'react'
import { useState } from 'react';
import NavPc from './NavPc'; 
import NavMobile from './NavMobile'

export const Nav = ({setUser ,user} ) => {
  const [ account , setAccount] = useState(false)

  return (
    <nav className="h-[70px] w-full flex justify-center fixed z-10 backdrop-blur ">
      <NavPc setAccount={setAccount} account={account} user={user} setUser={setUser}/>
      <NavMobile user={user}/>
    </nav>

  )
}
