import React, { useState } from 'react'
import {
  AppName,
  HeaderWrapper,
  Navbar,
  NavbarItem,
} from './components'

const Header = () => {
  const [active, setActive] = useState(true)

  const onHomeClick = () => {
    setActive(true)
  }

  const onSettingsClick = () => {
    setActive(false)
  }

  return (
    <HeaderWrapper>
      <AppName>Calculator App</AppName>
      <Navbar>
        <NavbarItem
          to="/home"
          active={active}
          onClick={onHomeClick}>
          Home
        </NavbarItem>
        <NavbarItem
          to="/settings"
          active={!active}
          onClick={onSettingsClick}>
          Settings
        </NavbarItem>
      </Navbar>
    </HeaderWrapper>
  )
}

export default Header
