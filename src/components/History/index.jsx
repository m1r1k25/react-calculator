import React from 'react'
import {
  HistoryLine,
  HistoryHeader,
  HistoryWrapper,
} from './components'

const History = () => {
  return (
    <HistoryWrapper>
      <HistoryHeader>History</HistoryHeader>
      <HistoryLine>11 + 23</HistoryLine>
      <HistoryLine>11 + 23</HistoryLine>
      <HistoryLine>11 + 23</HistoryLine>
    </HistoryWrapper>
  )
}

export default History
