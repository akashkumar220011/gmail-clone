import React, { useState } from 'react'
import Header from '../components/Header.jsx'
import SideBar from '../components/SideBar.jsx'


const Main = () => {
  const [openDrawer, setOpenDrawer] = useState(true);

  const toggleDrawer = () => {
    setOpenDrawer(prevState => !prevState);
  }



  return (
    <div>
      <Header toggleDrawer={toggleDrawer} />
      <SideBar toggleDrawer={toggleDrawer} openDrawer={openDrawer}/>
      <div>main section</div>
    </div>
  )
}

export default Main

