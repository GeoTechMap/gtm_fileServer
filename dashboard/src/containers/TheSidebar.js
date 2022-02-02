import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

import logo from './target.svg';
// sidebar nav config
import navigation from './_nav'
import UserService from "../services/UserService";

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.changeState.sidebarShow)

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" style={{color:'white'}} to="/">
      <h4>GTM</h4>
      
       {/* <h4>Ge</h4>
         <img src={logo}  width="30" height="30" alt="logo" style={{marginRight:'-5px'}}></img>
        <h4>TechMap</h4>
     */}
   
      </CSidebarBrand>
      {/* <CounterContextProvider>
              <Search />                            
         </CounterContextProvider> */}
      <CSidebarNav>
        <CCreateElement
          items={ UserService.hasRole(['ADMIN'])? navigation.admin :
          UserService.hasRole(['OPERATEUR'])? navigation.operateur:
          []}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />  
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
     
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
