import styled from 'styled-components'
import { colors } from '@/ui-kit/colors'
import { dimensions } from '@/ui-kit/dimensions'

export const HistoryWrapper = styled.div`
  margin: 1rem;
  width: 25%;
  border-left: 0.125rem solid ${colors.bg_secondary}
`

export const HistoryHeader = styled.p`
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: ${dimensions.xl_2}
`

export const HistoryLine = styled.div`
  margin-left: 1rem;
  margin-bottom: 0.3rem;
  font-size: ${dimensions.base};
  color: ${colors.bg_secondary};
`