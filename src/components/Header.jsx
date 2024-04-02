import React from 'react'
import { AppBar, Box, Toolbar, styled } from '@mui/material';
import { Menu as MenuIcon, Search , Tune, HelpOutlineOutlined, SettingsOutlined, 
  AppsOutlined, AccountCircleOutlined, } from '@mui/icons-material';
import { InputBase } from '@mui/material';
import { gmailLogo } from '../constants/constant.js';



const StyledAppBar = styled(AppBar)({
  // background: "#f5f5f5",
  background: "red",
  boxShadow: 'none',
  overflow: 'hidden'
  
})

const SearchWrapper = styled(Box)`
   background: #eaf1fb;
   margin-left : 80px;
   border-radius : 8px;
   width: 100%;
   max-width: 720px;
   height:48px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   overflow: hidden;
   padding: 0 20px;
    & > div {
        width: 100%
    }
`
const OptionsWrapper = styled(Box)`
    width: 100%;
    display: flex;
    justify-content: end;
    & > svg {
        margin-left: 20px;
    }
`
const Header = ({toggleDrawer}) => {
  return (
    <StyledAppBar position='static'>
      <Toolbar>
        <MenuIcon  color='action'  onClick={toggleDrawer}/>
        <img src={gmailLogo} alt="logo" style={{width: 105, marginLeft: 20}} />
        <SearchWrapper>
          <Search  color='action'/>
          <InputBase/>
          <Tune color='action'/>
        </SearchWrapper>

        <OptionsWrapper>
                    <HelpOutlineOutlined color="action" />
                    <SettingsOutlined color="action" />
                    <AppsOutlined color="action" />
                    <AccountCircleOutlined color="action" />
               </OptionsWrapper>
      </Toolbar>
    </StyledAppBar>
  )
}

export default Header
