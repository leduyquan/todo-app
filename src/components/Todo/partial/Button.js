import { memo } from 'react'

const Button = memo((props) => {
  const { value, selected, onClick, className, children } = props

  const getClassBtn = () => {
    const classes = []
    selected && classes.push('selected')
    className && classes.push(className || '')
    return classes.join(' ')
  }

  const classBtn = getClassBtn()

  return (
    <button
      className={classBtn}
      onClick={() => onClick(value)}
    >
      {children}
    </button>
  )
})

export default Button;