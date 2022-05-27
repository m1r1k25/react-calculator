import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppWrapper } from './components'
import HomePage from '@/screens/HomePage'
import SettingsPage from '@/screens/SettingsPage'
import Header from '@/components/Header'

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/settings"
          element={<SettingsPage />}
        />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </AppWrapper>
  )
}

export default App
