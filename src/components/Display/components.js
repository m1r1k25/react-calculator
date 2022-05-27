import { colors } from '@/ui-kit/colors'
import { dimensions } from '@/ui-kit/dimensions'
import styled from 'styled-components'

export const DisplayWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 1rem; 
  height: 5rem;
  border-bottom: 0.125rem solid ${colors.bg_secondary};
  font-size: ${dimensions.xl_3};
`

export const DigitOperationWrapper = styled.div`
  margin: 0 0.25rem;
`