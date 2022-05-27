import React from 'react'
import { useSelector } from 'react-redux'
import {
  DigitOperationWrapper,
  DisplayWrapper,
} from './components'

const Display = () => {
  const {
    prevOperand,
    operator,
    currentOperand,
  } = useSelector(state => state.homePage)
  return (
    <DisplayWrapper>
      <DigitOperationWrapper>
        {prevOperand}
      </DigitOperationWrapper>
      <DigitOperationWrapper>
        {operator}
      </DigitOperationWrapper>
      <DigitOperationWrapper>
        {currentOperand}
      </DigitOperationWrapper>
    </DisplayWrapper>
  )
}

export default Display
