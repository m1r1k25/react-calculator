import { colors } from '@/ui-kit/colors'
import { dimensions } from '@/ui-kit/dimensions'
import styled from 'styled-components'

export const KeypadWrapper = styled.div`
  max-width: 700px;;
  display: flex;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`

export const KeypadItem = styled.button`
  margin: 1.5rem;
  width: 4rem;
  height: 4rem;
  border: 0.09rem solid ${colors.accent_color};
  border-radius: 10px;
  cursor: pointer;
  font-size: ${dimensions.xl_3}
`