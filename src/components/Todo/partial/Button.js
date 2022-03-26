import { memo } from 'react'
import { StyledButton } from './styled-custom'

const Button = (props) => {
  const { value, selected, onClick, type, children } = props

  const bgColor = {
    'primary': '#cadd9a',
    'default': selected ? '#fecba5' : 'initial',

  }[type]

  return (
    <StyledButton
      bgColor={bgColor}
      onClick={() => onClick(value)}
    >
      {children}
    </StyledButton>
  )
}

export default memo(Button);