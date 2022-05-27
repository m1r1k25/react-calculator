import React from 'react'

import { KeypadItem, KeypadWrapper } from './components'

const Keypad = () => {
  return (
    <KeypadWrapper>
      <KeypadItem>C</KeypadItem>
      <KeypadItem>7</KeypadItem>
      <KeypadItem>8</KeypadItem>
      <KeypadItem>9</KeypadItem>
      <KeypadItem>*</KeypadItem>
      <KeypadItem>-</KeypadItem>
      <KeypadItem>4</KeypadItem>
      <KeypadItem>5</KeypadItem>
      <KeypadItem>6</KeypadItem>
      <KeypadItem>\</KeypadItem>
      <KeypadItem>+</KeypadItem>
      <KeypadItem>1</KeypadItem>
      <KeypadItem>2</KeypadItem>
      <KeypadItem>3</KeypadItem>
      <KeypadItem>=</KeypadItem>
      <KeypadItem>.</KeypadItem>
      <KeypadItem>(</KeypadItem>
      <KeypadItem>0</KeypadItem>
      <KeypadItem>)</KeypadItem>
      <KeypadItem>CE</KeypadItem>
    </KeypadWrapper>
  )
}

export default Keypad
