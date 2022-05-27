import Display from '../../components/Display/index'
import React from 'react'
import Keypad from '@/components/Keypad'
import {
  DispKeyWrapper,
  HomePageWrapper,
} from './components'
import History from '@/components/History'

const HomePage = () => {
  return (
    <HomePageWrapper>
      <DispKeyWrapper>
        <Display />
        <Keypad />
      </DispKeyWrapper>
      <History />
    </HomePageWrapper>
  )
}

export default HomePage
