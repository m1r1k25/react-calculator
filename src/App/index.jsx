import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppStyled } from './components'
import HomePage from '@/screens/HomePage'
import SettingsPage from '@/screens/SettingsPage'

const App = () => {
  return (
    <AppStyled>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/settings"
          element={<SettingsPage />}
        />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </AppStyled>
  )
}

export default App
