import React from 'react'
import {SidebarContainer, SidebarLink, SideBtnWrap, Icon, SidebarMenu, CloseIcon, SidebarRoute} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div>
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
        <SidebarMenu>
            <SidebarLink to='/'>Pizza</SidebarLink>
            <SidebarLink to='/'>Desserts</SidebarLink>
            <SidebarLink to='/'>Full Menu</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
        <SidebarRoute to='/'>Order Now</SidebarRoute>
        </SideBtnWrap>
        </SidebarContainer>
    </div>
  )
}

export default Sidebar