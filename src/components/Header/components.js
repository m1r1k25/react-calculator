import { colors } from '@/ui-kit/colors'
import { dimensions } from '@/ui-kit/dimensions'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderWrapper = styled.div`
  display: flex;  
  justify-content: space-between;
  align-items: center;
  height: 4.5rem;
  background-color: ${colors.accent_color};
  font-size: ${dimensions.base};
`

export const Navbar = styled.div`
  display: flex;
`

export const AppName = styled.div`
  padding-left: ${dimensions.xl};
  color: ${colors.bg_primary};
`

export const NavbarItem = styled(Link)`
  color: ${colors.bg_primary};
  padding-right: ${dimensions.xl};
  font-size: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-decoration: ${props => props.active ? 'underline' : 'none'}
`